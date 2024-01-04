import { useState } from "react"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../common/ConfirmationModal"
import SidebarLink from "./SidebarLink"
import { IoReorderThree } from 'react-icons/io5'
import { RxCross1 } from "react-icons/rx"
import { useRef } from 'react';
import  useOnClickOutside  from "../../../hooks/useOnClickOutside"

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  )
  const { loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null)

  const [showDropdown, setShowDropdown] = useState(false);
 const dropdownRef = useRef(null);

  useOnClickOutside(dropdownRef, () => {   //for closing the dropdown when  
    setShowDropdown(false);                //clicked outside of the dropdown
  });

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
    

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative sm:border-b border-sky-500">

      <div className="lg:hidden md:hidden cursor-pointer ml-4  mt-4" onClick={toggleDropdown}>
          {showDropdown ? (<RxCross1 size={24} color="#333"/>) : (<IoReorderThree size={32} color="#333"/>)}
        </div>

        {
          showDropdown && 
          <div className="flex flex-col lg:hidden md:hidden">
          <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            )
          })}
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />
        </div>
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-1 text-sm font-medium text-black"
          >
            <div className="flex items-center gap-x-2">
              <span>Logout</span>
              <VscSignOut className="text-lg" />
            </div>
          </button>
        </div>
           
        }
      <div className="flex h-[calc(100vh-3.5rem)] min-w-[200px] sm:hidden flex-col shadow-lg py-10">
        <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            )
          })}
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-white-25" />
        <div className="flex flex-col">
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-black"
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  )
}
