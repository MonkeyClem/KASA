import {
  Routes,
  Route,
} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from '../codeReact/pages/Home'
import AboutUs from '../codeReact/pages/aPropos';
import Logement from '../codeReact/pages/logement';
import Error from '../codeReact/pages/error';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/aPropos" element={<AboutUs />} />
        <Route path="*" element={<Error />}></Route>
        <Route path="/:id" element={<Logement />} />
      </Routes>
    </Router>
  );
}

export default App;