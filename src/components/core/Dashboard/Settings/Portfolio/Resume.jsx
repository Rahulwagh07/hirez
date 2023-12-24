import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { updateResume, getResume, deleteResume } from '../../../../../services/operations/portfolioAPI';
import { RiDeleteBin6Line } from "react-icons/ri"
import { PiDownloadSimpleBold } from "react-icons/pi";

const Resume = () => {
  const [resume, setResume] = useState(null);
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const response = await getResume(token);
      console.log("resume response", response)
      setResume(response);  
    } catch (error) {
      console.error('Error fetching resume:', error);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('resume', file);
    try {
      await updateResume(formData, token);  
      fetchResume();
    } catch (error) {
      console.error('Error uploading or updating resume:', error);
    }
  };
  const handleDeleteResume = async () => {
    try {
      await deleteResume(token);
      setResume(null);
    } catch (error) {
      console.error('Error deleting resume:', error);
    }
  }; 
  

  return (
    <div className='section_bg box-shadow p-8'>
      {resume ? (
        <div className='flex justify-between'>
            <p>{resume?.data?.data?.name}</p>
            <div className='flex gap-8'>
            <a
                href={`${resume?.data?.data?.url}.${resume?.data?.data?.fileExtension}`}
                download
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer'
            >
                <PiDownloadSimpleBold />
            </a>

                <RiDeleteBin6Line onClick={handleDeleteResume} />
            </div>
        </div>

      ) : (
        <div className='flex flex-col gap-4'>
          <p className=''>No resume uploaded. Upload your resume:</p>
          <input type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
        </div>
      )}
    </div>
  );
};

export default Resume;