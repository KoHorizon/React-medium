import { BrowserRouter, Route, Routes} from 'react-router-dom'

import './Reset.css';
import ArticlePage from './Pages/ArticlePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProtectedRoute from './Services/ProtectedRoute';

import { GarbageProvider } from './Providers/GarbageProvider';
import CreateArticlePage from './Pages/CreateArticlePage';
import SingleArticlePage from './Pages/SingleArticlePage';
import Map from './Components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Navbar';
import Disconnect from './Services/Disconect';


function App() {


    
  return (
    <>
    <GarbageProvider>

      {localStorage.getItem("token") && <Map/>}
      <BrowserRouter>
        <NavigationBar/>

        <Routes>

          <Route path="/register" element={<RegisterPage/>} > </Route>
          <Route path="/login" element={<LoginPage/>} > </Route>
          <Route path="/map" element={<Map/>} > </Route>



          <Route element={<ProtectedRoute/>}> 
              <Route path="/articles" element={<ArticlePage/>} > </Route>
              <Route path="/articles/:id" element={<SingleArticlePage/>} > </Route>
              <Route path="/articles/create" element={<CreateArticlePage/>} > </Route>
              <Route path="/disconnect" element={<Disconnect/>} > </Route>
          </Route>


        </Routes>

        </BrowserRouter>
    </GarbageProvider>
    </>
  );
}

export default App;
