import { useEffect, useState } from 'react'

import './App.css'
//first -> side-effect function
//seconf -> clean-up function
//third -> comma seperated dep list 
function App() {
 useEffect(()=>
{
  first 
  return () => {
    second
  }
},
[third]
)

  return (
  <>
  Helo JI</>
  )
}

export default App
