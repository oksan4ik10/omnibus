/* eslint-disable @typescript-eslint/no-explicit-any */


import { useCallback, useEffect, useRef, useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import {
  useWindowSize
} from '@react-hook/window-size'
import style from "./App.module.scss"

import { Swiper, SwiperSlide } from 'swiper/react';

import './App.scss'
import Screen1 from './screens/Screen1/Screen1.tsx';
import Screen2 from './screens/Screen2/Screen2.tsx';
import Screen3 from './screens/Screen3/Screen3.tsx';
import Screen4 from './screens/Screen4/Screen4.tsx';
import Forms from './components/Forms/Forms.tsx';
import { resize } from './resize.ts'

import Footer from './components/Footer/Footer.tsx';
import Answer from './components/Answer/Answer.tsx';
import { Mousewheel, Scrollbar } from 'swiper/modules';



resize();
function App() {
  const [width, height] = useWindowSize()

  const [isMobile, setIsMobile] = useState((width < 1000) || ((width > 1000) && (width < 1200) && (height > 830)))

  useEffect(() => {
    setIsMobile((width < 1000) || ((width > 1000) && (width < 1200) && (height > 830)))
  }, [width, height])


  const [gap, setGap] = useState('');
  useEffect(() => {
    const width = window.innerWidth;
    setGap(width > 790 ? '6.5%' : '11.5%')

  }, [])

 

  const [isForm, setIsForm] = useState(false);
  const viewForm = () => {
    setIsForm(true);
  }
  const [isAnswer, setIsAnswer] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(-1)
  const [isDoubleClick, setIsDoubleClick] = useState(false);
  const openAnswer = (index: number,  win: boolean, doubleClick: boolean) => {
    setIsWin(win)
    setAnswerIndex(index)
    setIsDoubleClick(doubleClick)
    setTimeout(()=> { setIsAnswer(true)}, 20)
   
    disablePageScroll();
  }
  const closeAnswer = () => {
   
    setTimeout(()=> {  enablePageScroll()}, 20)
    setIsAnswer(false);
   
  }


  const [isStepMobile, setIsStepMobile] = useState(false);
  const educationAnswer = ()=> {
    if(isStepMobile) return;
    setIsStepMobile(true)
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  const isLoader = true; //в идеале убрать


//переключение свайпера
  const [screen, setScreen] = useState(1);

  const sliderRef = useRef<any>(null);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    // setScreen(screen + 1);
  }, []);

  const [isScreen3Mobile, setIsScreen3Mobile] = useState(false);
  const nextScreen3Mobile = () => {
    // setIsScreen3Mobile(true)
    handleNext();
  }

  const [isScreen4, setIsScreen4] = useState(false);
  const startGame = () => {
   
    handleNext()
  }

  const [isEduc, setIsEduc] = useState(false)
  const slideChange = ()=> {
    const activeSlide  = sliderRef.current.swiper.activeIndex;
    const countSlides = sliderRef.current.swiper.slides.length;
    if(countSlides - 1 === activeSlide) {
      if(isEduc) setIsEducation(true)
      slideEnd()
      return
    }
    setScreen(activeSlide + 1)
    setIsScreen4(false)
    setIsEducation(false)
    sliderRef.current.swiper.mousewheel.enable()
    if(countSlides === 4 && activeSlide === 3){
      setIsScreen3Mobile(true)
    }
    // console.log("change");
    
    
  }
  const slideEnd=()=> {
    if(!sliderRef.current) return;
    console.log(sliderRef.current.swiper);
    
    sliderRef.current.swiper.mousewheel.disable()
    setTimeout(()=>   setIsScreen4(true), 1200)
  
    disablePageScroll()
    
  }
  const [isEducation, setIsEducation] = useState(false);
  const addScrollScreen4 = ()=> {
    setIsEducation(true);
  }
  console.log(isEducation);
  const touchStart = ()=> {
    if(!isScreen4) return
    sliderRef.current.swiper.allowTouchMove = false;
    
  }
  const touchEnd=()=> {
    if(!isScreen4) return
    sliderRef.current.swiper.allowTouchMove = true;
  }
  return (
    <>

      <div className={"wrapper" + (isEducation ? " screen4" : "") + " " + style.wrapper}>
        <Swiper
          ref={sliderRef}
          autoHeight={true}
          slidesPerView={'auto'}
          // allowTouchMove={false}
          direction={'horizontal'}
          speed={1200}
          scrollbar={{
            hide: false,
            horizontalClass: "test",
            draggable: true,
          }}
          // spaceBetween={10}
          mousewheel={true}
          modules={[Scrollbar, Mousewheel]}
          // lazyPreloadPrevNext={1}
          // lazyPreloaderClass='opacity'
          onSlideChange={slideChange}
          onTouchStart={touchStart}
          onTouchEnd={touchEnd}
          // centeredSlides={true}
          // onReachEnd={slideEnd}
        >
          <SwiperSlide><Screen1 isLoader={isLoader} changeSlide={handleNext}></Screen1></SwiperSlide>
          <SwiperSlide><Screen2 changeSlide={nextScreen3Mobile} isMobile={isMobile} screen={screen} startGame={startGame}></Screen2></SwiperSlide>
          {isMobile && <SwiperSlide><Screen3 isScreen3Mobile={isScreen3Mobile} screen={screen} startGame={startGame}></Screen3></SwiperSlide>}
          <SwiperSlide>

            <Screen4 finishEduc={()=> setIsEduc(true)} addScrollScreen4={addScrollScreen4} isLoader={isLoader} width={width} isStepMobile={isStepMobile} openAnswer={openAnswer} isScreen4={isScreen4} viewForm={viewForm}></Screen4>

          </SwiperSlide>
        </Swiper>
        {isForm && <Forms></Forms>}
        {isAnswer && <Answer setIsStepMobile={educationAnswer}  isWin={isWin} isDoubleClick={isDoubleClick} indexAnswer={answerIndex} closeAnswer={closeAnswer}></Answer>}
        {!isLoader && <div className={style.container + " conatainer"}>
            <div className={style.loaderWrapper}>
            <div className={style.loader}></div>
            </div> 
            </div>}
        {isScreen4 && <div className={style.lampBtm}>
          <div className={style.lampBtm__wrapper}>
            <img src="./images/lamp.svg" alt="lamp" className={style.lampImg} />
            <img src="./images/screen4/waterLampBtmM.png" alt="water" className={style.waterLampBtmM} />

          </div>

        </div>}
        {isScreen4 && <div className={style.waterBtmM}>
          <img src="./images/screen4/water-purple.png" alt="water-purple" className={style.waterBtmMImg} />
        </div>}
        {gap && <Footer gap={gap}></Footer>}

      </div >


    </>
  )
}

export default App
