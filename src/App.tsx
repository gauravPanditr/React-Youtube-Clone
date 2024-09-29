
import Home from './Pages/Home'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import './App.css'

function App() {
 

  return (
  <BrowserRouter>
  <Routes>
    <Route>
 <Route path="/" element={<Home />} />
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
