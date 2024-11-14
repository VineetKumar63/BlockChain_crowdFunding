import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,CompaignDetails, CreateCompaign, Profile} from './pages'
import {Sidebar, Navbar} from './components'
import { useContract } from '@thirdweb-dev/react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
     <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/create-campaign' element={<CreateCompaign/>}/>
        <Route path='/campaign-details/:id' element={<CompaignDetails/>}/>
      </Routes>
       </div>
     </div>
    </>
  )
}

export default App
