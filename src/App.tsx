import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DreamDetails from './components/DreamDetails2'
import DreamList from './components/DreamList'
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
          <Route path="*" element={<h1>We are currently working on, please wait a while for it's launch...😁</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
