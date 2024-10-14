// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, {Suspense} from'react'
// import Lazy from './LazyLoading'

const Lazy = React.lazy(() =>import('./LazyLoading'))
function App() {



  return (
    <>
     <h1>Learning lazy loading in react</h1>
     <Suspense fallback={<div>Loading data...</div>}>

     <Lazy />
     </Suspense>
    
    </>
  )
}

export default App
