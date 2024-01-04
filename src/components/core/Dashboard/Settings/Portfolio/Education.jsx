// Education.js

import React, { useEffect, useState } from 'react';
import { deleteEducation, getAllEducations } from '../../../../../services/operations/portfolioAPI';
import { useSelector } from 'react-redux';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from "react-icons/ri"
import ShowEducationModal from "./ShowEducationModal"
import EducationFields from '../../../../../data/Education-fields';
import { formatDateString } from '../../../../../utils/FormatDate';

function Education() {
  const { token } = useSelector((state) => state.auth)
  const [educations, setEducation] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [editEducation, setEditEducation] = useState(false)
  const [selectedEducation, setSelectedEducation] = useState([])

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const result = await getAllEducations(token);
        if (result) {
          setEducation(result);
        }
      } catch (error) {
        console.error('Error fetching educations:', error);
      }
    };
    fetchEducation();
  }, [token]);

   

  const handelOnAddClick = () => {
    setEditEducation(false);
    setIsOpen(true);
  }

  const handelOnEditClick = (education) => {
    setEditEducation(true)
    setSelectedEducation(education);
    setIsOpen(true);
  }

  const handelOnDelete = async (educationId) => {
    try {
      await deleteEducation(educationId, token);
      setEducation((prevEducations) =>
        prevEducations.filter((education) => education._id !== educationId)
      );
    } catch (error) {
      console.error('Error deleting education:', error);
    }
  };

  return (
    <div className='section_bg box-shadow p-6 rounded-md'>
      {!isOpen && (
        <div>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='font-semibold'>Education</h3>
            <button onClick={handelOnAddClick} className='text-blue-150 font-semibold'>
              Add Education
            </button>
          </div>
          {educations.length > 0 ? (
            <div>
              {educations.map((education) => (
                <div key={education._id} className='mb-4 p-4 border-b border-blue-500 text-pure-greys-500'>
                  <div className='flex gap-4 items-center font-bold text-black'>   
                    <p>   
                      {education.fieldOfStudy} | {education.degree}
                    </p>
                    <FiEdit2 onClick={() => handelOnEditClick(education)} className='cursor-pointer hover:text-blue-500' />
                    <RiDeleteBin6Line onClick={() => handelOnDelete(education._id)} className='cursor-pointer hover:text-red-500' />
                  </div>
                  <p>{education.institution}</p>
                  <p>
                    {formatDateString(education.startDate)} | {formatDateString(education.endDate)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>Add Education details</p>
          )}
        </div>
      )}
      {isOpen && (
        <ShowEducationModal
          editEducation={editEducation}
          setIsOpen={setIsOpen}
          education={selectedEducation}
          educationFields={EducationFields}
        />
      )}
    </div>
  );
}

export default Education;
