import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteContentSample, getMedia } from "../../../../../services/operations/portfolioAPI";
import ShowContentSampleModal from "./ShowContentSampleModal";
import ContentSampleFields from "../../../../../data/ContentSampleFields";
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from "react-icons/ri"

function ContentSample() {
  const { token } = useSelector((state) => state.auth)
  const [contentSample, setContentSample] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [editContentSample, setEditContentSample] = useState(false)
  const [selectedContentSample, setSelectedContentSample] = useState([])

  useEffect(() => {
    const fetchContent = async () => {
      try{
        const result = await getMedia(token)
        if(result) {
          setContentSample(result?.contentSamples)
        }
      } catch(error){
        console.error("Error in fetchContent media", error)
      }
    };
    fetchContent();
  }, []);

  const handelOnAddClick = () => {
    setEditContentSample(false);
    setIsOpen(true);
  }

  const handelOnEditClick = (content) => {
    setEditContentSample(true);
    setSelectedContentSample(content);
    setIsOpen(true);
  }

  const handelOnDelete = async (contentId) => {
    try{
      await deleteContentSample(contentId, token);
      setContentSample((prevContent) => 
        prevContent.filter((content) => content._id !== contentId)
      );
    } catch (error) {
      console.error('Error deleting ContentSample', error);
    }
  };

  return (
    <div className="section_bg box-shadow p-6 rounded-md border border-sky-400">
    {
      !isOpen && (
        <div>
          <div className="flex justify-between items-center mb-4">
          <h3 className='font-semibold'>Work Sample</h3>
            <button onClick={handelOnAddClick} className='text-blue-150 font-semibold'>
                Add 
            </button>
          </div>
          {
            contentSample.length > 0 ? (
              <div>
              {
            contentSample.map((content) => (
              <div key={content._id} className='mb-4 p-4 border-b border-slate-50 text-pure-greys-500'>
                <div className='flex gap-4 items-center font-bold text-black'>
                  <p >
                    {content.title}
                  </p>
                  <FiEdit2 onClick={() => handelOnEditClick(content)} className='cursor-pointer hover:text-blue-500' />
                  <RiDeleteBin6Line onClick={() => handelOnDelete(content._id)} className='cursor-pointer hover:text-red-500' />
                </div>
                <p>{content.description}</p>
                <a href={content.link}  target="_blank" className="text-blue-150">link</a>
               </div>
            ))}
              </div>
            ) : (
                <p>Add Work samples (like portfolio web link)</p>
              )
          }
        </div>
      )}

      {
        isOpen && (
          <ShowContentSampleModal
            editContentSample={editContentSample}
            setIsOpen={setIsOpen}
            content = {selectedContentSample}
            contentSampleFields = {ContentSampleFields}
          />
        )
      }
    </div>
  )
}

export default ContentSample;