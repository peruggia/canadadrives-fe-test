import { Global, ThemeProvider } from '@emotion/react';
import OmgEverythingWentWrong from 'errors/OmgEverythingWentWrong';
import { dark } from 'themes';
import { globals } from './styles';
import UserList from './views/UserList';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Global styles={globals} />
      <OmgEverythingWentWrong>
        <UserList />
      </OmgEverythingWentWrong>
    </ThemeProvider>
  );
}

export default App;
