import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addSocialMediaProfile, updateSocialMediaProfile } from "../../../../../services/operations/portfolioAPI";
import CustomInput from "./CustomInput";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function ShowSocialModal({ editSocialMediaProfile, setIsOpen, profile, socialMediaProfilesFields }) {
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
    if(editSocialMediaProfile) {
      socialMediaProfilesFields.forEach((field) => {
        setValue(field.id, profile[field.id]);
      })
    }
  }, [editSocialMediaProfile, profile, setValue, socialMediaProfilesFields])

  const onCancel = () => {
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    socialMediaProfilesFields.forEach((field) => {
      formData.append(field.id, data[field.id]);
    });

    if(editSocialMediaProfile) {
      formData.append('profileId', profile._id);
    }

    setLoading(true);

    try {
      const result = editSocialMediaProfile
        ? await updateSocialMediaProfile(formData, token)
        : await addSocialMediaProfile(formData, token);

      if(result) {
        onCancel();
        navigate('/dashboard/settings');
      }
    } catch (error) {
      console.error('Error in submitting Social Media Profile', error);
    }

    setLoading(false);
  };

  return (
    <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='p-8 border-brand section_bg box-shadow space-y-8 rounded-md w-[500px] mx-auto border-[1px] border-richblack-700 section_bg'
      >
        {socialMediaProfilesFields.map((field) => (
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
          <button type='submit' className='bg-blue-150  px-4 py-1 rounded-md'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
