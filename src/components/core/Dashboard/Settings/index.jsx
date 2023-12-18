import React from 'react';
import SettingLinks from './SettingLinks';
import { settingLinks } from '../../../../data/settings-links';
 

const Settings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <SettingLinks links={settingLinks} />
     
    </div>
  );
};

export default Settings;
