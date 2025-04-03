import React from 'react'
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Main from '../Layout/Main'
import Work from '../pages/Work';
function App() {
  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/work' element={<Work />} />
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App