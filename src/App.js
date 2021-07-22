import { Global, ThemeProvider } from '@emotion/react';
import { darkTheme, globals } from './styles';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Global styles={globals} />
      <h1>Hello App</h1>
    </ThemeProvider>
  );
}

export default App;
