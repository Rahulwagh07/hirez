const CertificationFields = [
    {
      id: 'title',
      label: 'Title',
      type: 'text',
      placeholder: 'Enter certification title',
      validation: {
        error: 'Title is required',
      },
    },
    {
      id: 'issuingOrganization',
      label: 'Issuing Organization',
      type: 'text',
      placeholder: 'Enter issuing organization',
      validation: {
        error: 'Issuing organization is required',
      },
    },
    {
      id: 'issueDate',
      label: 'Issue Date',
      type: 'date',
      placeholder: 'Select issue date',
      validation: {
        error: 'Issue date is required',
      },
    },
    {
      id: 'url',
      label: 'URL',
      type: 'text',
      placeholder: 'Enter URL',
      validation: {
        error: 'URL is required',
      },
    },
  ];
  
  export default CertificationFields;
  