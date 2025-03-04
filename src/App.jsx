import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./views/LoginPage.jsx";
import {selectUsers} from './store/userSlice.js'
import {useSelector} from "react-redux";
import Dashboard from "./views/Dashboard.jsx";

function App() {
    const user = useSelector(selectUsers);


  return (
    <>
        {user.currentUser ?
      <BrowserRouter>
          <Routes>
              <Route index element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter> :
      <LoginPage/>
        }
    </>
  )
}

export default App
