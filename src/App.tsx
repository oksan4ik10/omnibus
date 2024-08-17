
import './App.scss'
import Screen1 from './screens/Screen1/Screen1.tsx';
import { resize } from './resize.ts'

import Footer from './components/Footer/Footer.tsx';
resize();
function App() {


  return (
    <>
      <div className="wrapper">

        <Screen1></Screen1>
        <Footer></Footer>

      </div>


    </>
  )
}

export default App
