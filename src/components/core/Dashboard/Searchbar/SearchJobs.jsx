import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../../../services/operations/jobDetailsAPI';
import { setJob } from '../../../../slices/jobSlice';
import JobCard from '../CreatorJobs/JobCard';
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
  const [isSearchingJob, setIsSearchingJob] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showResult, setShowNoResult] = useState(false);

  const fetchData = async (params) => {
    try {
      const jobsData = await getAllJobs(params, token);

      const fuse = new Fuse(jobsData, {
        keys: ['category'],
      });

      const fuzzyResults = fuse.search(params.searchTerm);
      const finalResults = fuzzyResults.map((result) => result.item);

      dispatch(setJob(finalResults));
      setJobs(finalResults);
      setIsSearchingJob(true);
      setShowNoResult(finalResults.length === 0);
    } catch (error) {
      console.error('Error in fetching jobs', error);
    }
  };

  const fetchSuggestions = async (params) => {
    try {
      if (params.searchTerm) {
        const jobsData = await getAllJobs(params, token);
        const fuse = new Fuse(jobsData, {
          keys: ['category', 'title'],
        });
  
        const suggestionsSet = new Set();
  
        const suggestions = fuse
          .search(params.searchTerm)
          .map((result) => result.item.category)
          .filter((suggestion) => {
            if (!suggestionsSet.has(suggestion)) {
              suggestionsSet.add(suggestion);
              return true;
            }
            return false;
          })
          .map((category, index) => ({
            key: `${category}_${index}`,
            value: category,
          }));
  
        setSuggestions(suggestions);
      }
    } catch (error) {
      console.error('Error in fetching suggestions', error);
    }
  };
  

  const handleOnClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setSearchButtonClicked(false);
    const inputValue = e.target.value;
    setSearchParams({ ...searchParams, searchTerm: inputValue });

    const fuse = new Fuse(jobs, {
      keys: ['category', 'title'],
    });

    const suggestions = fuse.search(inputValue).map((result) => result.item.title);
    setSuggestions(suggestions);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      if (suggestions.length > 0) {
        setSearchParams({ ...searchParams, searchTerm: suggestions[0].value });
        setSearchButtonClicked(true)
      }
    }
  };

  useEffect(() => {
    if (searchButtonClicked) {
      fetchData(searchParams);
    }
  }, [searchParams, searchButtonClicked]);

  useEffect(() => {
    fetchSuggestions(searchParams);
  }, [searchParams.searchTerm, searchParams]);

  return (
    <div className="container mx-auto mt-8 flex flex-col ">
      {/* Search Bar */}
      <div className="relative  ">
        <input
          type="text"
          placeholder="Video Editing/Thumbnail Design/......"
          value={searchParams.searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
          className="w-full relative p-4 h-[60px] rounded-full placeholder:ml-3 placeholder:absolute
          placeholder:text-lg focus:outline-none border-2 border-sky-500 text-pure-greys-800 font-semibold"
        />
        <button
          onClick={() => setSearchButtonClicked(true)}
          className="absolute inset-y-3 text-white-25 p-5 font-semibold right-0 gap-2 flex items-center justify-center mr-[30px] bg-[#2563eb] rounded-full">
          <FiSearch width={32} height={32} />
          <p>Search</p>
        </button>

        {/* Suggestions dropdown */}
        {searchParams.searchTerm && suggestions.length > 0 && !searchButtonClicked && (
          <div className="absolute mt-4 z-20 text-pure-greys-800 w-[300px] left-0 border-t border-sky-500  shadow-lg bg-bluegrey-50">
            <ul>
            {suggestions.map((suggest, index) => (
              <li
                key={index}
                onClick={() => {
                  setSearchParams({ ...searchParams, searchTerm: suggest.value });
                  setSearchButtonClicked(true);
                }}
                className="cursor-pointer p-2 hover:text-sky-500"
              >
                {suggest.value}
              </li>
            ))}
            </ul>
          </div>
        )}
      </div>

      {/* Display Jobs */}
      <div className="grid gap-4 mt-8 z-10">
        {jobs.map((job) => (
          <span key={job._id} onClick={() => handleOnClick(job)} className='cursor-pointer border-l border-sky-500'>
            <JobCard job={job} key={job._id} setJobs={setJobs} isSearchingJob={setIsSearchingJob}/>
          </span>
        ))}
        {isModalOpen && (
          <JobDetailsModal job={selectedJob} setIsModalOpen={setIsModalOpen} />
        )}
      </div>

  
      {/* No job Found */}
      {
        showResult  && 
        <div className='flex items-center justify-center shadow-lg h-[200px] p-8 border-t border-sky-500 mt-2'>
          <p className='text-pure-greys-400'>"No results! 🧐 Adjust search term.. Your dream job might be just around the corner. 🚀"</p>
          </div>
      }
    </div>
  );
}

export default SearchJobs;
