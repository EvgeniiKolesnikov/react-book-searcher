import './Logo.scss';
import SiteLogoBooks from '../../images/logo.png';

export const Logo: React.FC = () => {
  return (
    <div className='logo'>
        <img className='logo__img' src={SiteLogoBooks} alt='SiteLogoBook' />
    </div>
  );
};
