const mongoose = require("mongoose");
const User = require("../models/User");
const Job = require("../models/Job");
const Applications = require("../models/Applications");

exports.getAllAppliedJobs = async (req, res) => {
    try {
        // Get the jobSeeker Id
        const userID = req.user.id;

        // Find all applied jobs 
        const appliedJobs = await Applications.find({ applicant: userID })
            .populate({
                path: 'job',  
                select: 'title description salary status location',
                populate: {
                    path: 'creator',
                    select: 'firstName lastName email', 
                },
            });

        res.status(200).json({ success: true, data: appliedJobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to fetch the applied jobs' });
    }
};


exports.getJobDetails = async (req, res) => {
    try {
        const { jobId } = req.body;
        // Find the specific job based on the job ID
        const userId = req.user.id
        const jobDetails = await Job.findOne({
            _id: jobId,
        })
          .populate({
            path: "creator",
            populate: {
                path: "additionalDetails",
            }
          })
            .exec()
        
        if (!jobDetails) {
            return res.status(400).json({
                success: false,
                message: `Could not find Job with id: ${jobId}`,
            })
        }

        return res.status(200).json({
            success: true,
            data: {
                jobDetails,
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createJob = async (req, res) => {
    try {
        // Extract job details from the request body
        const { title, description, skillRequired, category, location, salary, status} = req.body;

        // Get the creator's ID  
        const creatorID = req.user.id;

        // Validate job details
        if (!title || !description || !skillRequired || !salary || !status) {
            return res.status(400).json({ success: false, error: 'Title, description, skillRequired, salary are required fields' });
        }

        // Check if the user is an instructor
        const isCreator = await User.findById(creatorID, {
            accountType: "Creator",
        })

        if (!isCreator) {
            return res.status(404).json({
              success: false,
              message: "The user is Not a Creator to post a job",
            })
          }
        // Create a new job instance
        const newJob = new Job({
            title,
            description,
            skillRequired,
            category,
            location,
            salary,
            status,
            creator: creatorID,
        });

        //add the job to user schema of the creator
        await User.findByIdAndUpdate(
            {
                _id: isCreator._id,
            },
            {
                $push:{
                    jobs:  newJob._id,
                },
            },
            {new : true}
        )

        // Save the new job to the db
        await newJob.save();
      

        res.status(201).json({ success: true, data: newJob });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error in creating a job' });
    }
};

exports.editJob = async (req, res) => {
    try {
        const { jobId } = req.body  
        const { title, description, skillRequired, category, location, salary, status } = req.body;

        // Validate job details
        if (!title || !description || !skillRequired || !salary || !status) {
            return res.status(400).json({ success: false, error: 'Title, description, skillRequired, salary are required fields' });
        }

        // Find the job by ID
        const existingJob = await Job.findById(jobId);

        if (!existingJob) {
            return res.status(404).json({ success: false, error: 'Job not found' });
        }

        
        // Update the job fields
        existingJob.title = title;
        existingJob.description = description;
        existingJob.skillRequired = skillRequired;
        existingJob.category = category;
        existingJob.location = location;
        existingJob.salary = salary;
        existingJob.status = status;

        // Save the updated job
        await existingJob.save();

        res.status(200).json({ success: true, data: existingJob });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error in updating the job' });
    }
};
 
 
exports.getAllApplicantsForJob = async (req, res) => {
    try {
      const { jobId } = req.query;
  
      const applicantsForJob = await Applications.find({ job: jobId })
    .populate({
        path: 'applicant',
        select: '-password', // Exclude password from user details
        populate: {
            path: 'additionalDetails',  
            model: 'Profile',  
        },
    });
  
      res.status(200).json({ success: true, data: applicantsForJob });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Can not get all applicants' });
    }
  };
  


exports.hireJobSeeker = async (req, res) => {
    try {
        // Get the job and applicant IDs  
        const { jobId, applicantId } = req.body;
       

        // Update the application status to hired
        const updatedApplication = await Applications.findOneAndUpdate(
            { job: jobId, applicant: applicantId },
            { $set: { status: "Hired" } },
            { new: true }
        );

        if (!updatedApplication) {
            return res.status(404).json({ success: false, error: 'Application not found' });
        }

        // Notify the job seeker about the hire  
        // const jobSeeker = await User.findById(applicantId);
        // if (jobSeeker) {
        //      //to do -> send mail
        // }

        res.status(200).json({ success: true, data: updatedApplication });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

 
 

// Controller function
exports.getAllJobsByCreator = async (req, res) => {
    try {
        // Get the creator's ID  
        const creatorID = req.user.id;

        if (!creatorID) {
            return res.status(401).json({ success: false, error: 'Unauthorized' });
        }

        // Find all jobs posted by the specific creator
        const allJobsByCreator = await Job.find({ creator: creatorID });

        res.status(200).json({ success: true, data: allJobsByCreator });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};



 

exports.applyForJob = async (req, res) => {
    try {
        
        const { jobId } = req.body;
 

        // Get the job seeker's ID  
        const applicantId = req.user.id;

        // Check if the job exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ success: false, error: 'Job not found' });
        }

        // Check if the job seeker has already applied for this job
        const existingApplication = await Applications.findOne({ job: jobId, applicant: applicantId });
        if (existingApplication) {
            return res.status(400).json({ success: true, isApplied:true,  error: 'You have already applied for this job' });
             
        }

        // Create a new application
        const newApplication = new Applications({
            job: jobId,
            applicant: applicantId,
            status: 'Pending',  
        });

        // Save the application to the database
        const createdApplication = await newApplication.save();

        res.status(201).json({ success: true, data: createdApplication });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};


exports.deleteJob = async (req, res) => {
    try{
        const { jobId } = req.body;

        const job = await Job.findById(jobId)

        if(!job){
            return res.status(404).json({ message: "Job not found" })
        }

        //To do find more from where have to delete
        await Job.findByIdAndDelete(jobId)

        return res.status(200).json({ success: true, message: "Job Deleted Successfullly", });
    } catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Server Error", error: error.message, });
    }
}

//controller for fetching all open Jobs
exports.getAllJobs = async (req, res) => {
    try {
        let query = {
            status: 'open',
        };

        
        if (req.body.role) {
            query.category = req.body.role;
        }

        if (req.body.location) {
            query.location = req.body.location;
        }

        if (req.body.salary) {
            const [minSalary, maxSalary] = req.body.salary.split('-').map(Number);
            if (!isNaN(minSalary) && !isNaN(maxSalary)) {
                query.salary = { $gte: minSalary, $lte: maxSalary };
            } else {
                console.error('Invalid salary format:', req.body.salary);
            }
        }

        if (req.body.skills) {
            query.skillRequired = { $all: req.body.skills };
        }

        // Apply search
        if (req.body.search) {
            query.$or = [
                { title: { $regex: req.body.search, $options: 'i' } },
                { description: { $regex: req.body.search, $options: 'i' } },
            ];
        }

        const jobs = await Job.find(query);

        res.status(201).json({ 
            success: true, 
            data: jobs 
        });

    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: "Server error"
        });
    }
}


exports.changeApplicationStatus = async (req, res) => {
    try {
        const { applicationId } = req.body;

        const result = await Applications.findByIdAndUpdate(
            { _id: applicationId },
            { $set: { status: "Reviewed" } },
            { new: true }
        );

        if (!result) {
            throw new Error("Application Status is not Changed");
        }

        res.status(200).json({
            success: true,
            message: "Application Status Changed Successfully",
            data: result,
        });
    } catch (error) {
        console.error("Change Application Status error", error);
    }
};;


exports.getApplicationStatus = async (req, res) => {
    try { 
        const { jobId, applicantId } = req.body;
        //Find the Application
        const application = await Applications.findOne(
            { job: jobId, applicant: applicantId }, 
        );

        if (!application) {
            return res.status(404).json({ success: false, error: 'Application not found' });
        }
        res.status(200).json({ success: true, data: application.status});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};



exports.getRecommendedJobs = async (req, res) => {
    try {
      const { interestedRole } = req.body;  
      
      const recommendedJobs = await Job.find({
        category: interestedRole,
        status: 'open',
      })
        .sort({ createdAt: -1 })
        .limit(15);
  
      res.status(200).json({
        success: true,
        message: 'Recommended jobs fetched successfully',
        data: recommendedJobs,
      });
    } catch (error) {
      console.error('GET Recommended Jobs error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  