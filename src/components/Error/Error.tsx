import './Error.scss';

interface IError { 
  error: string;
}

export const Error: React.FC<IError> = ({ error }) => {
  console.log(error);
  
  return (
    <div className='error'>
      <div className='error-message'>{error}</div>
    </div>
  );
};