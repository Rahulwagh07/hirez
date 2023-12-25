import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../../../services/operations/jobDetailsAPI';
import { setJob } from '../../../../slices/jobSlice';
import JobCard from '../CreatorJobs/JobCard';
import FilterCheckboxGroup  from "./FilterCheckboxGroup "
import JobDetailsModal from '../JobDetailsModal';

function SearchJobs() {
  const dispatch = useDispatch();
  const { job, editJob } = useSelector((state) => state.job);
  const { token } = useSelector((state) => state.auth);
  const [searchParams, setSearchParams] = useState({
    searchTerm: '',
    roleFilter: [],
    locationFilter: [],
    salaryFilter: [],
    skillsFilter: [],
  });

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearchingJob, setIsSearchingJob] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
   
  const handleOnClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  }

  const handleCheckboxChange = (filterName, value) => {
    setSearchParams({ ...searchParams, [filterName]: value });
  };
  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const jobsData = await getAllJobs(searchParams, token);

        // Apply fuzzy searching using Fuse
        const fuse = new Fuse(jobsData, {
          keys: ['category'],
        });

        const fuzzyResults = fuse.search(searchParams.searchTerm);
        const finalResults = fuzzyResults.map((result) => result.item);

        dispatch(setJob(finalResults));
        setJobs(finalResults);
        setIsSearchingJob(true);
      } catch (error) {
        console.error('Error in fetching jobs', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchParams, dispatch, token]);

  return (
    <div className="container mx-auto mt-8 flex flex-col ">
      {loading && <div>Loading.....</div>}
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchParams.searchTerm}
        onChange={(e) => setSearchParams({ ...searchParams, searchTerm: e.target.value })}
        className="border p-2 rounded mr-2"
      />

      {/* Filters */}
       <div className='flex gap-4'>
       <FilterCheckboxGroup
        title="Role Filter"
        options={['Video Editing', 'Content creation and Writing', 'Creative design', 'Marketing and promotion', 'SEO and Analytics', 'Collaborations and Partnerships', 'Livestream Production']}
        value={searchParams.roleFilter}
        onChange={(value) => handleCheckboxChange('roleFilter', value)}
      />

      <FilterCheckboxGroup
        title="Location Filter"
        options={['Remote', 'Pune', 'Mumbai', 'Delhi', 'Any']}
        value={searchParams.locationFilter}
        onChange={(value) => handleCheckboxChange('locationFilter', value)}
      />

      <FilterCheckboxGroup
        title="Salary Filter"
        options={['5000-50000', '50000-200000']}
        value={searchParams.salaryFilter}
        onChange={(value) => handleCheckboxChange('salaryFilter', value)}
      />

        {/* Use FilterCheckboxGroup for Skills */}
        <FilterCheckboxGroup
                title="Skills Filter"
                options={['Communications', 'Editing']}
                value={searchParams.skillsFilter}
                onChange={(value) => handleCheckboxChange('skillsFilter', value)}
            />

       </div>
      {/* Display Jobs */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Map through jobs and render JobCard component */}
        {jobs.map((job) => (
            <button key={job._id} onClick={() => handleOnClick(job)}>
                <JobCard job={job} setJobs={setJobs} isSearchingJob={setIsSearchingJob} />
            </button>
         ))}

        {
            isModalOpen && (
                <JobDetailsModal job={selectedJob} setIsModalOpen={setIsModalOpen}/>
        )}
         
      </div>
    </div>
  );
}

export default SearchJobs;
