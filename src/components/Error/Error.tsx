import './Error.scss';

interface IError { 
  error: string;
}

export const Error: React.FC<IError> = ({ error }) => {
  return (
    <div className='error'>
      <div className='error__title'>Ошибка загрузки данных</div>
      <div className='error-message'>{error}</div>
    </div>
  );
};