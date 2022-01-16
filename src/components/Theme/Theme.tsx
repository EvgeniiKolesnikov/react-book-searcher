import './Theme.scss';
import SunIcon from '../../images/sun.png';
import MoonIcon from '../../images/moon.png';
import { useState } from 'react';
import ThemeService from '../../services/ThemeService';

export const Theme: React.FC = () => {
  const [icon, setIcon] = useState(ThemeService.loadTheme());

  const changeTheme = () => {
    ThemeService.toggleTheme();
    setIcon(ThemeService.loadTheme());
  };

  return (
    <div
      className='theme'
      onClick={changeTheme}
      title={`Тема: ${
        icon === 'sun' ? 'светлый день в Я.Доставке' : 'тёмная ночь в Я.Такси'
      }`}
    >
      <div className={`theme__icon ${icon}`}>
        <img className='theme__img' src={SunIcon} alt='sun' />
        <img className='theme__img' src={MoonIcon} alt='moon' />
      </div>
    </div>
  );
};
