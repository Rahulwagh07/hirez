import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApplicantProfile } from '../services/operations/profileAPI';
import { useSelector } from 'react-redux';

//Components
import UserProfileCard from '../components/core/ProfilePage/UserProfileCard'; 
import ExperienceProjectCard from '../components/core/ProfilePage/ExperienceProjectCard';
import ResumeCard from '../components/core/ProfilePage/ResumeCard';
import SocialMediaProfiles from '../components/core/ProfilePage/SocialMediaProfiles';
import HireSection from '../components/core/ProfilePage/HireSection';
import { ACCOUNT_TYPE } from '../utils/constants';
import Spinner from '../components/common/Spinner';

function Profile() {
  const { applicantId, jobId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [user, setuser] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
   
  const { user: reduxUser } = useSelector((state) => state.profile);
  const [isResponse, setIsResponse] = useState(true);

  useEffect(() => {
    fetchApplicantDetail();
  }, []);

  const fetchApplicantDetail = async () => {
     
    try {
      const response = await getApplicantProfile(applicantId, token);
      setuser(response.user);
      setPortfolio(response.portfolio);
    } catch (error) {
      console.error('Error fetching applicant detail:', error);
      setIsResponse(false)
    }
  };
  

  return (
     <div>
      {
        isResponse ? (
          <div>
          {
            user === null || portfolio === null ? (
                <Spinner/> 
            ) : (
              <div className='flex flex-col gap-6'>
                {
                  reduxUser.accountType === ACCOUNT_TYPE.CREATOR  &&  <HireSection/>
                }
                
                <UserProfileCard  user={user}/>

                {/* Social Media Profiles */}
                <div className='shadow-lg p-8 border border-sky-400'>
                  {portfolio.socialMediaProfiles && (
                    <SocialMediaProfiles profiles={portfolio.socialMediaProfiles} />
                  )}
                </div>
                
                {/* Experiences */}
                <div className='shadow-lg p-8 flex flex-col gap-2 border border-sky-400'>
                  <h3 className='text_gradient text-lg'>Experience</h3>
                  <div className=''>
                    {portfolio.experiences.map((experience) => (
                      <ExperienceProjectCard key={experience._id} {...experience} />
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className='shadow-lg p-8 flex flex-col gap-2 border border-sky-400'>
                  <h3 className='text_gradient text-lg'>Projects</h3>
                  <div className=''>
                    {portfolio.projects.map((project) => (
                      <ExperienceProjectCard key={project._id} {...project} />
                    ))}
                  </div>
                </div>

                {/* Work Samples */}
                <div className='shadow-lg p-8 flex flex-col gap-2 border border-sky-400'>
                  <h3 className='text_gradient text-lg'>Work Samples</h3>
                  <div className=''>
                  {portfolio.contentSamples.map((workSample) => (
                  <ExperienceProjectCard
                      key={workSample._id}  
                      title={workSample.title}
                      description={workSample.description}
                      link={workSample.link}
                    />
                  ))}
                  </div>
                </div>

                {/* Education */}
                <div className='shadow-lg p-8 flex flex-col gap-2 border border-sky-400'>
                  <h3 className='text_gradient text-lg'>Education</h3>
                  <div className=''>
                    {portfolio.education.map((education) => (
                    <ExperienceProjectCard
                        key={education._id}  
                        title={education.degree}
                        fieldOfStudy={education.fieldOfStudy}
                        description={education.institution}
                        startDate={education.startDate}
                        endDate={education.endDate}
                        
                      />
                    ))}
                  </div>

                </div>

                {/* Certifications */}
                <div className='shadow-lg p-8 flex flex-col gap-2 border border-sky-400'>
                  <h3 className='text_gradient text-lg'>Certificates</h3>
                  <div className=''>
                    {portfolio.certifications.map((certificate) => (
                      <ExperienceProjectCard 
                        key={certificate._id}  
                        title={certificate.title}
                        company={certificate.issuingOrganization}
                        startDate={certificate.issueDate}
                        link={certificate.url}
                      />
                    ))}
                  </div>
                </div>

              {/* ResumeSection */}
                <div className='shadow-lg p-8 border border-sky-400'>
                  {portfolio.resume && (
                    <ResumeCard
                      name={portfolio.resume.name}
                      url={portfolio.resume.url}
                    />
                  )}
                </div>
              </div>
              
            )
          }

        </div>
        ) : (
          <div className="shadow-lg p-12 dark:bg-slate-700">
            <p className="font-bold">Hey there!</p>
            <span className="">User hasn't  updated their portfolio yet.</span>
          </div>

            )
          }
        </div>
  );
}

export default Profile;
