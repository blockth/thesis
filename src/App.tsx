import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { DAppProvider, ChainId, Kovan } from '@usedapp/core';
import {Header} from './components/Header'
import {Container} from "@material-ui/core"
import {Main} from "./components/Main"
function App() {
  
  return (
    <DAppProvider config={{
      // supportedChains: [ChainId.Kovan, ChainId.Rinkeby, 1337 ],
      networks:[Kovan],
      notifications: {
        expirationPeriod: 1000,
        checkInterval: 1000
      }
    }}>
      <Header/>
      <Container maxWidth="md">
      <Main/>
      </Container>
    </DAppProvider>
  )
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //        Hello!
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
