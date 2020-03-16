import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      body {min-height: 100vh;
        margin-top:10vw;
        background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);}
        select {
          margin-bottom:25px;
          padding:10px;
        }  
        
        
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />     
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}
