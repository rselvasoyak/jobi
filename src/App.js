import './App.scss';
 
import Nav from './Components/Nav';
import IndexPage from './Components/IndexPage';
import JobListPage from './Components/JobListPage';
import SingleJobPage from './Components/SingleJobPage';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <header>      
        <Nav />
      </header>  
      <main>
        <Routes>
          <Route path='/' element={ <IndexPage /> } />
          <Route path='/jobLists' element={ <JobListPage /> } />
          <Route path='/singleJobPage' element={ <SingleJobPage /> } />
          <Route path='/error' element ={ <ErrorPage /> } />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

// Pseudo-Code: 

