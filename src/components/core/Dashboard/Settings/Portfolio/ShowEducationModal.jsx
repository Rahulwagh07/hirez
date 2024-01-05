// ShowEducationModal.js
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addEducation, updateEducation } from '../../../../../services/operations/portfolioAPI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomInput from './CustomInput';
import { formatDate } from '../../../../../utils/FormatDate';  

export default function ShowEducationModal({ editEducation, setIsOpen, education, educationFields }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 

  useEffect(() => {
    if (editEducation) {
      educationFields.forEach((field) => {
        if (field.type === 'date') {
          setValue(field.id, formatDate(education[field.id]));
        } else {
          setValue(field.id, education[field.id]);
        }
      });
    }
  }, [editEducation, education, setValue, educationFields]);


  const onCancel = () => {
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    educationFields.forEach((field) => {
      formData.append(field.id, data[field.id]);
    });

    if (editEducation) {
      formData.append('educationId', education._id);
    }

    setLoading(true);

    try {
      const result = editEducation
        ? await updateEducation(formData, token)
        : await addEducation(formData, token);

      if (result) {
        onCancel();
        navigate('/dashboard/settings');
      }
    } catch (error) {
      console.error('Error submitting education:', error);
    }

    setLoading(false);
  };

  return (
    <div  className='custom_container'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-8 sm:p-4 sm:py-8 sm:w-[300px] section_bg border-brand  box-shadow space-y-8 rounded-md w-[500px]   mx-auto border-[1px] border-richblack-700'
      >
        {educationFields.map((field) => (
          <CustomInput
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            register={register}
            error={errors[field.id] && field.validation.error}
          />
        ))}

        <div className='flex justify-end gap-x-8'>
          <button onClick={onCancel} className='text-bule-150'>
            Cancel
          </button>
          <button type='submit' className='bg-blue-150  px-6 py-2 text-white-25 rounded-md'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
