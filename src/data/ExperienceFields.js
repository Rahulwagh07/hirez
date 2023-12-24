const ExperienceFields = [
    {
      id: "title",
      label: "Title",
      type: "text",
      placeholder: "Enter Title",
      validation: {
        required: true,
        error: "Title is required",
      },
    },
    {
      id: "company",
      label: "Company",
      type: "text",
      placeholder: "Enter Company or Creator Name",
      validation: {
        required: true,
        error: "Company Name is required",
      },
    },
    {
      id: "description",
      label: "Description",
      type: "text",
      placeholder: "Enter Description",
      validation: {
        required: true,
        error: "Description is required",
      },
    },
    {
      id: "location",
      label: "Location",
      type: "text",
      placeholder: "Enter Location",
      validation: {
        required: true,
        error: "Location is required",
      },
    },
    {
      id: "startDate",
      label: "Start Date",
      type: "date",
      placeholder: "",
      validation: {
        required: true,
        error: "Start Date is required",
      },
    },
    {
      id: "endDate",
      label: "End Date",
      type: "date",
      placeholder: "",
      validation: {
        required: true,
        error: "End Date is required",
      },
    },
  ];
  
  export default ExperienceFields;
  