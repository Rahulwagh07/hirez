import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAppliedJobs } from '../../../../services/operations/jobDetailsAPI';
import AppliedJobCard from './AppliedJobCard';

export default function AppliedJobs() {
    const { token } = useSelector((state) => state.auth);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [loading, setLoading] = useState(false);

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
        <p className="text-pure-greys-600 mb-4">
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
              <p className="text-pure-greys-600">
                No applied jobs yet. Your story is just beginning. Keep exploring and applying!
              </p>
            )
          )}
        </div>
      </div>
      
    );
}
