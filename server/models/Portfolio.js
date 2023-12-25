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
      description: {
        type: String,
        required: true,
      },
      link: String,
    },
  ], 

  socialMediaProfiles: [
    {
      profileName: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  resume: {
    type: {
      url: String,
      name: String,
      extension: String,
    },
  },

  contentCreationTools: [String],
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
