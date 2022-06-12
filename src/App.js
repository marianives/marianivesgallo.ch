import './App.css';
import Home from './components/Home';
import Ausbildung from './components/Ausbildung';
import Skills from './components/Skills';
import Aboutme from './components/Aboutme';
function App() {
  return (
    <div className="App">
        <Home></Home>
        <Ausbildung></Ausbildung>
        <Skills></Skills>
        <Aboutme></Aboutme>
    </div>
  );
}

export default App;
  