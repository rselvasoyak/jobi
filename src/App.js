import './App.scss';
 
import IndexPage from './Components/IndexPage/IndexPage';
import JobListsPage from './Components/JobListsPage/JobListPage';
import SingleJobPage from './Components/SingleJobPage/SingleJobPage';
import Footer from './Components/Footer/Footer';
import ErrorPage from './Components/ErrorPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>  
        <Routes>
          <Route path='/' element={ <IndexPage /> } />
          <Route path='/jobLists' element={ <JobListsPage /> } />
          <Route path='/singleJobPage/:employer' element={ <SingleJobPage /> } />
          <Route path='*' element ={ <ErrorPage /> } />
        </Routes>
      <Footer />
    </>
  );
}

export default App;

// Pseudo-Code: 


// To do - End: 
  // Run tests: https://www.freecodecamp.org/news/how-to-build-a-react-project-with-create-react-app-in-10-steps/
