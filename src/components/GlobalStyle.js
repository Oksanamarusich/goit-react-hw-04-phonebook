import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';


export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ADD8E6;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
p,
ul,
li{
  margin: 0;
}

h1,h2{
  margin-bottom: 20px;
  text-align: center;

  text-transform: uppercase;
  color: #333333;
}
`;
