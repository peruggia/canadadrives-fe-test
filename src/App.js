import { Global, ThemeProvider } from '@emotion/react';
import OmgEverythingWentWrong from 'errors/OmgEverythingWentWrong';
import { darkTheme, globals } from './styles';
import UserList from './views/UserList';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Global styles={globals} />
      <OmgEverythingWentWrong>
        <UserList />
      </OmgEverythingWentWrong>
    </ThemeProvider>
  );
}

export default App;
