import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{useGSAP} from '@gsap/react'
import gsap from 'gsap'

function App() {
  const [count, setCount] = useState(0)
  const [countY, setCountY] = useState(0);
  const randomValueX = gsap.utils.random(-500,500,100);
  const randomValueY = gsap.utils.random(-500,500,100);
  let gsapRef = useRef();
  // useGSAP(()=>{
  //   gsap.from(gsapRef.current,{
  //     x : 500,
  //     duration : 2,
  //     borderRadius : "50%",
  //     opacity : 0
  //   })
  // })
  useGSAP(()=>{
    gsap.from(gsapRef.current,{
      rotate : 720,
      delay : 1,
      duration :1,
      y : 500,
      opacity : 0
    })
  })
  useGSAP(()=>{
    gsap.to(".circle",{
      x : count,
      y : countY
    })
  },{scope : "main",dependencies:[count,countY]});
  return (
    <>
    <main>
      {/* <div ref={gsapRef} className="box"></div> */}
      <button onClick={()=>{
        setCount(randomValueX)
        setCountY(randomValueY)
      }}>Animate</button>
      <div className="circle"></div>

    </main>
    </>
  )
}

export default App
