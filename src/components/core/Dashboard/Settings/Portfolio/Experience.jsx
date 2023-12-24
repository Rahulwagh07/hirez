import React, { useEffect, useState } from 'react';
import { deleteExperience, getAllExperiences } from '../../../../../services/operations/portfolioAPI';
import { useSelector } from 'react-redux';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ShowExperienceModal from './ShowExperienceModal';
import ExperienceFields from '../../../../../data/ExperienceFields';
import { formatDateString } from '../../../../../utils/FormatDate';  

function Experience() {
  const { token } = useSelector((state) => state.auth);
  const [experiences, setExperience] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const result = await getAllExperiences(token);
        if (result) {
          setExperience(result);
        }
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };
    fetchExperience();
  }, [token]);

  const handleOnAddClick = () => {
    setEditExperience(false);
    setIsOpen(true);
  };

  const handleOnEditClick = (experience) => {
    setEditExperience(true);
    setSelectedExperience(experience);
    setIsOpen(true);
  };

  const handleOnDelete = async (experienceId) => {
    try {
      await deleteExperience(experienceId, token);
      setExperience((prevExperiences) =>
        prevExperiences.filter((experience) => experience._id !== experienceId)
      );
    } catch (error) {
      console.error('Error deleting experience:', error);
    }
  };

  return (
    <div className='section_bg box-shadow p-6 rounded-md'>
      {!isOpen && (
        <div>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='font-semibold'>Experience</h3>
            <button onClick={handleOnAddClick} className='text-blue-150'>
              Add Experience
            </button>
          </div>
          {experiences.length > 0 ? (
            <div>
              {experiences.map((experience) => (
                <div key={experience._id} className='mb-4 p-4 border border-brand rounded'>
                  <div className='flex gap-4 items-center'>
                    <p className='font-bold'>{experience.title}</p>
                    <FiEdit2 onClick={() => handleOnEditClick(experience)} className='cursor-pointer' />
                    <RiDeleteBin6Line onClick={() => handleOnDelete(experience._id)} className='cursor-pointer' />
                  </div>
                  <p> <span className='font-semibold'>Creator-</span>{experience.company} </p>
                  <p>{experience.description}</p>
                  <p>
                    {formatDateString(experience.startDate)} | {formatDateString(experience.endDate)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>Add Experience details</p>
          )}
        </div>
      )}
      {isOpen && (
        <ShowExperienceModal
          editExperience={editExperience}
          setIsOpen={setIsOpen}
          experience={selectedExperience}
          experienceFields={ExperienceFields}
        />
      )}
    </div>
  );
}

export default Experience;
