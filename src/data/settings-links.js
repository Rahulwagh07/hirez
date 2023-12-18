import { ACCOUNT_TYPE } from "../utils/constants";
export const settingLinks = [
  {
    id: 1,
    name: "Update Profile",
    path: "/dashboard/settings/update-profile",
    icon: "RiAccountCircleLine",
  },
  {
    id: 2,
    name: "Update Portfolio",
    path: "/dashboard/settings/update-portfolio",
    type: ACCOUNT_TYPE.JOBSEEKER,
    icon: "RiHistoryLine",
  },
  {
    id: 3,
    name: "Password Change",
    path: "/dashboard/settings/change-password",
    icon: "RiLockPasswordLine",
  },
  {
    id: 4,
    name: "Delete Account",
    path: "/dashboard/settings/delete-account",
    icon: "RiDeleteBinLine",
  },
   
];

 