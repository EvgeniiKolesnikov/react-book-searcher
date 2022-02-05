import './ZeroBook.scss';

export const ZeroBook: React.FC = () => {
  return (
    <div className='zero-book'>
      <div className='zero-book__title'>Книги не найдены</div>
      <div className='zero-book__text'>Попробуйте ввести другой запрос.</div>
      <div className='zero-book__text'>
        Большинство книг записаны на английском языке и транслите.
      </div>
    </div>
  );
};
