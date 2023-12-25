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
            <p>Applied Jobs</p>
            <div className='flex gap-4'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    appliedJobs && appliedJobs.map((job) => (
                        <AppliedJobCard key={job._id} job={job} />
                    ))
                )}
            </div>
        </div>
    );
}
