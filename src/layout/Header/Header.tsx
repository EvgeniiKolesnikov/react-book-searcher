import { Logo, SearchBar, Theme } from '../../components';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <Logo />
        <div className='header__title'>книгопоиск</div>
        <SearchBar />
        <Theme />
      </div>
    </header>
  );
};
