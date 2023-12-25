// data/SocialMediaProfilesFields.js

const SocialMediaProfilesFields = [
    {
      id: 'profileName',
      label: 'Profile Name',
      type: 'text',
      placeholder: 'Enter Profile Name',
      validation: {
        register: { required: true },
        error: 'Profile Name is required',
      },
    },
    {
      id: 'url',
      label: 'URL',
      type: 'text',
      placeholder: 'Enter Profile URL',
      validation: {
        register: { required: true },
        error: 'URL is required',
      },
    },
  ];
  
  export default SocialMediaProfilesFields;
  