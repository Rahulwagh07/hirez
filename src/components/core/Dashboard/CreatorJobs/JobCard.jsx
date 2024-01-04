import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit2 } from "react-icons/fi"
import ConfirmationModal from "../../../common/ConfirmationModal";
import { applyForJob, deleteJob, getAllApplicantsForJob } from "../../../../services/operations/jobDetailsAPI";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobsByCreator } from "../../../../services/operations/jobDetailsAPI"
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../../../utils/constants";
import { removeFromSavedJob } from "../../../../slices/saveJobSlice";
import { addToSavedJob } from "../../../../slices/saveJobSlice";


const JobCard = ({ job, setJobs, isSearchingJob, onRecommoneded}) => {

    const { title, description, skillRequired, category, salary, status, location } = job;
    const { user } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [totalApplicants, setTotalApplicants] = useState(0);
    useEffect(() => {
        const fetchApplicants = async () => {
          try {
            const data = await getAllApplicantsForJob(job._id, token);
            setTotalApplicants(data.data.length);
          } catch (error) {
            console.error('Error fetching applicants:', error);
          }
        };
        fetchApplicants();
      }, [job._id, token]);

    
      const handleOnClickApply = async () => {
        try {
          const result = await applyForJob(job._id, token);
          if (result) {
            navigate("/dashboard/applied-jobs");
          }
        } catch (error) {
            console.error('Error applying for job:', error.message);
        }
      };

     
    const handleJobDelete = async (jobId) => {
        setLoading(true);
        await deleteJob({ jobId: jobId }, token);
        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
        setConfirmationModal(null);
        setLoading(false);
    };
    const handleOnClickSave = () => {
        dispatch(addToSavedJob(job));
    }

    return (
        <div>
            <div className="bg-white p-4 rounded shadow-lg mb-4 text-pure-greys-600">
                <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <div>
                {
                    user?.accountType === ACCOUNT_TYPE.CREATOR && <div>
                    <button
                        disabled={loading}
                        onClick={() => {
                        navigate(`/dashboard/edit-job/${job._id}`)
                        }}
                        title="Edit"
                        className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                    >
                        <FiEdit2 size={20} />
                    </button>
                    <button
                        disabled={loading}
                        onClick={() => {
                        setConfirmationModal({
                            text1: "Do you want to delete this Job?",
                            text2:
                            "All the data related to this job will be deleted",
                            btn1Text: !loading ? "Delete" : "Loading...  ",
                            btn2Text: "Cancel",
                            btn1Handler: !loading
                            ? () => handleJobDelete(job._id)
                            : () => {},
                            btn2Handler: !loading
                            ? () => setConfirmationModal(null)
                            : () => {},
                        })
                        }}
                        title="Delete"
                        className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                    >
                        <RiDeleteBin6Line size={20} />
                    </button>
                    </div>
                }
                </div>
                </div>
                 
                <p className="">{description}</p>
                <div className="grid lg:grid-cols-2 gap-4 mt-2">
                    <p>Status:  <span className="font-semibold">{status}</span></p>
                    <p>category: <span className="font-semibold">{category}</span></p>
                    <p>Location: <span className="font-semibold">{location}</span></p>
                    <p>Salary: <span className="font-semibold">{salary}</span></p>
                    <p>Required Skill: <span className="font-semibold">{skillRequired}</span></p>
                    <p>Applicants: <span className="font-semibold ml-2">{totalApplicants}</span></p>
                </div>
                 
                 
              

                {
                    user.accountType === ACCOUNT_TYPE.CREATOR ? (
                        <div className="flex justify-end mr-32 sm:mr-0 mt-4 sm:items-center sm:justify-center">
                            <button  
                                onClick={() => {
                                    navigate(`/dashboard/posted-job/${job._id}`)
                                }}
                                className="rounded-md text-sm border-brand px-4 py-3 sm:w-full text-white-25  bg-blue-150  font-semibold">Review All Applicants
                            </button>
                        </div>
                    ) : ( 
                        !isSearchingJob && 
                            <div className="flex justify-end gap-8">
                                {
                                    onRecommoneded ? (
                                        <button onClick={handleOnClickSave}
                                            className='rounded-md border-brand  items-center px-7 py-2'>
                                            Save
                                            </button>
                                    ) : (
                                        <button
                                            onClick={() => dispatch(removeFromSavedJob(job._id))}
                                            className="flex items-center gap-x-1 rounded-md  bg-richblack-700 text-richblack-50 py-2 px-3"
                                            >
                                            <span>Remove</span>
                                        </button>
                                    )
                                }
                                <button
                                    onClick={handleOnClickApply}
                                    className="flex items-center gap-x-1 rounded-md text-white-25  bg-blue-150 py-2 px-4"
                                    >
                                    Apply
                                </button>
                            </div>
                    )
                }
                 
            </div>

            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </div>
    );
};

export default JobCard;
 