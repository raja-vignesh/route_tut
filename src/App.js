import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Contacts from './screens/Contacts';
import { Container } from '@mui/material';
import Faq from './screens/Faq';
import Map from './screens/Map';
import NotFound from './screens/NotFound';
import CareerLayout from './screens/Layouts/CareerLayout';
import Careers,{careersLoader} from './screens/Careers';
import CareerDetails,{careerDetailsLoader} from './screens/CareerDetails';
import CareerError from './screens/CareerError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contacts />} >
        <Route path='mail' element={<Faq />} />
        <Route path='phone' element={<Map />} />
      </Route>
      <Route path='career' element={<CareerLayout />} >
        <Route index element={<Careers />} loader={careersLoader}/>
        <Route path=':id' element={<CareerDetails />} loader={careerDetailsLoader}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Container sx={{my:8}}>
    //     <Routes>
    //       <Route index element={<Home />} />
    //       <Route path='/about' element={<About />} />
    //       <Route path='/contact' element={<Contacts />} />
    //     </Routes>
    //   </Container>
    // </BrowserRouter>
    <RouterProvider router={router}/>
  );
}

export default App;
