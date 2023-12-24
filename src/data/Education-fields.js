const EducationFields = [
    {
      id: "institution",
      label: "Institution",
      type: "text",
      placeholder: "Enter Institution Name",
      validation: {
        register: { required: true },
        error: "Institution Name is required",
      },
    },
    {
      id: "fieldOfStudy",
      label: "Field of study",
      type: "text",
      placeholder: "Enter Field of Study",
      validation: {
        register: { required: true },
        error: "Enter the field of study",
      },
    },
    {
      id: "degree",
      label: "Degree",
      type: "text",
      placeholder: "Enter The Degree",
      validation: {
        register: { required: true },
        error: "Degree is required",
      },
    },
    {
      id: "startDate",
      label: "Start Date",
      type: "date",
      placeholder: "",
      validation: {
        register: {},
        error: null,
      },
    },
    {
      id: "endDate",
      label: "End Date",
      type: "date",
      placeholder: "",
      validation: {
        register: {},
        error: null,
      },
    },
  ];
  
  export default EducationFields;
  