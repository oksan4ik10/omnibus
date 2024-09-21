


import Card from "../../components/Card/Card";
import style from "./Screen4.module.scss"
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ICard } from "../../models/type";


interface IProps {
    viewForm: () => void;
    isScreen4: boolean;
    openAnswer: (index: number) => void;
    width: number;
    isLoader: boolean;
    addScrollScreen4: ()=> void
    finishEduc: ()=> void
    isEduc: boolean
    isSlideEnd: boolean
    dataCards: ICard[]
    userAnswer: boolean[]
}
function Screen4(props: IProps) {
    const {dataCards: data, openAnswer, viewForm, isScreen4, width, isLoader, addScrollScreen4, finishEduc, isEduc, isSlideEnd, userAnswer} = props;

    const [isTextBtm, setIsTextBtm] = useState(false);
    const clickBtn = () => {
        if(userAnswer.filter((item)=> item).length!==9) {
            setIsTextBtm(true);
            setTimeout(()=> setIsTextBtm(false), 2000)
            return
        }
        viewForm();
        disablePageScroll();

    }

    const clickCard = (index: number) => {
        
        openAnswer(index);
    }
    // const [isAnswerYM, setIsAnswerYM] = useState(false);
    // const clickAnswerUser = (e:React.MouseEvent<HTMLSpanElement>,index: number, answer: string) => {
    //     if (userAnswer[index]) return;
    //     e.stopPropagation();
    //     if(!isAnswerYM){
    //         ym('reachGoal', 'answer')
    //         setIsAnswerYM(true)
    //     }
    //     userAnswer[index] = true;
    //     setUserAnswer(userAnswer);
    //     openAnswer(index, data[index].answerRight === answer, false, userAnswer.filter((item)=>item).length);

    // }
    const [isAnimation, setIsAnimation] = useState(false);
    const [indexAnimationCard, setIndexAnimationCard] = useState(-1);
    const transformCard = (index: number)=> {

        if(index === indexAnimationCard){
            setIsAnimation(!isAnimation);
            return
        }
        setIsAnimation(true);
        setIndexAnimationCard(index)
       
    }

    //=================EDUCATION============
    const [isEducation, setIsEducation] = useState(true)
    const [step, setStep] = useState(0);
    const [isTouch, setIsTouch] = useState(false)
    const refArrowEducation = useRef<HTMLDivElement>(null);
    const refDescCard2 = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        const isTouch = () => width < 800
        const  t = isTouch();
        
        setIsTouch(t)
    }, [])
    const step0 = ()=> {
        setStep(1)
        if(refDescCard2.current && !isEduc){
            refDescCard2.current.scrollIntoView({block:"end", behavior: "smooth"})
        }
    }
    const[isScrollEduc, setIsScrollEduc] = useState(true)
    useEffect(()=> {
        
        if(isScrollEduc && isScreen4) disablePageScroll()
        else  enablePageScroll()
    },[isScrollEduc, isScreen4])
    const changeEducation = ()=> {
        if(step===0) {
            step0();
            return
        };
        if(step===1){
            refWrapper.current?.scrollIntoView();
            setStep(2)
            return
        }
        if(step===2){
            if(refArrowEducation.current){
                refArrowEducation.current.scrollIntoView({block:"end", behavior: "smooth"})
            }
            
            setStep(3)

            return
        }
        if(step===3){
            setStep(4)
            return
        }

        addScrollScreen4()
        enablePageScroll()
        setIsScrollEduc(false)
        setIsEducation(false)
        finishEduc()
        
        refWrapper.current?.scrollIntoView();
    }


    const changeEducationMobile = ()=> {

        if(step==0){
            transformCard(0);
            setTimeout(()=> { setStep(1)}, 300)
            return
        }

        if(step===1){
            refWrapper.current?.scrollIntoView();
            setStep(2)
            return
        }
        if(step === 2){
            enablePageScroll()
            setStep(3)
            setIndexAnimationCard(-1)
            if(refArrowEducation.current){
                refArrowEducation.current.scrollIntoView(false)
            }
            return
        }
        if(step===3){
            setStep(4)
            return
        }
        addScrollScreen4()
        enablePageScroll()
        setIsScrollEduc(false)
        setIsEducation(false)
        finishEduc()
        refWrapper.current?.scrollIntoView();
    }
    useEffect(()=> {
        if(isTouch && refDescCard2.current && isScreen4){
            disablePageScroll()
            setTimeout(()=>{
                if (refDescCard2.current)  refDescCard2.current.scrollIntoView({block:"end", behavior: "smooth"})
        

            }, 200)
        }
    }, [isTouch, isScreen4])

    const refWrapper = useRef<HTMLDivElement>(null)
    useLayoutEffect(() => {
        if(isEduc && isSlideEnd) refWrapper.current?.scrollIntoView();
      }, [isSlideEnd]);


   
    const numWord= (value: number)=>{
        const words = ["карточку", "карточки", "карточек"]  
        value = Math.abs(value) % 100; 
        const num = value % 10;
        if(value > 10 && value < 20) return words[2]; 
        if(num > 1 && num < 5) return words[1];
        if(num == 1) return words[0]; 
        return words[2];
    }
    const getLabelBtm = ()=> {
        const num = 9 - userAnswer.filter((item)=>item).length;
        const word = numWord(num)
        return `${num} ${word}`
    }
      

    return (
        <>
        {isEducation && !isTouch && <div className={style.education + " " + style.container + " "+ (isScreen4 ? style.screen4:"") + " " + (isLoader ? style.opacityLoader : style.opacityNoLoader)} onClick={changeEducation}>
        <div className={style.wrapper} >
                    <div className={style.header}>
                        <div className={style.header__img}>
                            <img src="images/screen4/logo.png" alt="logo" className={style.logoM} />
                            <img src="images/screen4/logoDesktop.png" alt="logo" className={style.logoD} />

                        </div>
                        <div className={style.header__educ + " " + (step === 2 ? "" : style.opacity)}>
                        <div className={style.header__counter}>
                            <span>{userAnswer.filter((item)=>item).length}</span>
                            <span>/</span>
                            <span>9</span>

                        </div>
                        <div className={style.descHeader}>
                                  <span className={style.spanEduc}>Счётчик показывает,<br/>сколько карточек<br/>было открыто</span>
                                    <div className={style.descCard2__wrapperImg}>
                                        <img src="/images/cards/desc-card2.svg" alt="desc" className={style.educImgD} />
                                        <img src="/images/cards/desc-card2M.svg" alt="desc" className={style.educImgM} />
                                    </div>    
                            </div>
                        </div>

                    </div>
                    <div className={style.cards + " " + style.cardsEducation}>
                        {data.slice(0,2).map((item, index) =>
                            <div className={style.cards__item + " " + style.cardEducation+ " " + style.animation} key={index}>
                                {index===0 && <div className={style.card__back + " " + style.card + " " + style.backFront + " " + (step === 0 ? "" : style.opacity)}>
                                    <Card isEduc={true} item={item} isOdd={index % 2 === 0} screen4={true} isUser={true}></Card>
                                    <div className={style.descCard1}>
                                        <div className={style.descCard1__wrapperImg}>
                                        <img src="/images/cards/desc-card1.svg" alt="desc" className={style.educImgD} />
                                        <img src="/images/cards/desc-card1M.svg" alt="desc" className={style.educImgM} />
                                        </div>
                                        
                                        <span className={style.spanEduc}>Наведи на карточку, которую хочешь прочитать</span>

                                    </div>
                                    <div className={style.descCard1 + " " + style.descCard1M}>
                                        <div className={style.descCard1__wrapperImg}>
                                        <img src="/images/cards/desc-card1.svg" alt="desc" className={style.educImgD} />
                                        <img src="/images/cards/desc-card1M.svg" alt="desc" className={style.educImgM} />
                                        </div>
                                        
                                        <span className={style.spanEduc}>Читай описание и выбирай ответ</span>

                                    </div>
                                </div>}
                                {index===1 && <div className={style.card__back + " " + style.card + " " + style.backFront + " " + (step === 1 ? "" : style.opacity)}>
                                  <Card  isEduc={true} item={item} isOdd={index % 2 === 0} screen4={true} isUser={true}></Card>
                                  <div className={style.descCard2} ref={refDescCard2}>
                                  <span className={style.spanEduc}>Читай описание<br/>и выбирай ответ</span>
                                        <div className={style.descCard2__wrapperImg}>
                                        <img src="/images/cards/desc-card2.svg" alt="desc" className={style.educImgD}/>
                                        </div>
                                        
                                      

                                    </div>
                                </div>}




                            </div>)}

                <div className={style.arrowEducation  + " " + (step === 3 ? "" : style.opacity)} ref={refArrowEducation}>
                    <div className={style.wrapperArrowEducImg}>
                        <img src="/images/cards/arrow-education.svg" alt="arrow" />
                    </div>
                    <span className={style.spanEduc}>Листай вниз, чтобы<br/>открыть все карточки</span>
                </div>
                <div className={style.openEduc + " " + (step === 4 ? "" : style.opacity)}>
                <div className={style.wrapperArrowEducImg}>
                        <img src="/images/cards/arrow-education.svg" alt="arrow" />
                    </div>
                    <span className={style.spanEduc }>Открывай все карточки,<br/>проверяй свою интуицию<br/>и вдохновляйся историями героев,<br/>чтобы принять участие в розыгрыше!</span>
                </div>

                    </div>

                </div>
              
        </div>}
        {isEducation && isTouch && <div className={style.education + " " + style.container+ " "+ (isScreen4 ? style.screen4:"") +" " +(isLoader ? style.opacityLoader : style.opacityNoLoader)} onClick={changeEducationMobile}>
        <div className={style.wrapper}>
                    <div className={style.header}>
                        <div className={style.header__img}>
                            <img src="images/screen4/logo.png" alt="logo" className={style.logoM} />
                            <img src="images/screen4/logoDesktop.png" alt="logo" className={style.logoD} />

                        </div>
                        <div className={style.header__educ + " " + ((step === 2) ? "" : style.opacity)}>
                        <div className={style.header__counter}>
                            <span>{userAnswer.filter((item)=>item).length}</span>
                            <span>/</span>
                            <span>9</span>

                        </div>
                        <div className={style.descHeader }>
                                  <span className={style.spanEduc}>Счётчик показывает,<br/>сколько карточек<br/>было открыто</span>
                                    <div className={style.descCard2__wrapperImg}>
                                        <img src="/images/cards/desc-card2.svg" alt="desc" className={style.educImgD} />
                                        <img src="/images/cards/desc-card2M.svg" alt="desc" className={style.educImgM} />
                                    </div>    
                            </div>
                        </div>

                    </div>
                    <div className={style.cards + " " + style.cardsEducation }>
                        {data.slice(0,1).map((item, index) =>
                            <div className={style.cards__item + " " + (step > 2 ? style.opacity : "")} key={index}>
                               <div className={style.cards__item + " " + ( (indexAnimationCard === index && isAnimation || (userAnswer[index])) ? style.animation : "")} key={index}>
                                <div className={style.card__front + " " + style.card}>
                                    <Card item={item} screen4={true} isUser={false} ></Card>
                                </div>
                                <div className={style.card__back + " " + style.card}>
                                    <Card item={item} screen4={true} isUser={true}></Card>
                                </div>

                                    <div className={style.descCard1 +" "+ (step === 0 ? "" : style.opacity)} >
                                        <div className={style.descCard1__wrapperImg}>
                                        <img src="/images/cards/desc-card1.svg" alt="desc" className={style.educImgD} />
                                        <img src="/images/cards/desc-card1M.svg" alt="desc" className={style.educImgM} />
                                        </div>
                                        
                                        <span className={style.spanEduc} ref={refDescCard2}>Нажми на карточку, которую хочешь прочитать</span>

                                    </div>
                                    <div className={style.descCard1 + " " + style.descCard1M +" "+ (step === 1  ? "" : style.opacity)} >
                                        <div className={style.descCard1__wrapperImg}>
                                        <img src="/images/cards/desc-card1.svg" alt="desc" className={style.educImgD} />
                                        <img src="/images/cards/desc-card1M.svg" alt="desc" className={style.educImgM} />
                                        </div>
                                        
                                        <span className={style.spanEduc}>Читай описание и выбирай ответ</span>

                                    </div>
                                </div>
                            </div>)}

                <div className={style.arrowEducation  + " " + (step === 3 ? "" : style.opacity)} ref={refArrowEducation}>
                    <div className={style.wrapperArrowEducImg}>
                        <img src="/images/cards/arrow-education.svg" alt="arrow" />
                    </div>
                    <span className={style.spanEduc}>Листай вниз, чтобы<br/>открыть все карточки</span>
                </div>
                
                <div className={style.openEduc  + " " + (step === 4 ? "" : style.opacity)}>
                <div className={style.wrapperArrowEducImg}>
                        <img src="/images/cards/arrow-education.svg" alt="arrow" />
                    </div>
                    <span className={style.spanEduc }>Открывай все карточки,<br/>проверяй свою интуицию<br/>и вдохновляйся историями героев,<br/>чтобы принять участие в розыгрыше!</span>

                    </div>
                    </div>

                </div>
              
        </div>}

            <div className={style.container + " " + (isEducation ? style.hiddenScroll : "")} ref={ refWrapper}>

                <div className={style.wrapper}>
                    <div className={style.header}>
                        <div className={style.lampLogo}>
                            <img src="./images/lamp.svg" alt="lamp" />
                        </div>
                        <div className={style.header__img}>
                            <div className={style.waterLogo}>
                                <img src="./images/sceen2/water-btn.png" alt="water" />
                            </div>
                            <img src="images/screen4/logo.png" alt="logo" className={style.logoM} />
                            <img src="images/screen4/logoDesktop.png" alt="logo" className={style.logoD} />

                        </div>
                        <div className={style.header__counter}>
                            <span>{userAnswer.filter((item)=>item).length}</span>
                            <span>/</span>
                            <span>9</span>
                        </div>
                    </div>
                    <div className={style.cards}>
                        {data.map((item, index) =>
                            <div className={style.cards__item + " " + ( (indexAnimationCard === index && isAnimation || (userAnswer[index])) ? style.animation : "")} key={index} onClick={()=> clickCard(index)}>
                                <div className={style.card__front + " " + style.card}>
                                    <Card isUserAnswer={userAnswer[index]} item={item} isOdd={index % 2 === 0} screen4={true} isUser={false}></Card>
                                </div>
                                <div className={style.card__back + " " + style.card}>
                                    <Card isUserAnswer={userAnswer[index]} item={item} isOdd={index % 2 === 0} screen4={true} isUser={true}></Card>
                                </div>
                            </div>)}



                    </div>
                    <div className={style.btm + " " + ((userAnswer.filter((item)=>item).length === 9) ? style.btmWin: "") + " " + (isTextBtm ? style.btmText : "")}>
                        <button className={"btn " + style.btn} onClick={clickBtn}>розыгрыш</button>
                        <p>Для того, чтобы участвовать в розыгрыше, нужно открыть еще {getLabelBtm()}</p>
                    </div>

                </div>
                { <div className={style.lampCards}>
                    <div className={style.lampCards__wrapper}>

                        <img src="/images/screen4/lamp-right.svg" alt="lamp" className={style.lampCardsImg} />
                        <img src="/images/screen4/bg-calc.svg" alt="calc" className={style.caclCardsImg} />
                        <img src="/images/screen4/bg-head.svg" alt="calc" className={style.headCardsImg} />
                        <img src="/images/screen4/bg-book.svg" alt="calc" className={style.bookCardsImg} />
                        <img src="./images/screen4/water-purple.png" alt="water-purple" className={style.waterCardImg} />
                        {/* <img src="/images/screen4/bg-calc.svg" alt="calc" className={style.calcImg} /> */}
                    </div>

                </div>}

                <div className={style.lampPurpleCards}>
                    <div className={style.lampPurpleCards__wrapper}>
                        <img src="./images/screen4/lamp-purple.svg" alt="lamp-purple" className={style.lampImg} />
                        <img src="./images/screen4/bg-candy.svg" alt="candy" className={style.candyImg} />
                        <img src="./images/screen4/water-purple.png" alt="water-purple" className={style.waterImg} />
                    </div>

                </div>
                <div className={style.lampBtm}>
                    <div className={style.lampBtm__wrapper}>
                        <img src="./images/lamp.svg" alt="lamp" className={style.lampImg} />
                        <img src="./images/screen4/water-purple.png" alt="water-purple" className={style.water1lampBtmImg} />
                        <img src="./images/screen4/water-purple.png" alt="water-purple" className={style.water2lampBtmImg} />

                    </div>

                </div>


            </div>
        </>


    );
}

export default Screen4;