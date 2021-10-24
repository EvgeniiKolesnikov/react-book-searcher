import { Header, Main } from './layout';
import { BooksList } from './components';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <BooksList />
      </Main>
    </>
  );
};
