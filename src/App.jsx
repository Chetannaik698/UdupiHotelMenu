import './App.css'
import Break_Bevragepage from './components/Breakfast&Bevarages/Break_Bevragepage'
import Desert_Refreshment_Page from './components/Deserts_Refreshment/Desert_Refreshment_Page';
import Main_Course from './components/Main_Course/Main_Course';
import Navbar from './components/Navbar'
import Rice_Nodels_Page from './components/Rice_Noddels/Rice_Nodels_Page';
import Starters_Snacks_Page from './components/Starters_Snacks/Starters_Snacks_Page';
import Tagline from './components/TagLine.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
     <BrowserRouter>
      <Tagline />
      <Navbar />
      <Routes>
      <Route path="/" element={<Break_Bevragepage/>}></Route>
      <Route path="/starters_snacks" element={<Starters_Snacks_Page />}></Route>
      <Route path="/main_course" element={<Main_Course />}></Route>
      <Route path="/rice_noddels" element={<Rice_Nodels_Page />}></Route>
      <Route path="/deserts_refreshment" element={<Desert_Refreshment_Page />}></Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App
