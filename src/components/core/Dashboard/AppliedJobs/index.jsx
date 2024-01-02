import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAppliedJobs } from '../../../../services/operations/jobDetailsAPI';
import AppliedJobCard from './AppliedJobCard';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

export default function AppliedJobs() {
    const { token } = useSelector((state) => state.auth);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                setLoading(true);
                const jobs = await getAppliedJobs(token);
                setAppliedJobs(jobs || []);  
            } catch (error) {
                console.log("Error in fetching applied jobs", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAppliedJobs();
    }, [token]);

    return (
        <div className="flex flex-col ">
        <h2 className="text-2xl font-bold mb-2">Your Path to Success</h2>
        <p className="text-pure-greys-500 mb-4">
          Congratulations on your journey! Below are the jobs you've applied for. Each application is a step closer to achieving your goals.
        </p>
        <div className="grid mt-5 gap-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            appliedJobs && appliedJobs.length > 0 ? (
              appliedJobs.map((job) => (
                <AppliedJobCard key={job._id} job={job} />
              ))
            ) : (
               <div className='p-20 shadow-lg border-t border-sky-500 flex flex-col gap-4 items-center justify-center'>
               <p className="text-pure-greys-500 font-semibold">
                No applied jobs yet. Your story is just beginning. Keep exploring and applying!
              </p>
              <button
                onClick={() => {
                  navigate("/dashboard/searchbar");
                }}
                className="rounded-md border-brand bg-blue-150 items-center text-white-25 px-7 py-2 flex"
              >
                Select <FaArrowRight className="ml-2"/>
              </button>
               </div>
            )
          )}
        </div>
      </div>
      
    );
}
