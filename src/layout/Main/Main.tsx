import './Main.scss';

export const Main: React.FC = ({ children }) => {
  return (
    <main className='main'>
      <div className='main__container'>{children}</div>
    </main>
  );
};
