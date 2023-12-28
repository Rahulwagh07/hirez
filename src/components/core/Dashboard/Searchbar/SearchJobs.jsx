import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../../../services/operations/jobDetailsAPI';
import { setJob } from '../../../../slices/jobSlice';
import JobCard from '../CreatorJobs/JobCard';
import FilterCheckboxGroup  from "./FilterCheckboxGroup "
import JobDetailsModal from '../JobDetailsModal';
import { FiSearch } from 'react-icons/fi';

function SearchJobs() {
  const dispatch = useDispatch();
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
       
      <div className="relative  ">
        <input
          type="text"
          placeholder="search jobs....."
          value={searchParams.searchTerm}
          onChange={(e) => setSearchParams({ ...searchParams, searchTerm: e.target.value })}
          className="bg-white-25 w-full relative h-[60px] rounded-full placeholder:ml-6 placeholder:absolute
          placeholder:text-lg focus:outline-none  focus:outline-[#2563eb]"
        />
        <div className="absolute inset-y-3  text-white-25 font-semibold right-0 gap-2 flex items-center justify-center mr-[30px] bg-[#2563eb] rounded-full p-4">
          <FiSearch width={32} height={32}/>
          <p>Search</p>
        </div>
      </div>
      
  
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
      <div className="grid gap-4 mt-4">
        {/* Map through jobs and render JobCard component */}
        {jobs.map((job) => (   
          <span key={job._id} onClick={() => handleOnClick(job)}
            className='cursor-pointer'
          >
            <JobCard job={job} key={job._id} setJobs={setJobs} isSearchingJob={setIsSearchingJob} 
            /> 
            </span>
            
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
