import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        {/* here we gonna define the first path which going to hold the layout component */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </>
  )
}
export default App
