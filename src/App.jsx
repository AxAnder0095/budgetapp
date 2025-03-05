import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./views/LoginPage.jsx";
import {selectUsers} from './store/userSlice.js'
import {useSelector} from "react-redux";
import Dashboard from "./views/Dashboard.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Transactions from "./views/Transactions.jsx";
import Expense from "./views/Expense.jsx";


function App() {
    const user = useSelector(selectUsers);


  return (
    <>
        {user.currentUser ?
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route index element={<Dashboard/>}/>
                  <Route path={'/expenses'} element={<Expense/>}/>
                  <Route path={'/transactions'} element={<Transactions/>}/>
              </Route>
          </Routes>
      </BrowserRouter> :
      <LoginPage/>
        }
    </>
  )
}

export default App
