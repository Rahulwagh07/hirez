import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { hireJobSeeker, getApplicationStatus } from '../../../services/operations/jobDetailsAPI'
import { toast } from "react-hot-toast"
import ConfirmationModal from '../../common/ConfirmationModal'
import { useParams } from 'react-router-dom'

function HireSection() {
    const [status, setStatus] = useState(null)

    const { jobId, applicantId } = useParams()
    const { token } = useSelector((state) => state.auth)
    const [confirmationModal, setConfirmationModal] = useState(null)
    const [loading, setLoading] = useState(false)
     
    const handleOnClick = async () => {
        setLoading(true);
        const result = await hireJobSeeker(jobId, applicantId, token)
        if(result){
            toast.success("Hired Completed")
        }
        setConfirmationModal(null);
        setLoading(false);
    }
     
    const fetchApplicationStatus = async () => {
        try {
          const result = await getApplicationStatus(jobId, applicantId, token);
          if (result) {
            setStatus(result);
          }
        } catch (error) {
          console.error('Error fetching application status:', error);
        } 
      };
    
      useEffect(() => {
        fetchApplicationStatus();  
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);  
    
     
  return (
    <div>
        {
            status === null || status !== "Hired" ? (
                <button
                    disabled={loading}
                    onClick={() => {
                        setConfirmationModal({
                        text1: `Are you sure to extend an offer to this applicant?`,  
                        text2: `This action will mark the applicant as hired!`,
                        btn1Text: !loading ? "Hire" : "Loading...",
                        btn2Text: "Cancel",
                        btn1Handler: !loading ? () => handleOnClick(jobId, applicantId) : () => {},
                        btn2Handler: !loading ? () => setConfirmationModal(null) : () => {},
                        });
                    }}
                    title=""
                    className="rounded-md  border-brand  items-center px-7 py-2"
                    >
                    Extend Offer    
                    </button>

            ) : (
                <p className="rounded-md xl:text-lg text-sm border-brand  items-center px-7 py-2">
                    Hired  
                </p>
            )
        }

        {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
         
    </div>
  )
}

export default HireSection