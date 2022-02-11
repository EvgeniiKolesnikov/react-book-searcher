import './Header.scss';

export const Header: React.FC = ({ children }) => {
  return (
    <header className='header'>
      <div className='header__container unselectable' unselectable='on'>
        {children}
      </div>
    </header>
  );
};
