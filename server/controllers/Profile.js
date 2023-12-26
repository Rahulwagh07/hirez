const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const mongoose = require("mongoose");
const Portfolio = require("../models/Portfolio")


exports.updateProfile = async (req, res) => {
    try{
        const {
            firstName = "",
            lastName = "",
            dateOfBirth = "",
            about = "",
            contactNumber = "",
            gender = "", 
        } = req.body;
        const id = req.user.id

        // Find the profile by id
        const userDetails = await User.findById(id)
        const profile = await Profile.findById(userDetails.additionalDetails)
    
        const user = await User.findByIdAndUpdate(id, {
          firstName,
          lastName,
        })
        await user.save()
    
        // Update the profile fields
        profile.dateOfBirth = dateOfBirth
        profile.about = about
        profile.contactNumber = contactNumber
        profile.gender = gender
    
        // Save the updated profile
        await profile.save()
    
        // Find the updated user details
        const updatedUserDetails = await User.findById(id)
          .populate("additionalDetails")
          .exec()
    
        return res.json({
          success: true,
          message: "Profile updated successfully",
          updatedUserDetails,
        })
      } catch (error) {
        console.log(error)
        return res.status(500).json({
          success: false,
          error: error.message,
        })
      }
}

exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }
 

exports.getJobSeekerProfile = async (req, res) => {
    try {
        // Get the job seeker ID from the route parameters
        const { jobSeekerId } = req.params;

        // Find the specific job seeker based on the ID
        const jobSeekerDetails = await User.findById(jobSeekerId)
            .select('-password') // Exclude password from the response
            .populate('additionalDetails', '-_id') 

        if (!jobSeekerDetails) {
            return res.status(404).json({ success: false, error: 'Job seeker not found' });
        }

        res.status(200).json({ success: true, data: jobSeekerDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

exports.getAllUserDetails = async (req, res) => {
  try {
    const id = req.user.id
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec()
     
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: userDetails,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.deleteAccount = async (req, res) => {
  try {
    const id = req.user.id
    const user = await User.findById({ _id: id })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }
    // Delete Assosiated Profile with the User
    await Profile.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(user.additionalDetails),
    })
    for (const courseId of user.courses) {
      await Course.findByIdAndUpdate(
        courseId,
        { $pull: { studentsEnroled: id } },
        { new: true }
      )
    }
    // Now Delete User
    await User.findByIdAndDelete({ _id: id })
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    })
    await CourseProgress.deleteMany({ userId: id })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ success: false, message: "User Cannot be deleted successfully" })
  }
}

exports.getApplicantProfile = async (req, res) => {
  try {
    const { applicantId } = req.params;
 
    const portfolio = await Portfolio.findOne({ user: applicantId });

    if (!portfolio) {
      console.log('Portfolio not found for applicantId:', applicantId);
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    const user = await User.findById(applicantId)
    .select('-password -token')
    .populate('additionalDetails');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const response = {
      portfolio,
      user,
    };

    res.status(200).json({
      success: true,
      message: "User details fetched successfly",
      data: response,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


 

 
