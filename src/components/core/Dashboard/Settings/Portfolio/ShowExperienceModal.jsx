import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addExperience, updateExperience } from '../../../../../services/operations/portfolioAPI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomInput from './CustomInput';
import { formatDate } from '../../../../../utils/FormatDate';  

export default function ShowExperienceModal({ editExperience, setIsOpen, experience, experienceFields }) {
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
    if (editExperience) {
      experienceFields.forEach((field) => {
        if (field.type === 'date') {
          setValue(field.id, formatDate(experience[field.id]));
        } else {
          setValue(field.id, experience[field.id]);
        }
      });
    }
  }, [editExperience, experience, setValue, experienceFields]);

  const onCancel = () => {
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    experienceFields.forEach((field) => {
      formData.append(field.id, data[field.id]);
    });

    if (editExperience) {
      formData.append('experienceId', experience._id);
    }

    setLoading(true);

    try {
      const result = editExperience
        ? await updateExperience(formData, token)
        : await addExperience(formData, token);

      if (result) {
        onCancel();
        navigate('/dashboard/settings');
      }
    } catch (error) {
      console.error('Error submitting experience:', error);
    }

    setLoading(false);
  };

  return (
    <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-8 sm:p-4 sm:py-8 sm:w-[300px] border-brand section_bg box-shadow space-y-8 rounded-md w-[500px] mx-auto border-[1px] border-richblack-700 section_bg'
      >
        {experienceFields.map((field) => (
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
          <button type='submit' className='bg-blue-150 px-6 py-2 rounded-md'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
