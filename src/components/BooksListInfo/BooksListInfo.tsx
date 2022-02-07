import { useTypedSelector } from '../../hooks/useTypedSelector';
import './BooksListInfo.scss';

export const BooksListInfo: React.FC = (): JSX.Element => {
  const { data } = useTypedSelector((state) => state.data);

  let showingBooks = 0;

  if (data?.num_found) {
    showingBooks =
      (data?.num_found - data.start) / 100 > 1
        ? data.start + 100
        : data?.num_found;
  }

  return (
    <div className='books-list-info'>
      <div className='books-list-info__title'>
        показано книг {showingBooks} / {data?.numFound}
      </div>
    </div>
  );
};
