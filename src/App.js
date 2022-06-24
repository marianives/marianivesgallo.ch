import './App.css';
import Home from './components/Home';
import Ausbildung from './components/Ausbildung';
import Skills from './components/Skills';
import Aboutme from './components/Aboutme';
import Getintouch from './components/Getintouch';
function App() {
  return (
    <div className="App">
      <Home></Home>
      <Aboutme></Aboutme>
      <Ausbildung></Ausbildung>
      <Skills></Skills>
      <Getintouch></Getintouch>
    </div>
  );
}

export default App;
