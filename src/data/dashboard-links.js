import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Post new Job",
    path: "/dashboard/post-newjob",
    type: ACCOUNT_TYPE.CREATOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "Posted Job",
    path: "/dashboard/posted-job",
    type: ACCOUNT_TYPE.CREATOR,
    icon: "VscVm",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.JOBSEEKER,
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    name: "Purchase History",
    path: "/dashboard/purchase-history",
    type: ACCOUNT_TYPE.JOBSEEKER,
    icon: "VscHistory",
  },
];
