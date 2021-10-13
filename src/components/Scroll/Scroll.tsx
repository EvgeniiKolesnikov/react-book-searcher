import './Scroll.scss';

export const Scroll: React.FC = ({children}) => {
  return (
    <div className='scroll books-list__scroll'>
      {children}
    </div>
  );
};
