import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DreamDetails from './components/DreamDetails2'
import DreamList from './components/DreamList'
import DreamDetails2 from './components/DreamDetails2'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DreamList/>}></Route>
          <Route path='/dreams/:dreamId' element={<DreamDetails2/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
