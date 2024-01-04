import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import IconBtn from "../../common/IconBtn"
import { FaArrowRight } from "react-icons/fa6";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import { FaEdit } from "react-icons/fa";



export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <div className="text-black">
       <div className="flex items-center justify-between sm:mb-12 mb-14 mr-8 ml-4">
         <div className="sm:flex gap-2">
          <h1 className="text-3xl font-medium sm:text-lg">
            My Profile   
          </h1>
          <button onClick={() => {
              navigate("/dashboard/settings/update-profile");
            }}
            className="hover:text-blue-150 text-sky-500 lg:hidden md:hidden"
          >
            <FaEdit/>
          </button>
         </div>
        
         {
          user && user.accountType === ACCOUNT_TYPE.JOBSEEKER &&
          <button
            onClick={() => {
              navigate("/dashboard/settings");
            }}
            className="rounded-md border-brand items-center px-7 py-2 flex sm:py-1 sm:px-2"
          >
            Portfolio <FaArrowRight className="ml-2"/>
          </button>

         }
       </div>
      <div className="flex items-center justify-between rounded-md  section_bg box-shadow sm:p-4 sm:px-2 p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings/update-profile")
          }}
          customClasses="sm:hidden"
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md section_bg box-shadow sm:p-4 sm:px-2 p-8  px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings/update-profile")
            }}
            customClasses="sm:hidden"
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
            ? "text-black"
            : "text-richblack-400"
          } text-sm`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>

      {
        user && user.accountType === ACCOUNT_TYPE.JOBSEEKER &&
        <div className="my-10 flex flex-col gap-y-10 rounded-md section_bg box-shadow  sm:p-4 sm:px-2 p-8  px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold">Interested Role</p>
           <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings/update-profile")
            }}
            customClasses="sm:hidden"
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
 
        <p
          className={`${
            user?.additionalDetails?.about
            ? "text-black"
            : "text-richblack-400"
          } text-sm`}
        >
          {user?.additionalDetails?.role ?? "Tell more about you which role you are most Interested, It will help to give relevent job for You"}
        </p>
      </div>
      }

      <div className="my-10 flex flex-col gap-y-10 rounded-md section_bg box-shadow sm:p-4 sm:px-2 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings/update-profile")
            }}
            customClasses="sm:hidden"
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm font-medium">First Name</p>
              <p className="text-sm">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Email</p>
              <p className="text-sm">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Gender</p>
              <p
                className={`${
                  user?.additionalDetails?.gender
                  ? "text-black"
                  : "text-richblack-400"
                } text-sm`}
                >
                {user?.additionalDetails?.gender ?? "Add gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm font-medium">Last Name</p>
              <p className="text-sm">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Phone Number</p>
              <p
                className={`${
                  user?.additionalDetails?.contactNumber
                  ? "text-black"
                  : "text-richblack-400"
                } text-sm`}
                >
                {user?.additionalDetails?.contactNumber ?? "Add contact no"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Date Of Birth</p>
              <p
                className={`${
                  user?.additionalDetails?.dateOfBirth
                  ? "text-black"
                  : "text-richblack-400"
                } text-sm`}
                >
                {user?.additionalDetails?.dateOfBirth ?? "Add date of birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
