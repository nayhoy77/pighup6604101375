// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export default function App(){
  const[level, setLevel] = useState(1);

  const feedAnimal = (food) => {
    let addedLevel = 0;
    if (food === 'watermelon') addedLevel = 1;
    if (food === 'pumpkin') addedLevel = 5;
    if (food === 'grap') addedLevel = 10;

    setLevel((prevLevel) => 
      Math.min(prevLevel + addedLevel, 100));
  };

  const calculateImageSize = () => {
    const baseSize = 50;
    const maxSize = 1000;
    const sizeIncrease = Math.floor(level / 5) * 20;
    return Math.min(baseSize + sizeIncrease, maxSize);
  };

  return(
    <>
    <div style={{background:'green'}}>
      <h3 style={{textAlign:'center',
         padding:'5px'}}>เลเวลตัน {level}</h3>

      <div style={{ display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        margin: '40px' }}>
        <img src={level >= 100 ?"/picture/อร่อยเลย.jpg":"/picture/ฮิปโปหมูตัน.jpg"} 
        alt="มันคือฮิปโป" 
        style={{ width: calculateImageSize(),
            height: 'auto',
            transition: 'width 0.5s' }} />
      </div>

      <p style={{ display: 'flex', 
        justifyContent: 'center', 
        gap: '10px' ,
        padding:'80px'}}>

      <button className="square">
        <img src="/picture/แตงโมม.jpg" 
        alt="แตงโม" 
        style={{ width: '50px', height: '50px' }}  
      onClick={() => feedAnimal('watermelon')}/>
      </button>
      
      <button className="square">
        <img src="/picture/บักอึ.jpg" 
        alt="บักอึอึ" 
        style={{ width: '50px', height: '50px' }} 
      onClick={() => feedAnimal('pumpkin')}/>
      </button>

      <button className="square">
        <img src="/picture/กล้อยไรล่ะ.jpg"
         alt="กร้อยย" 
         style={{ width: '50px', height: '50px' }} 
      onClick={() => feedAnimal('grap')}/>
      </button>
      </p>
    </div>
    </>
  );
}
