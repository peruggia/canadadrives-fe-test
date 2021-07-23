import { Global, ThemeProvider } from '@emotion/react';
import OmgEverythingWentWrong from 'errors/OmgEverythingWentWrong';
import useDarkMode from 'hooks/useDarkMode';
import { dark, light } from 'themes';
import { globals } from './styles';
import UserList from './views/UserList';

function App() {
  // I did this so you guys don't get bind when looking at this project
  // during the evening
  const isDark = useDarkMode();
  const theme = isDark ? dark : light;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      <OmgEverythingWentWrong>
        <UserList />
      </OmgEverythingWentWrong>
    </ThemeProvider>
  );
}

export default App;
