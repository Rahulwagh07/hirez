const Portfolio = require("../../models/Portfolio");

exports.addCertification = async (req, res) => {
    try {
      const { title, issuingOrganization, issueDate, url } = req.body;
      const userId = req.user.id;
  
       const newCertification = {
        title,
        issuingOrganization,
        issueDate,
        url,  
      };
  
       
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        {
          $push: {
            certifications: newCertification,
          },
        },
        { new: true, upsert: true }
      );
  
      res.json({
        success: true,
        message: "Certification added successfully",
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


  exports.deleteCertification = async (req, res) => {   
    try {
      const userId = req.user.id;
      const {certificationId} = req.body;
      console.log("CERTIFICATION ID", certificationId)
  
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        { $pull: { certifications: { _id: certificationId } } },
        { new: true }
      );
  
      res.json({
        success: true,
        message: "Certification deleted successfully",
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