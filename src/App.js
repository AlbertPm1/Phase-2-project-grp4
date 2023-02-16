import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import react route components
import { BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

// import Movie App
import MovieApp from './MovieApp'
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';

function App(){
	return (
    <div className='movieApp'> 
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route exact path="/movieapp" element={<MovieApp />}/>
          </Routes>
      </BrowserRouter>
    </div>

	);
};

export default App;