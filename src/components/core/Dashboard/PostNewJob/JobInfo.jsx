import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setJob, setEditJob } from "../../../../slices/jobSlice"
import toast from "react-hot-toast"
import { HiOutlineCurrencyRupee, HiOutlineLocationMarker } from "react-icons/hi"
import { addJobDetails, editJobDetails } from "../../../../services/operations/jobDetailsAPI"
import IconBtn from "../../../common/IconBtn"
import { MdNavigateNext } from "react-icons/md"
import { JOB_STATUS } from "../../../../utils/constants"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

 

export default function JobInfo() {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors},
    } = useForm()

    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { job, editJob } = useSelector((state) => state.job)

     useEffect(() => {
        if(editJob){
            setValue("jobTitle", job.title)
            setValue("jobDescription", job.description)
            setValue("jobSkillRequired", job.skillRequired)
            setValue("jobcategory", job.category)
            setValue("jobLocation", job.location)
            setValue("jobSalary", job.salary)
            setValue("jobStatus", job.status)
        }
     }, [])

    const isFormUpdated = () => {
        const currentValues = getValues()
        if (
          currentValues.jobTitle !== job.title ||
          currentValues.jobDescription !== job.description ||
          currentValues.jobSkillRequired !== job.skillRequired||
          currentValues.jobcategory !== job.category ||
          currentValues.jobLocation !== job.location ||
          currentValues.jobSalary !== job.salary ||
          currentValues.jobStatus !== job.status 
        ) {
          return true
        }
        return false
      }
    
    const onSubmit = async (data) => {
        if(editJob){
            if(isFormUpdated()){
                const currentValues = getValues()
                const formData = new FormData()
                console.log("Data", data)
                formData.append("jobId", job._id)
                if(currentValues.jobTitle !== job.jobTitle){
                    formData.append("title", data.jobTitle)
                }
                if(currentValues.jobTitle !== job.jobTitle){
                    formData.append("description", data.jobDescription)
                }
                if(currentValues.jobTitle !== job.jobTitle){
                    formData.append("skillRequired", data.jobSkillRequired)
                }
                if(currentValues.jobTitle !== job.jobTitle){
                    formData.append("category", data.jobcategory)
                }
                if(currentValues.jobTitle !== job.jobTitle){
                    formData.append("location", data.jobLocation)
                }
                if(currentValues.jobTitle !== job.jobTitle){
                    formData.append("salary", data.jobSalary)
                }
                if(currentValues.jobTitle !== job.jobTitle){
                    formData.append("status", data.jobStatus)
                }
                setLoading(true)
                const result = await editJobDetails(formData, token)
                setLoading(false)
                if(result){
                    dispatch(setJob(result))
                    dispatch(setEditJob(false))
                    navigate("/dashboard/posted-job")
                     
                }
            } else {
                toast.error("No changes made in the form")
                dispatch(setEditJob(false))
            }
            return
        }
    
        const formData = new FormData()
        formData.append("title", data.jobTitle)
        formData.append("description", data.jobDescription)
        formData.append("skillRequired", data.jobSkillRequired)
        formData.append("category", data.jobcategory)
        formData.append("location", data.jobLocation)
        formData.append("salary", data.jobSalary)
        formData.append("status", data.jobStatus)

        setLoading(true)
        const result = await addJobDetails(formData, token)
        if (result){
            dispatch(setJob(result))
            dispatch(setEditJob(false))
            navigate("/dashboard/posted-job")
        }
        setLoading(false)
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-md  border-l border-b border-blue-150  p-8  shadow-xl text-sm text-pure-greys-600"
            >

            {/* job title */}
            <div className="flex flex-col space-y-2">
                <label htmlFor="jobTitle">
                Job Title <sup className="text-pink-200">*</sup>
                </label>
                <input
                id="jobTitle"
                placeholder="Enter Job Title"
                {...register("jobTitle", { required: true })}
                className="form-style w-full border border-sky-500"
                />
                {errors.jobTitle && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Job title is required
                </span>
                )}
             </div>
            {/* descritpiton */}
            <div className="flex flex-col space-y-2">
                <label htmlFor="jobDescription">
                Job Description <sup className="text-pink-200">*</sup>
                </label>
                <textarea
                id="jobDescription"
                placeholder="Enter Description"
                {...register("jobDescription", { required: true })}
                className="form-style resize-x-none min-h-[60px] w-full border border-sky-500"
                />
                {errors.jobDescription && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Job Description is required
                </span>
                )}
            </div>
            {/* skillRequired */}
            <div className="flex flex-col space-y-2">
                <label htmlFor="jobSkillRequired">
                Required Skills <sup className="text-pink-200">*</sup>
                </label>
                <input
                id="jobSkillRequired"
                placeholder="Enter The required Skills"
                {...register("jobSkillRequired", { required: true })}
                className="form-style  w-full border border-sky-500"
                />
                {errors.jobSkillRequired && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Required skills is required
                </span>
                )}
            </div>
            {/* category */}
            <div className="flex flex-col space-y-2">
                <label htmlFor="jobcategory">
                    category <sup className="text-pink-200">*</sup>
                </label>
                <select
                    id="jobcategory"
                    {...register("jobcategory", { required: true })}
                    className="form-style w-full border border-sky-500"
                >
                    <option value="">Select category</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Content Creation and Writing">Content Creation and Writing</option>
                    <option value="Script Writing">Script Writing</option>  
                    <option value="Management and Administation">Management and Administration</option>
                    <option value="SEO and Analytics"> SEO and Analytics</option>  
                    <option value="Thumbnail Design">Thumbnail Design</option>
                    <option value="Public Relations(PR)">Public Relations</option>
                </select>
                {errors.jobcategory && (
                    <span className="ml-2 text-xs tracking-wide text-pink-200">
                        category is required
                    </span>
                )}
            </div>

            {/* location */}
            <div className="flex flex-col space-y-2">
                <label htmlFor="jobLocation">
                    Job Location <sup className="text-pink-200">*</sup>
                </label>
                <div className="relative">
                    <input
                        id="jobLocation"
                        placeholder="Enter Job Location"
                        {...register("jobLocation", {
                            required: true,
                        })}
                        className="form-style w-full !pl-12 border border-sky-500"
                    />
                    <HiOutlineLocationMarker className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-blue-500" />
                </div>
                {errors.jobLocation && (
                    <span className="ml-2 text-xs tracking-wide text-pink-200">
                        Job Location is required
                    </span>
                )}
            </div>

            {/* salary */}
            <div className="flex flex-col space-y-2">
                <label htmlFor="jobSalary">
                    Salary Range <sup className="text-pink-200">*</sup>
                </label>
                <div className="relative">
                    <input
                        id="jobSalary"
                        placeholder="Enter Salary Range (e.g., 50000-70000)"
                        {...register("jobSalary", {
                            required: true,
                            pattern: {
                                value: /^[0-9]+-[0-9]+$/,
                                message: "Enter a valid salary range format (e.g., 50000-70000)",
                            },
                        })}
                        className="form-style w-full !pl-12 border border-sky-500"
                    />
                    <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-blue-500" />
                </div>
                {errors.jobSalary && (
                    <span className="ml-2 text-xs tracking-wide text-pink-200">
                        Approx Salary is Required
                    </span>
                )}
            </div>

            {/* status */}
            <div className="flex flex-col space-y-2">
                <label htmlFor="jobStatus">
                    Job Status <sup className="text-pink-200">*</sup>
                </label>
                <select
                    id="jobStatus"
                    {...register("jobStatus", { required: true })}
                    className="form-style w-full border border-sky-500"
                >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="filled">Filled</option>
                </select>
                {errors.jobStatus && (
                    <span className="ml-2 text-xs tracking-wide text-pink-200">
                        Job Status is required
                    </span>
                )}
            </div>

            <div className="flex justify-end gap-x-2">
                {editJob && (
                <button
                   onClick={() => {
                        navigate("/dashboard/posted-job");
                        dispatch(setEditJob(false));
                    }}
                    disabled={loading}
                    className={`flex cursor-pointer items-center gap-x-2 rounded-md shadow-lg border-brand py-[8px] px-[20px] font-semibold text-pure-greys-700`}
                >
                    Post Job without Saving
                </button>
                )}
                <IconBtn
                onClick={() => navigate("/dashboard/posted-job")}
                disabled={loading}
                text={!editJob ? "Post Job" : "Save Changes"}
                >
                <MdNavigateNext />
                </IconBtn>
            </div>


        </form>
    );
}