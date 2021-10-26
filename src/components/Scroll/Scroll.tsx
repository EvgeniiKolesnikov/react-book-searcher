import './Scroll.scss';

export const Scroll: React.FC = ({children}) => {
  return (
    <div className='scroll'>
      {children}
    </div>
  );
};
