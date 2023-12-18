const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  experiences: [
    {
      title: {
        type: String,
        required: true,
      },
      company: String,
      location: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  education: [
    {
      institution: {
        type: String,
        required: true,
      },
      degree: String,
      fieldOfStudy: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  skills: [String],
  projects: [
    {
      title: {
        type: String,
        required: true,
      },
      description: String,
      startDate: Date,
      endDate: Date,
      link: String,
    },
  ],
  certifications: [
    {
      title: {
        type: String,
        required: true,
      },
      issuingOrganization: String,
      issueDate: Date,
      url: String,
    },
  ],
  contentSamples: [
    {
      title: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ["Article", "Blog Post", "Video", "Graphic", "Other"],
        required: true,
      },
      link: String,
    },
  ],
  mediaGallery: [String],  
  socialMediaLinks: {
    linkedin: String,
    twitter: String,
    instagram: String,
     
  },
  resume: {
    type: {
      url: String,
    },
  },
  contentCreationTools: [String],
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
