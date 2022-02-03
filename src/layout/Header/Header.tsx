import { Logo, LogoText, SearchBar, Theme } from '../../components';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <Logo />
        <LogoText />
        <SearchBar />
        <Theme />
      </div>
    </header>
  );
};
