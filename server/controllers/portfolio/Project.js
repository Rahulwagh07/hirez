const Portfolio = require("../../models/Portfolio");

exports.addProject = async (req, res) => {
    try {
      const { title, description, startDate, endDate, link } = req.body;
      const userId = req.user.id;
  
      const newProject = {
        title,
        description,
        startDate,
        endDate,
        link,
      };
  
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        {
          $push: {
            projects: newProject,
          },
        },
        { new: true, upsert: true }
      );
  
      res.json({
        success: true,
        message: "Project added successfully",
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

  exports.getAllProjects = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const portfolio = await Portfolio.findOne({ user: userId }).populate("projects");
  
      res.json({
        success: true,
        data: portfolio.projects,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  exports.updateProjects = async (req, res) => {
    try {
        const { projectId, title, description, startDate, endDate, link } = req.body;
        const userId = req.user.id;

        const updatedPortfolio = await Portfolio.findOneAndUpdate(
            { user: userId, "projects._id": projectId },
            {
                $set: {
                    "projects.$.title": title,
                    "projects.$.description": description,
                    "projects.$.startDate": startDate,
                    "projects.$.endDate": endDate,
                    "projects.$.link": link,
                },
            },
            { new: true }
        );

        res.json({
            success: true,
            message: "Project Updated",
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


  exports.deleteProject = async (req, res) => {     
    try {
      const userId = req.user.id;
      const {projectId} =  req.body;
  
       const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { user: userId },
        { $pull: { projects: { _id: projectId } } },
        { new: true }
      );
  
      res.json({
        success: true,
        message: "Project deleted successfully",
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
