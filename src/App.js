import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './Sign_in';
import SignUp from './Sign_up';
import Wallet from './Wallet'
import ReleasesScreen from './ReleasesScreen'
import GlobalStyle from './themes/globalStyles'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route exact path='/' element={<SignIn />} />
                    <Route exact path='/sign-up' element={<SignUp />} />
                    <Route exact path='/wallet' element={<Wallet />} />
                    <Route path='/release' element={<ReleasesScreen/>} />
                </Routes>
            </BrowserRouter>
        </>
    );

}

