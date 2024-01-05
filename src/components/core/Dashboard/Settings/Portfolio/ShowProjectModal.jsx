import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addProject, updateProjects } from '../../../../../services/operations/portfolioAPI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomInput from './CustomInput';
import { formatDate } from '../../../../../utils/FormatDate';  

export default function ShowProjectModal({ editProject, setIsOpen, project, projectFields }) {
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
    console.log('projectFields:', projectFields);
  
    if (editProject) {
      projectFields.forEach((field) => {
        if (field.type === 'date') {
          setValue(field.id, formatDate(project[field.id]));
        } else {
          setValue(field.id, project[field.id]);
        }
      });
    }
  }, [editProject, project, setValue, projectFields]);
  

  const onCancel = () => {
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    projectFields.forEach((field) => {
      formData.append(field.id, data[field.id]);
    });

    if (editProject) {
      formData.append('projectId', project._id);
    }

    setLoading(true);

    try {
      const result = editProject
        ? await updateProjects(formData, token)
        : await addProject(formData, token);

      if (result) {
        onCancel();
        navigate('/dashboard/settings');
      }
    } catch (error) {
      console.error('Error submitting project:', error);
    }

    setLoading(false);
  };

  return (
    <div  className='custom_container'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-8 sm:p-4 sm:py-8 sm:w-[300px] border-brand section_bg box-shadow space-y-8 rounded-md w-[500px] mx-auto border-[1px] border-richblack-700 section_bg'
      >
        {projectFields.map((field) => (
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
          <button type='submit' className='bg-blue-150 px-6 py-2 text-white-25 rounded-md'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
