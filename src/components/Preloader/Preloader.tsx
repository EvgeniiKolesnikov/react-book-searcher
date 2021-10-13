import './Preloader.scss';

export const Preloader: React.FC = () => {
  return (
    <div className='preloader'>
      <div className='banter-loader'>
        <div className='banter-loader__box'></div>
        <div className='banter-loader__box'></div>
        <div className='banter-loader__box'></div>
        <div className='banter-loader__box'></div>
        <div className='banter-loader__box'></div>
        <div className='banter-loader__box'></div>
        <div className='banter-loader__box'></div>
        <div className='banter-loader__box'></div>
        <div className='banter-loader__box'></div>
      </div>
    </div>
  );
};
