const Portfolio = require("../../models/Portfolio");
const { uploadImageToCloudinary } = require("../../utils/imageUploader");

exports.updateResume = async (req, res) => {
    try {
      const resume = req.files.resume; 
      const userId = req.user.id;
      const result = await uploadImageToCloudinary(
        resume,
        process.env.FOLDER_NAME,
        1000,
        1000
      );
  
      // Save resume  in the portfolio
      const updatedPortFolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        {
          $set: {
            resume: {
              url: result.secure_url,
            },
          },
        },
        { new: true, upsert: true }
      );
  
      res.send({
        success: true,
        message: `Resume Updated`,
        data: updatedPortFolio,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
   