import './Logo.scss';
import BookLogo from '../../images/logo.png';

export const Logo: React.FC = () => {
  return (
    <div className='logo'>
        <img className='logo__img' src={BookLogo} alt='SunLogo' />
    </div>
  );
};
