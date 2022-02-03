import './LogoText.scss';
import SiteLogoText from '../../images/logo_text_ru.png';

export const LogoText: React.FC = () => {
  return (
    <div className='logoText'>
      <img className='logoText__img' src={SiteLogoText} alt='SiteLogoText' />
    </div>
  );
};
