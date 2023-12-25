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

  const handelOnAddClick = () => {
    setEditSocialMediaProfile(false);
    setIsOpen(true);
  }

  const handelOnEditClick = (profile) => {
    setEditSocialMediaProfile(true);
    setSelectedSocialMediaProfile(profile);
    setIsOpen(true);
  }

  const handelOnDelete = async (profileId) => {
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
    <div className="section_bg box-shadow p-6 rounded-md">
      {!isOpen && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className='font-semibold'>Social Media Profiles</h3>
            <button onClick={handelOnAddClick} className='text-blue-150'>
              Add
            </button>
          </div>
          {socialMediaProfiles.length > 0 ? (
            <div>
              {socialMediaProfiles.map((profile) => (
                <div key={profile._id} className='mb-4 p-4 border border-brand rounded'>
                  <div className='flex gap-4 items-center'>
                    <p className="font-bold">
                      {profile.profileName}
                    </p>
                    <FiEdit2 onClick={() => handelOnEditClick(profile)} className='cursor-pointer' />
                    <RiDeleteBin6Line onClick={() => handelOnDelete(profile._id)} className='cursor-pointer' />
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
