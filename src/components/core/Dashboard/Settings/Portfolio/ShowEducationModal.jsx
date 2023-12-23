 
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addEducation, updateEducation } from '../../../../../services/operations/portfolioAPI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 
export default function ShowEducationModal({ editEducation, setIsOpen, education }) {
 
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  console.log("editEducation state", editEducation)
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  
 
  //TO Format startDate and endDate as 'YYYY-MM-DD'
  const formatDate = (date) => {
    return date ? new Date(date).toISOString().split('T')[0] : '';
  };

  useEffect(() => {
    if (editEducation) {
      setValue('institution', education.institution);
      setValue('degree', education.degree);
      setValue('fieldOfStudy', education.fieldOfStudy);
      setValue('startDate', formatDate(education.startDate));
      setValue('endDate', formatDate(education.endDate));
    }
  }, [editEducation, education]);

  const onCancel = () => {
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    if (editEducation) {
      const currentValues = getValues();
      const formData = new FormData();
      console.log('Data', data);
        formData.append('educationId', education._id);
        formData.append('institution', data.institution);
        formData.append('degree', data.degree);
        formData.append('fieldOfStudy', data.fieldOfStudy);
        formData.append('startDate', data.startDate);
        formData.append('endDate', data.endDate);
      setLoading(true);
      const result = await updateEducation(formData, token);
      if (result) {
        onCancel();
        navigate("/dashboard/settings")
      }
      setLoading(false);
      return
    }

    const formData = new FormData();
    formData.append('institution', data.institution);
    formData.append('degree', data.degree);
    formData.append('fieldOfStudy', data.fieldOfStudy);
    formData.append('startDate', data.startDate);
    formData.append('endDate', data.endDate);
    setLoading(true);
    const result = await addEducation(formData, token);
    if (result) {
      onCancel();
      navigate("/dashboard/settings")     //To Do. have to render the /dashboard/settings/update-portfolio with re render
    }
    setLoading(false);
  };

  return (
    <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-8 rounded-md w-[500px] mx-auto border-[1px] border-richblack-700 section_bg'
      >
         {/* Institution */}
         <div className="flex flex-col space-y-2">
                <label className="text-sm text-black" htmlFor="institution">
                Institution <sup className="text-pink-200">*</sup>
                </label>
                <input
                id="institution"
                placeholder="Enter Institution Name"
                {...register("institution", { required: true })}
                className="form-style w-full"
                />
                {errors.institution && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Institution Name is required
                </span>
                )}
             </div>
            {/* FOS */}
            <div className="flex flex-col space-y-2">
                <label className="text-sm text-black" htmlFor="fieldOfStudy">
                Field of study <sup className="text-pink-200">*</sup>
                </label>
                <input
                id="fieldOfStudy"
                placeholder="Enter fieldOfStudy"
                {...register("fieldOfStudy", { required: true })}
                className="form-style   w-full"
                />
                {errors.fieldOfStudy && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Enter The filed of Study
                </span>
                )}
            </div>
            {/* Degree */}
            <div className="flex flex-col space-y-2">
                <label className="text-sm text-black" htmlFor="degree">
                Degree <sup className="text-pink-200">*</sup>
                </label>
                <input
                id="degree"
                placeholder="Enter The Degree"
                {...register("degree", { required: true })}
                className="form-style  w-full"
                />
                {errors.degree && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Degree is required
                </span>
                )}
            </div>
            {/* startdate */}
            <div className="flex flex-col space-y-2">
                <label className="text-sm text-black" htmlFor="startDate">
                Start Date <sup className="text-pink-200">*</sup>
                </label>
                <input
                id="startDate"
                type='date'
                {...register("startDate")}
                className="form-style  w-full"
                />
            </div>

            {/* enddate */}
            <div className="flex flex-col space-y-2">
                <label className="text-sm text-black" htmlFor="endDate">
                End Date <sup className="text-pink-200">*</sup>
                </label>
                <input
                id="endDate"
                type='date'
                {...register("endDate")}
                className="form-style w-full"
                />
            </div>
        
        <div className='flex justify-end gap-x-2'>
          <button onClick={onCancel} className='text-blue-150'>
            Cancel
          </button>
          <button type='submit' className='bg-blue-150'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
