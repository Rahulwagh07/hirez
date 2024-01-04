import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addContentSample, updateContentSample } from "../../../../../services/operations/portfolioAPI";
 
import CustomInput from "./CustomInput";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function ShowContentSampleModal({editContentSample, setIsOpen, content, contentSampleFields}) {
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
    if(editContentSample) {
      contentSampleFields.forEach((field) => {
        setValue(field.id, content[field.id]);
      })
    }
  }, [editContentSample, content, setValue, contentSampleFields])


  const onCancel = () => {
    setIsOpen(false);
  };

  const onSubmit = async ( data ) => {
    const formData = new FormData();
    contentSampleFields.forEach((field) => {
      formData.append(field.id, data[field.id]);
    });

    if(editContentSample) {
      formData.append('contentSampleId', content._id);
    }

    setLoading(true);

    try{
      const result = editContentSample 
        ? await updateContentSample(formData, token) 
        : await addContentSample(formData, token);

        if(result) {
          onCancel();
          navigate('/dashboard/settings');
        }
    } catch(error) {
      console.error('Error in submitting ContentSample', error);
    }

    setLoading(false);
  };

  return (
    <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='p-8 sm:p-4 sm:py-8 sm:w-[300px] border-brand section_bg box-shadow space-y-8 rounded-md w-[500px] mx-auto'
        >
        {
          contentSampleFields.map((field) => (
            <CustomInput
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              register={register}
              error={errors[field.id] && field.validation.error}
            />
          ))
        }

        <div className='flex justify-end gap-x-8'>
          <button onClick={onCancel} className='text-bule-150'>
            Cancel
          </button>
          <button type='submit' className='bg-blue-150  px-6 py-2 rounded-md'>
            Save
          </button>
        </div>

        </form>
    </div>
  );
}