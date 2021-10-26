import './Theme.scss';
import SunLogo from '../../images/sun.png';
import MoonLogo from '../../images/moon.png';
import { useState } from 'react';

export const Theme: React.FC = () => {
  const [icon, setIcon] = useState('sun');

  const changeTheme = () => {
    icon === 'sun' ? setIcon('moon') : setIcon('sun');
    // console.log('icon', icon);
  }

  return (
    <div className='theme' onClick={changeTheme}>
      <div className={`theme__icon ${icon}`}>
        <img className='theme__img' src={SunLogo} alt='SunLogo' />
        <img className='theme__img' src={MoonLogo} alt='MoonLogo' />
      </div>
    </div>
  );
};
