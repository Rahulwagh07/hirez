import React from 'react';
import { FaLinkedin, FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const SocialMediaProfiles = ({ profiles }) => {
  const getIcon = (profileName) => {
    switch (profileName.toLowerCase()) {
      case 'linkedin':
        return <FaLinkedin/>;
      case 'youtube':
        return <FaYoutube/>;
      case 'twitter':
        return <FaTwitter/>;
      case 'instagram':
      return <FaInstagram/>;
      case 'facebook':
      return <FaFacebook/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center space-x-4 mt-4">
      {profiles.map((profile) => (
        <a
          key={profile._id}
          href={profile.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          {getIcon(profile.profileName)}
          <span className="ml-2">{profile.profileName}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaProfiles;
