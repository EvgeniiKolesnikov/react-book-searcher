import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Error.scss';

export const Error: React.FC = () => {
  const { error } = useTypedSelector((state) => state.data);
  return (
    <div className='error'>
      <div className='error__title'>Ошибка загрузки данных</div>
      <div className='error__message'>{error}</div>
    </div>
  );
};
