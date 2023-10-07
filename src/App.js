import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddRecipe from './recipes/AddRecipe';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/addRecipe' element={<AddRecipe />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
