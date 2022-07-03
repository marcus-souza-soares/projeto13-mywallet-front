import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import SignIn from './Sign_in';
import SignUp from './Sign_up';
import Wallet from './Wallet'
import ReleasesScreen from './OrderScreen';
import ReleasesContext from './contexts/OrderContext';
import GlobalStyle from './themes/globalStyles'

export default function App() {
    const [release, setRelease] = useState({ type: 'Entrada' });
    const [token, setToken] = useState();
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <ReleasesContext.Provider value={{ release, setRelease, token, setToken }} >
                    <Routes>
                        <Route exact path='/' element={<SignIn />} />
                        <Route exact path='/sign-up' element={<SignUp />} />
                        <Route exact path='/wallet' element={<Wallet />} />
                        <Route path='/release' element={<ReleasesScreen />} />
                    </Routes>
                </ReleasesContext.Provider>
            </BrowserRouter>
        </>
    );

}

