import { TaskProvider } from './Components/Context/Context'; 
import Info from './Components/Info/Info';

function App() {
  return (
    <TaskProvider>
      <Info />
    </TaskProvider>
  );
}

export default App;
