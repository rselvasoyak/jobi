import './App.scss';
 
import Nav from './Components/Nav';
import IndexPage from './Components/IndexPage';
import JobListPage from './Components/JobListPage';
import SingleJobPage from './Components/SingleJobPage';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';
// import SecondIndex from './Components/SecondIndex';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>  
      <Nav />
      {/* <SecondIndex /> */}
      <main>
        <Routes>
          <Route path='/' element={ <IndexPage /> } />
          <Route path='/jobLists' element={ <JobListPage /> } />
          <Route path='/singleJobPage' element={ <SingleJobPage /> } />
          <Route path='/error' element ={ <ErrorPage /> } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

// Pseudo-Code: 


// To do - End: 
  // Run tests: https://www.freecodecamp.org/news/how-to-build-a-react-project-with-create-react-app-in-10-steps/
