


import Card from "../../components/Card/Card";
import style from "./Screen4.module.scss"
import { disablePageScroll } from 'scroll-lock';
import data from "../../data/cards.json"
import { useState } from "react";

interface IProps {
    viewForm: () => void;
    isScreen4: boolean;
    openAnswer: (index: number, isWin: boolean, isDoubleClick: boolean) => void;
}
function Screen4(props: IProps) {
    const { openAnswer, viewForm, isScreen4 } = props;

    const clickBtn = () => {
        viewForm();
        disablePageScroll();

    }
    const [userAnswer, setUserAnswer] = useState<boolean[]>([]);
    const clickCard = (index: number) => {
        
        openAnswer(index, false, true);
    }
    const clickAnswerUser = (e:React.MouseEvent<HTMLSpanElement>,index: number, answer: string) => {
        if (userAnswer[index]) return;
        e.stopPropagation();
        userAnswer[index] = true;
        setUserAnswer(userAnswer);
        openAnswer(index, data[index].answerRight === answer, false);

    }
    const [isAnimation, setIsAnimation] = useState(false);
    const [indexAnimationCard, setIndexAnimationCard] = useState(-1);
    const transformCard = (index: number)=> {
        if (userAnswer[index]) {
            clickCard(index);
            return
        }
        if(index === indexAnimationCard){
            setIsAnimation(!isAnimation);
            return
        }
        setIsAnimation(true);
        setIndexAnimationCard(index)
       
    }

    return (
        <>
        <div className={style.education + " " + style.container}>
        <div className={style.wrapper}>
                    <div className={style.header}>
                        <div className={style.header__img}>
                            <img src="images/screen4/logo.png" alt="logo" className={style.logoM} />
                            <img src="images/screen4/logoDesktop.png" alt="logo" className={style.logoD} />

                        </div>
                        <div className={style.header__educ}>
                        <div className={style.header__counter}>
                            <span>{userAnswer.filter((item)=>item).length}</span>
                            <span>/</span>
                            <span>10</span>

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
                            <div className={style.cards__item + " " + style.cardEducation} key={index}>
                                {index===0 && <div className={style.card__front + " " + style.card + " " + style.frontStop}>
                                    <Card index={index} item={item} isOdd={index % 2 === 0} screen4={true} isUser={false}></Card>
                                    <div className={style.descCard1}>
                                        <div className={style.descCard1__wrapperImg}>
                                        <img src="/images/cards/desc-card1.svg" alt="desc" className={style.educImgD} />
                                        <img src="/images/cards/desc-card1M.svg" alt="desc" className={style.educImgM} />
                                        </div>
                                        
                                        <span className={style.spanEduc}>Нажми на карточку, которую хочешь прочитать</span>

                                    </div>
                                    <div className={style.descCard1 + " " + style.descCard1M}>
                                        <div className={style.descCard1__wrapperImg}>
                                        <img src="/images/cards/desc-card1.svg" alt="desc" className={style.educImgD} />
                                        <img src="/images/cards/desc-card1M.svg" alt="desc" className={style.educImgM} />
                                        </div>
                                        
                                        <span className={style.spanEduc}>Читай описание и выбирай ответ</span>

                                    </div>
                                </div>}
                                {index===1 && <div className={style.card__back + " " + style.card + " " + style.backFront}>
                                  <Card index={index} item={item} isOdd={index % 2 === 0} screen4={true} isUser={true} clickAnswerUser={(e: React.MouseEvent<HTMLSpanElement>, answer: string) => clickAnswerUser(e, index, answer)}></Card>
                                  <div className={style.descCard2}>
                                  <span className={style.spanEduc}>Читай описание<br/>и выбирай ответ</span>
                                        <div className={style.descCard2__wrapperImg}>
                                        <img src="/images/cards/desc-card2.svg" alt="desc" className={style.educImgD}/>
                                        </div>
                                        
                                      

                                    </div>
                                </div>}




                            </div>)}

                            <div className={style.arrowEducation}>
                    <div className={style.wrapperArrowEducImg}>
                        <img src="/images/cards/arrow-education.svg" alt="arrow" />
                    </div>
                    <span className={style.spanEduc}>Листай вниз, чтобы<br/>открыть все карточки</span>
                </div>

                    </div>

                </div>
              
        </div>

            <div className={style.container}>

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
                            <span>10</span>
                        </div>
                    </div>
                    <div className={style.cards}>
                        {data.map((item, index) =>
                            <div className={style.cards__item + " " + ( (indexAnimationCard === index && isAnimation || (userAnswer[index])) ? style.animation : "")} key={index} onClick={()=>transformCard(index)}>
                                <div className={style.card__front + " " + style.card}>
                                    <Card index={index} item={item} isOdd={index % 2 === 0} screen4={true} isUser={false}></Card>
                                </div>
                                <div className={style.card__back + " " + style.card}>
                                    <Card index={index} item={item} isOdd={index % 2 === 0} screen4={true} isUser={true} clickAnswerUser={(e: React.MouseEvent<HTMLSpanElement>, answer: string) => clickAnswerUser(e, index, answer)}></Card>
                                </div>




                            </div>)}



                    </div>
                    <div className={style.btm}>
                        <button className={"btn " + style.btn} onClick={clickBtn}>розыгрыш</button>
                        <p>Для того, чтобы участвовать в розыгрыше, нужно открыть еще {10 - userAnswer.filter((item)=>item).length} карточек</p>
                    </div>

                </div>
                {isScreen4 && <div className={style.lampCards}>
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