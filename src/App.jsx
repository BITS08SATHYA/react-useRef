import {useEffect, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0)

    useEffect(() => {
        console.log('Component Rendered!')
    })

    // console.log(myRef)
    const incrementStateCount = () => {
        setStateCount(stateCount + 1);
    }

    const incrementRefCount = () => {
        refCount.current += 1;
        console.log(`Ref Count: ${refCount.current}`);
    }

  return (
    <div>
        <p>State Count: {stateCount}</p>
        <button onClick={incrementStateCount}>Increment State count</button>

        <p>Ref Count: {refCount.current}</p>
        <button onClick={incrementRefCount}>Increment Ref count</button>
    </div>
  )
}

export default App
