const Portfolio = require("../../models/Portfolio");
const { uploadImageToCloudinary } = require("../../utils/imageUploader");
const cloudinary = require('cloudinary').v2;
 

exports.updateResume = async (req, res) => {
  try {
      const resume = req.files.resume;
      const userId = req.user.id;
      const result = await uploadImageToCloudinary(
          resume,
          process.env.FOLDER_NAME,
      );
      
      // Save resume url in the portfolio
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
          { user: userId },
          {
              $set: {
                  resume: {
                      url: result.secure_url,
                      name: resume.name,
                  },
              },
          },
          { new: true, upsert: true }
      );

      res.send({
          success: true,
          message: `Resume Updated`,
          data: result,
      });
  } catch (error) {
      return res.status(500).json({
          success: false,
          message: error.message,
      });
  }
};
 
exports.deleteResume = async (req, res) => {
  try {
    const userId = req.user.id;

    await Portfolio.findOneAndUpdate(
      { user: userId },
      { $unset: { resume: 1 } }, //To Remove the resume field from the document
      { new: true }
    );

    res.json({
      success: true,
      message: "Resume deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
  
exports.getResume = async (req, res) => {
  try {
    const userId = req.user.id;  
    const portfolio = await Portfolio.findOne({ user: userId }).populate("resume");

    if(portfolio?.resume){
      res.json({
        success: true,
        data: portfolio?.resume,
      });
    } else{
      res.json({
        success: false,
        message:"Resume is  Not uploaded",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
