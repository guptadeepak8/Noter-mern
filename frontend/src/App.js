import './App.css';
import './bootstrap.min.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Landingpage from './pages/Landingpage/landingpage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MyNotes from './pages/myNotes/mynotes';

function App() {
  return (
    <BrowserRouter>
     <Header/>
     <main>
       <Routes>
         
              <Route path='/' element={<Landingpage/>} index />
              <Route path="/mynotes" element={<MyNotes/>}/>
         
       </Routes>
     </main>
     {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
