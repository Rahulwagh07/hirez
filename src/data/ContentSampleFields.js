// ContentSampleFields.js

const ContentSampleFields = [
  {
    id: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Enter Work title',
    validation: {
      register: { required: true },
      error: 'Title is required',
    },
  },
  {
    id: 'description',
    label: 'Description',
    type: 'textarea',
    placeholder: 'Enter Work description',
    validation: {
      register: { required: true },
      error: 'Description is required',
    },
  },
  {
    id: 'link',
    label: 'Link',
    type: 'text',
    placeholder: 'Give link',
    validation: {
      register: {},
      error: null,
    },
  },
];

export default ContentSampleFields;
