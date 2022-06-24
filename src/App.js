import { BrowserRouter, Routes, Route } from "react-router-dom";
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

                {/* <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  
                </Route> */}
                {/* <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":productId" element={<Single />} />
                 
                </Route> */}
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
