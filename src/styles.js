import { css } from '@emotion/react';

export const globals = (theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.backgroundColor};
    color: ${theme.color};
    padding: 16px;
  }

  a {
    color: ${theme.color};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1 {
    margin-bottom: 32px;
    font-size: 2.5em;
    line-height: 1.2em;
    padding-bottom: 8px;
    border-bottom: 1px ${theme.fade} solid;
  }
`;
