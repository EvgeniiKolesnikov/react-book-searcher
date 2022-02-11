import { Header, Main } from './layout';
import {
  BooksList,
  Logo,
  LogoText,
  Scroll,
  SearchBar,
  Theme,
} from './components';

export const App: React.FC = () => {
  return (
    <>
      <Header>
        <Logo />
        <LogoText />
        <SearchBar />
        <Theme />
      </Header>
      <Main>
        <Scroll>
          <BooksList />
        </Scroll>
      </Main>
    </>
  );
};
