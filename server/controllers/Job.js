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
                select: 'title description skillRequired qualification salary status',
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
        
        const { jobId } = req.params;

        // Find the specific job based on the job ID
        const jobDetails = await Job.findById(jobId)
            .populate('creator', 'firstName lastName email');  

        if (!jobDetails) {
            return res.status(404).json({ success: false, error: 'Job not found' });
        }

        res.status(200).json({ success: true, data: jobDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
}

exports.createJob = async (req, res) => {
    try {
        // Extract job details from the request body
        const { title, description, skillRequired, qualification, salary, status} = req.body;

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
            qualification,
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
        console.log(error);
        res.status(500).json({ success: false, error: 'Error in creating a job' });
    }
};

 
exports.getAllApplicantsForJob = async (req, res) => {
    try {
       
        const { jobId } = req.body;

        // Find all applicants for the specific job & Exclude the Password
        const applicantsForJob = await Applications.find({ job: jobId })
            .populate('applicant', '-password');  

        res.status(200).json({ success: true, data: applicantsForJob });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'can not get teh all applicants' });
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
        const jobSeeker = await User.findById(applicantId);
        if (jobSeeker) {
             //to do -> send mail
        }

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
        console.log("applicantsID", applicantId);

        // Check if the job exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ success: false, error: 'Job not found' });
        }

        // Check if the job seeker has already applied for this job
        const existingApplication = await Applications.findOne({ job: jobId, applicant: applicantId });
        if (existingApplication) {
            return res.status(400).json({ success: false, error: 'You have already applied for this job' });
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
