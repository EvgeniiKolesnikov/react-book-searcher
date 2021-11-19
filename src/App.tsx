import { Header, Main } from './layout';
import { BooksList, Scroll } from './components';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Scroll>
          <BooksList />
        </Scroll>
      </Main>
    </>
  );
};
