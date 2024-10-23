import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TaskProvider } from './Components/Context/Context.jsx'

createRoot(document.getElementById('root')).render(<TaskProvider><App /> </TaskProvider>)
