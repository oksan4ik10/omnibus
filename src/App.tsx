
import { useEffect, useState } from 'react';
import './App.scss'
import Screen1 from './screens/Screen1/Screen1.tsx';
import { resize } from './resize.ts'

import Footer from './components/Footer/Footer.tsx';

resize();
function App() {
  const [gap, setGap] = useState('');
  useEffect(() => {
    const width = window.innerWidth;
    setGap(width > 790 ? '6.5%' : '11.5%')

  }, [])
  console.log(gap);

  return (
    <>
      <div className="wrapper">

        <Screen1></Screen1>
        {gap && <Footer gap={gap}></Footer>}

      </div>


    </>
  )
}

export default App
