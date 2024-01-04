
//Posted Job By Creator

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getAllJobsByCreator } from "../../../services/operations/jobDetailsAPI"
import IconBtn from "../../common/IconBtn"
import { VscAdd } from "react-icons/vsc"
import ShowJobs from "../Dashboard/CreatorJobs/ShowJobs"

export default function MyJobs() {
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchJobs = async () => {
            const result = await getAllJobsByCreator(token)
            if(result) {
                setJobs(result)
            }
        }
        fetchJobs()
    }, [])

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl sm:text-lg font-medium text-black">Posted Jobs</h1>

                <IconBtn
                    text="Add Jobs"
                    onclick={() => navigate("/dashboard/post-newjob")}
                    >
                    <VscAdd />
                </IconBtn>
            </div>
            {jobs && <ShowJobs jobs={jobs} setJobs={setJobs} />}
        </div>
    )
}