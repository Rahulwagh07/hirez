import './Preloader.css';  
import logo from "../../assets/newLogo2.png"
import { useSelector } from 'react-redux';

const Preloader = () => {
  const {theme} = useSelector((state) => state.theme)

  return (
    <div className={`${theme === 'dark' ? 'bg-slate-900 dark_gradient' : 'bg-bluegrey-50 light_gradient'} preloader`}>
      <img src={logo} alt="Logo" id="logo"/>
    </div>
    
  );
};

export default Preloader;
