const Portfolio = require("../../models/Portfolio");

exports.addEducation = async (req, res) => {
    try {
      const { institution, degree, fieldOfStudy, startDate, endDate } = req.body;
      const userId = req.user.id;
  
      const newEducation = {
        institution,
        degree,
        fieldOfStudy,
        startDate,
        endDate,
      };
  
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        { $push: { education: newEducation } },
        { new: true, upsert: true }
      );
  
      res.status(201).json({ success: true, data: updatedPortfolio.education });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Server Error" });
    }
  };
  
  exports.getAllEducations = async (req, res) => {
    try {
      const userId = req.user.id;
      const portfolio = await Portfolio.findOne({ user: userId });
      if (!portfolio || !portfolio.education) {
        return res.status(404).json({ success: false, message: "No education entries found" });
      }
  
      const educations = portfolio.education;
      res.status(200).json({ success: true, data: educations });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Server Error" });
    }
  };
  

  exports.updateEducation = async (req, res) => {
    try {
      const userId = req.user.id;
      const {educationId} = req.body;  
      const updatedEducationData = req.body; 
  
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId, "education._id": educationId },
        { $set: { "education.$": updatedEducationData } },
        { new: true }
      );
  
      res.json({
        success: true,
        message: "Education entry updated successfully",
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

  
  exports.deleteEducation = async (req, res) => {    
    try {
      const userId = req.user.id;
      const {educationId} = req.body;  
  
       const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        { $pull: { education: { _id: educationId } } },
        { new: true }
      );
  
      res.json({
        success: true,
        message: "Education entry deleted successfully",
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
