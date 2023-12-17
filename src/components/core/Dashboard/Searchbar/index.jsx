import { useSelector } from "react-redux"
import SearchJobs from "./SearchJobs"
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import RecommendedJobs from "./RecommendedJobs";

export default function Searchbar() {
    const [showSearchJobs, setShowSearchJobs] = useState(false);

    const handleSearchClick = () => {
      setShowSearchJobs(true);
    }
    
    return (
        <div className="felx mx-auto items-center justify-center text-black">
            {
                !showSearchJobs && <>
                <button onClick={handleSearchClick} className="section_bg box-shadow rounded-full  flex items-center justify-between  w-[340px] h-[60px]">
                    <p className="text-richblack-500 ml-[40px]">Search jobs</p>
                    <FiSearch width={32} height={32} className="bg-richblue-200 rounded-full mr-[30px] text-white "/>
                </button>
            </>
            }
            {
                !showSearchJobs && <>
                    <RecommendedJobs/>
                </>
            }
            
            {showSearchJobs && <SearchJobs />}

        </div>
    )
}