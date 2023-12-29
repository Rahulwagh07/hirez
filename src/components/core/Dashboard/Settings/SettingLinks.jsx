import React from 'react';
import { useNavigate } from 'react-router-dom';
import { settingLinks } from '../../../../data/settings-links';
import { RiDashboardLine, RiAccountCircleLine, RiLockPasswordLine, RiDeleteBinLine, RiHistoryLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const icons = {
  RiDashboardLine,
  RiAccountCircleLine,
  RiLockPasswordLine,
  RiDeleteBinLine,
  RiHistoryLine,
};

const SettingLinks = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <div className='flex flex-col gap-4'>
      {settingLinks.map((link) => {
        if (link.type && user?.accountType !== link.type) return null;
        const Icon = icons[link.icon];  
        if (!Icon) return null; 
        return (
          <div
            key={link.id}
            className="rounded-3xl  hover:bg-blue-150 hover:shadow-lg  border-brand gap-4 cursor-pointer px-7 lg:py-3 flex items-center justify-center"
            onClick={() => handleLinkClick(link.path)}
          >
            <span>{link.name}</span>
            <Icon className="text-blue-500" />
          </div>
        );
      })}
    </div>
  );
};

export default SettingLinks;
