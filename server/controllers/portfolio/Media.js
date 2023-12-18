const Portfolio = require("../../models/Portfolio");


exports.updateMediaGallery = async (req, res) => {
    try {
      const { mediaUrls } = req.body;
      const userId = req.user.id;
  
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        {
          mediaGallery: mediaUrls,
        },
        { new: true, upsert: true }
      );
  
      res.json({
        success: true,
        message: "Media Gallery Updated",
        data: updatedPortfolio,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  exports.updateSocialMediaLinks = async (req, res) => {
    try {
      const { linkedin, twitter, instagram } = req.body;
      const userId = req.user.id;
  
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        {
          socialMediaLinks: {
            linkedin,
            twitter,
            instagram,
          },
        },
        { new: true, upsert: true }
      );
  
      res.json({
        success: true,
        message: "Social Media Links Updated",
        data: updatedPortfolio,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  exports.addContentSample = async (req, res) => {
    try {
      const { title, type, link } = req.body;
      const userId = req.user.id;
  
      const newContentSample = {
        title,
        type,
        link,
      };
  
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        {
          $push: {
            contentSamples: newContentSample,
          },
        },
        { new: true, upsert: true }
      );
  
      res.json({
        success: true,
        message: "Content Sample added successfully",
        data: updatedPortfolio,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  

exports.updateContentSamples = async (req, res) => {  //TO do 
  try {
    const { title, type, link } = req.body;
    const userId = req.user.id;

     
  } catch (error) {
     
    }
  }

