import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DreamDetails2 from './components/DreamDetails2'
import DreamStats from './components/DreamStats'
import AddDreamForm from './components/AddDreamForm'
import Landing from './components/Landing'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/dreams/:dreamId' element={<DreamDetails2/>}></Route>
          <Route path="/statics" element ={<DreamStats/>}/>
          <Route path="/add" element={<AddDreamForm/>}/>
          <Route path="*" element={<h1 className='font-mono'><br/>We are currently working on improving on this very basic model, ANONYMOUS is our moto... 🧑‍💻, there are going to be many , please wait for a surprising launch...😉</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
