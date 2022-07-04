import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import SignIn from './Sign_in';
import SignUp from './Sign_up';
import Wallet from './Wallet'
import Entrada from './Entrada';
import Saida from './Saida';
import ReleasesContext from './contexts/OrderContext';
import GlobalStyle from './themes/globalStyles'

export default function App() {
    const [order, setOrder] = useState({ type: 'Entrada' });
    const [token, setToken] = useState("");
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <ReleasesContext.Provider value={{ order, setOrder, token, setToken }} >
                    <Routes>
                        <Route exact path='/' element={<SignIn />} />
                        <Route exact path='/sign-up' element={<SignUp />} />
                        <Route exact path='/wallet' element={<Wallet />} />
                        <Route path='/wallet/entrada' element={<Entrada />} />
                        <Route path='/wallet/saida' element={<Saida />} />
                    </Routes>
                </ReleasesContext.Provider>
            </BrowserRouter>
        </>
    );

}

