import { FC, UIEvent, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Scroll.scss';

export const Scroll: FC = ({ children }) => {
  const [isAddData, setIsAddData] = useState(false);
  const { setDataPage } = useActions();
  const { data, loading, page } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (!loading && data) {
      setIsAddData(false);
      // console.log('isAddData =', isAddData, page, loading);
      // console.log('page =', page);
      // console.log('totalPages =', data.totalPages);
      // console.log('data =', data);
    }
  }, [loading]);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const scroll = e.currentTarget;
    const offset = 120;

    let scrollTop = scroll.scrollTop;
    let scrollBottom = scrollTop + scroll.offsetHeight;
    let scrollHeigh = scroll.scrollHeight;
    if (scrollBottom + offset >= scrollHeigh) {
      // scroll in target
      // console.log('scroll isAddData =', isAddData, page, loading);
      // console.log('data =', data);
      if (!isAddData && !loading && data && page < data.totalPages) {
        setIsAddData(true);
        setDataPage(page + 1);
        // console.log('isAddData =', isAddData, page, loading);
      }
    }
  };

  return (
    <div className='scroll' onScroll={onScroll}>
      {children}
    </div>
  );
};
