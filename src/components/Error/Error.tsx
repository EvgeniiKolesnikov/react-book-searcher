import './Error.scss';

export const Error: React.FC = (props) => {
  console.log(props);
  
  return (
    <div className='error'>
      <div className='error-message'>{props}</div>
    </div>
  );
};