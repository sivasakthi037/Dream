import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DreamCard from './components/DreamCard.tsx'
import DreamDetails from './components/DreamDetails.tsx'
import AddDreamForm from './components/AddDreamForm.tsx'
import FilterBar from './components/FilterBar.tsx'
// import DreamStats from './components/DreamStats.tsx'
import DreamHeader from './components/DreamHeader.tsx'
import Layout from './components/layout.tsx'
import DreamList from './components/DreamList.tsx'
import Test from './components/Test.tsx'
import AddComponent from './components/AddComponent.tsx'
import NewForm from './components/NewForm.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  {/* <DreamCard title={'Title goes here'} date={'29/01/2005'} likes={1000}/> */}
  {/* <DreamDetails title={''} likes={0} content={''}/> */}
  {/* <AddDreamForm/> */}
  {/* <FilterBar name1={'fdsdf'} name2={'dfsdf'} name3={'sdfsf'} name4={'dfg'} name5={'dfgd'} name6={'dfdfg'}/> */}
  {/* <DreamStats dreamData={[]}/> */}
  {/* <Test/> */}
  {/* <DreamHeader/> */}
  {/* <Layout/> */}
  {/* <DreamList/> */}
  {/* <AddComponent/> */}
<App/>
    {/* <NewForm/> */}
  </React.StrictMode>,
)
