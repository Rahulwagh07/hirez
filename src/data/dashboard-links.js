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
    id: 4,
    name: "Applied Jobs",
    path: "/dashboard/applied-jobs",
    type: ACCOUNT_TYPE.JOBSEEKER,
    icon: "VscMortarBoard",
  },
  {
    id: 5,
    name: "Apply for Jobs",
    path: "/dashboard/searchbar",
    type: ACCOUNT_TYPE.JOBSEEKER,
    icon: "VscHistory",
  },
  {
    id: 6,
    name: "Saved Jobs",
    path: "/dashboard/saved-jobs",
    type: ACCOUNT_TYPE.JOBSEEKER,
    icon: "VscHistory",
  },
];
