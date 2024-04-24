import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./styles/base.scss"
import { Element } from './routes';
  
const Main = () => {
    const [isAuth, setIsAuth] = useState<boolean>(true)

    return (
        <BrowserRouter>
            <Element isAuth={isAuth} />            
        </BrowserRouter>
    )
}

export default Main