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
        <div className="felx mx-auto items-center justify-center text-pure-greys-600">
            {
                !showSearchJobs && <div className="flex flex-col items-center justify-center">
                <button onClick={handleSearchClick} 
                    className="section_bg box-shadow rounded-full  flex items-center justify-between lg:w-[500px] md:w-[300px] h-[60px] sm:w-full
                    transition-all duration-300 ease-in-out transform lg:hover:scale-125 md:hover:scale-125 border border-sky-500 hover:border-2 hover:border-sky-500"
                    >
                    <p className="text-pure-greys-600  ml-[40px]">Search jobs</p>
                    <div className="bg-[#2563eb] rounded-full mr-[30px] p-3">
                        <FiSearch width={32} height={32} className="text-white-25 font-semibold"/>
                    </div>
                </button>
                <RecommendedJobs/>
            </div>
            }
            
            {showSearchJobs && <SearchJobs />}

        </div>
    )
}