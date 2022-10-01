import React from 'react';
import {
  ChakraProvider,Box,Text,Link,VStack,Code,Grid,theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
// import Login from './LoginComponent/Login';
import HomeMentimeter from './HomePage/HomeMentimeter';
import RouteProvider from './Routes/Routes';
import LinkProvider from './Routes/Link';
import {useContext} from "react"
import { AuthContext } from './Routes/AuthContext';
// import TitleBar from './Components/Nav';
 




function App() {
   const { navStatus} = useContext(AuthContext)
 
  return (
    <div className='App'>
      {navStatus?< LinkProvider />:""}
    
  < RouteProvider />
  

    </div>

  )
}

export default App;
