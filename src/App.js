import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/form/forgotPassword/ForgotPassword";
import Login from "./components/form/login/Login";
import Form from "./components/form/signUp/Form";
import Home from "./components/home/Home";


function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="sign-up" element={<Form/>} />
              <Route path="password">
                  <Route index element={<ForgotPassword />} />                  
              </Route>
              <Route path="sign-in">
                  <Route index element={<Login />} />
                    {/* <Route path=":productId" element={<Single />} /> */}
              </Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
