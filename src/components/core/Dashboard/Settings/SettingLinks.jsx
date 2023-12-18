import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RiDashboardLine,
  RiAccountCircleLine,
  RiLockPasswordLine,
  RiDeleteBinLine,
  RiHistoryLine,
} from 'react-icons/ri';
import { useSelector } from 'react-redux';

const SettingLinks = ({ links }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.profile);

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <div className=''>
      {links.map((link) => {
        if (link.type && user?.accountType !== link.type) return null;
        return (
          <div
            key={link.id}
            className="rounded-3xl xl:text-lg text-sm mb-4 hover:bg-blue-150  border-brand gap-8 px-7 py-2 flex items-center justify-center"
            onClick={() => handleLinkClick(link.path)}
          >
            {link.icon === 'RiAccountCircleLine' && <RiAccountCircleLine className="mr-2" />}
            {link.icon === 'RiDashboardLine' && <RiDashboardLine className="mr-2" />}
            {link.icon === 'RiLockPasswordLine' && <RiLockPasswordLine className="mr-2" />}
            {link.icon === 'RiDeleteBinLine' && <RiDeleteBinLine className="mr-2" />}
            {link.icon === 'RiHistoryLine' && <RiHistoryLine className="mr-2" />}
            <span>{link.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SettingLinks;
