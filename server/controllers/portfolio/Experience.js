const Portfolio = require("../../models/Portfolio");

exports.addExperience = async (req, res) => {
    try {
      const { title, company, location, startDate, endDate, description } = req.body;
      const userId = req.user.id;
  
      const newExperience = {
        title,
        company,
        location,
        startDate,
        endDate,
        description,
      };
  
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        {
          $push: {
            experiences: newExperience,
          },
        },
        { new: true, upsert: true }
      );
  
      res.json({
        success: true,
        message: "Experience added successfully",
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

  exports.getAllExperiences = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const portfolio = await Portfolio.findOne({ user: userId }).populate("experiences");
  
      res.json({
        success: true,
        data: portfolio.experiences,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  exports.updateExperiences = async (req, res) => {
    try {
      const { experienceId, title, company, location, startDate, endDate, description } = req.body;
      const userId = req.user.id;
  
       
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId, 'experiences._id': experienceId },
        {
          $set: {
            'experiences.$.title': title,
            'experiences.$.company': company,
            'experiences.$.location': location,
            'experiences.$.startDate': startDate,
            'experiences.$.endDate': endDate,
            'experiences.$.description': description,
          },
        },
        { new: true, upsert: true }
      );
  
      res.send({
        success: true,
        message: `Experiences Updated`,
        data: updatedPortfolio,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  

  exports.deleteExperience = async (req, res) => {            
    try {
      const userId = req.user.id;
      const { experienceId } =  req.body;
  
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        { $pull: { experiences: { _id: experienceId } } },
        { new: true }
      );
  
      res.json({
        success: true,
        message: "Experience deleted successfully",
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
 