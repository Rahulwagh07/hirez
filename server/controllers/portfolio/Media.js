const Portfolio = require("../../models/Portfolio");


exports.updateMediaGallery = async (req, res) => {
  try {
    const { mediaUrls } = req.body;
    const userId = req.user.id;

    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { user: userId },
      { mediaGallery: mediaUrls },
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

 
exports.addContentSample = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const userId = req.user.id;

    const newContentSample = {
      title,
      description,
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
      data: updatedPortfolio.contentSamples,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.updateContentSamples = async (req, res) => {
  try {
    const { contentSampleId, title, description, link } = req.body;
    const userId = req.user.id;

    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { user: userId, "contentSamples._id": contentSampleId },
      {
        $set: {
          "contentSamples.$.title": title,
          "contentSamples.$.description": description,
          "contentSamples.$.link": link,
        },
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Content Sample updated successfully",
      data: updatedPortfolio.contentSamples,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


exports.deleteContentSample = async (req, res) => {
  try {
    const { contentSampleId } = req.body;
    const userId = req.user.id;

    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { user: userId },
      { $pull: { contentSamples: { _id: contentSampleId } } },
      { new: true }
    );

    res.json({
      success: true,
      message: "Content Sample deleted successfully",
      data: updatedPortfolio.contentSamples,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.addSocialMediaProfile = async (req, res) => {
  try {
    const { profileName, url} = req.body;
    const userId = req.user.id;

    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { user: userId },
      {
        $push: {
          socialMediaProfiles: {
            profileName,
            url,
          },
        },
      },
      { new: true, upsert: true }
    );

    res.json({
      success: true,
      message: "Social Media Profile Added",
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

exports.updateSocialMediaProfile = async (req, res) => {
  try {
    const { profileId, profileName, url} = req.body;
    const userId = req.user.id;

    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { user: userId, 'socialMediaProfiles._id': profileId },
      {
        $set: {
          'socialMediaProfiles.$.profileName': profileName,
          'socialMediaProfiles.$.url': url,
        },
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Social Media Profile Updated",
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

exports.deleteSocialMediaProfile = async (req, res) => {
  try {
    const { profileId } = req.body;
    const userId = req.user.id;

    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { user: userId },
      {
        $pull: {
          socialMediaProfiles: { _id: profileId },
        },
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Social Media Profile Deleted",
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

  exports.getMedia = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const portfolio = await Portfolio.findOne({ user: userId }).populate("contentSamples", "socialMediaLinks");
  
      res.json({
        success: true,
        data: {
          contentSamples: portfolio.contentSamples,
          socialMediaProfiles: portfolio.socialMediaProfiles,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  