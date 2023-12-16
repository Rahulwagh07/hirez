import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit2 } from "react-icons/fi"
import ConfirmationModal from "../../../common/ConfirmationModal";
import { deleteJob } from "../../../../services/operations/jobDetailsAPI";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllJobsByCreator } from "../../../../services/operations/jobDetailsAPI"
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../../../utils/constants";


const JobCard = ({ job, setJobs, state }) => {
    const { title, description, skillRequired, category, salary, status } = job;
    const { user } = useSelector((state) => state.auth)
    const { token } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(null);
    const navigate = useNavigate()
     

     
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
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-2">{description}</p>
                <p className="text-gray-700 mb-2">Skill Required: {skillRequired}</p>
                <p className="text-gray-700 mb-2">category: {category}</p>
                <p className="text-gray-700 mb-2">Salary: {salary}</p>
                <p className="text-gray-700 mb-2">Status: {status}</p>
                {
                    !state && <div>
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

            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </div>
    );
};

export default JobCard;
