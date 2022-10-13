import React from 'react';
 
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Allmeetups from './pages/Allmeetups';
import Newmeetups from './pages/Newmeetups';
import Favorites from './pages/Favorites';

import Mainnavigation from './components/layouts/Mainnavigation';


function App() {
  return (
    <div >
    <BrowserRouter>
    <div >
    <Mainnavigation />
    </div>
          <Routes>
            <Route path='/'>
            <Route index element={<Allmeetups />}/>
            <Route path='/new' element={<Newmeetups/>}/>
            <Route path='/favorite' element={<Favorites/>}/>
            </Route>
          </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
