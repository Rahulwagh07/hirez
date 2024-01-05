import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteSocialMediaProfile, getMedia} from "../../../../../services/operations/portfolioAPI";
import ShowSocialModal from "./ShowSocialModal";
import SocialMediaProfilesFields from "../../../../../data/SocialMediaProfilesFields";
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from "react-icons/ri";

function Social() {
  const { token } = useSelector((state) => state.auth)
  const [socialMediaProfiles, setSocialMediaProfiles] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [editSocialMediaProfile, setEditSocialMediaProfile] = useState(false)
  const [selectedSocialMediaProfile, setSelectedSocialMediaProfile] = useState([])

  useEffect(() => {
    const fetchSocialMediaProfiles = async () => {
      try{
        const result = await getMedia(token)
        if(result) {
          setSocialMediaProfiles(result?.socialMediaProfiles)
        }
      } catch(error){
        console.error("Error in fetchSocialMediaProfiles", error)
      }
    };
    fetchSocialMediaProfiles();
  }, [token]);

  const handleOnAddClick = () => {
    setEditSocialMediaProfile(false);
    setIsOpen(true);
  }

  const handleOnEditClick = (profile) => {
    setEditSocialMediaProfile(true);
    setSelectedSocialMediaProfile(profile);
    setIsOpen(true);
  }

  const handleOnDelete = async (profileId) => {
    try{
      await deleteSocialMediaProfile(profileId, token);
      setSocialMediaProfiles((prevProfiles) => 
        prevProfiles.filter((profile) => profile._id !== profileId)
      );
    } catch (error) {
      console.error('Error deleting Social Media Profile', error);
    }
  };

  return (
    <div className="section_bg box-shadow p-6 rounded-md border border-sky-400">
      {!isOpen && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className='font-semibold'>Social Media Profiles</h3>
            <button onClick={handleOnAddClick} className='text-blue-150 font-semibold'>
              Add
            </button>
          </div>
          {socialMediaProfiles.length > 0 ? (
            <div>
              {socialMediaProfiles.map((profile) => (
                <div key={profile._id} className='mb-4 p-4 border-b border-slate-50 text-pure-greys-500'>
                  <div className='flex gap-4 items-center font-bold text-black'>
                    <p  >
                      {profile.profileName}
                    </p>
                    <FiEdit2 onClick={() => handleOnEditClick(profile)} className='cursor-pointer hover:text-blue-500' />
                    <RiDeleteBin6Line onClick={() => handleOnDelete(profile._id)} className='cursor-pointer hover:text-red-500' />
                  </div>
                  <a href={profile.url} target="_blank" className="text-blue-150">{profile.url}</a>
                </div>
              ))}
            </div>
          ) : (
            <p>Add Social Media Profiles</p>
          )}
        </div>
      )}
      {isOpen && (
        <ShowSocialModal
          editSocialMediaProfile={editSocialMediaProfile}
          setIsOpen={setIsOpen}
          profile={selectedSocialMediaProfile}
          socialMediaProfilesFields={SocialMediaProfilesFields}
        />
      )}
    </div>
  );
}

export default Social;
