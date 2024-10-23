import { TaskProvider } from './Components/Context/Context'; 
import Info from './Components/Info/Info';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/all" element={<Info />} />
          <Route path="/pending" element={<Info />} />
          <Route path="/completed" element={<Info />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;

