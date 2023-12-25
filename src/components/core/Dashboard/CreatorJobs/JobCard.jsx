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


const JobCard = ({ job, setJobs, isSearchingJob}) => {

    const { title, description, skillRequired, category, salary, status } = job;
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
        const result = await getAllJobsByCreator(token);

        if (result) {
            setJobs(result);
        }
        setConfirmationModal(null);
        setLoading(false);
    };

    return (
        <div>
            <div className="bg-white p-4 rounded shadow-md mb-4">
                <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
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
                 
                <p className="text-gray-600 mb-2">{description}</p>
                <p className="text-gray-700 mb-2">Skill Required: {skillRequired}</p>
                <p className="text-gray-700 mb-2">category: {category}</p>
                <p className="text-gray-700 mb-2">Salary: {salary}</p>
                <p className="text-gray-700 mb-2">Status: {status}</p>

                {
                    user.accountType === ACCOUNT_TYPE.CREATOR ? (
                        <button  
                            onClick={() => {
                                navigate(`/dashboard/posted-job/${job._id}`)
                            }}
                            className="bg-blue-150 rounded-md xl:text-lg text-sm border-brand  items-center px-7 py-2">Review All Applicants
                        </button>
                    ) : (
                        !isSearchingJob &&
                        <div className="flex gap-2">
                            <button
                                onClick={() => dispatch(removeFromSavedJob(job._id))}
                                className="flex items-center gap-x-1 rounded-md border border-richblue-500 bg-blue-150 py-3 px-[12px] text-white"
                                >
                                <RiDeleteBin6Line />
                                <span>Remove</span>
                            </button>
                            <p>Applicants: <span className="font-semibold">{totalApplicants}</span></p>
                            <button
                                onClick={handleOnClickApply}
                                className="flex items-center gap-x-1 rounded-md border border-richblue-500 bg-blue-150 py-3 px-[12px] text-white"
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
 