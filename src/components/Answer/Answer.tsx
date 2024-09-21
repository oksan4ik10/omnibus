import { CSSProperties, useEffect, useState } from "react";
import style from "./Answer.module.scss"
import { ICard } from "../../models/type";
import BigCard from "../BigCard/BigCard";
interface IProps {
    closeAnswer: () => void;
    indexAnswer: number;
    dataCards: ICard[]
    clickCardUser: (index: number)=> void
    userCheck: boolean;
}
function Answer(props: IProps) {
    const {dataCards: data, closeAnswer, indexAnswer, userCheck, clickCardUser} = props;

    
    const [isWin, setIsWin] = useState(false);
    const [dataAnswer, setDataAnswer] = useState(data[0])

    const backClick = ()=> {
        closeAnswer()
    }

    const [isDoubleClick, setIsDoubleClick] = useState(false);
    const [isBigCard, setIsBigCard] = useState(true)
    console.log(isBigCard);
    
    const [isCheckCard, setIsCheckCard] = useState(false);
    const clickUser = (win: boolean)=> {
        setTimeout(()=> {
            clickCardUser(indexAnswer)
        }, 1020)
       
        setIsCheckCard(true)
        setIsBigCard(false)
        setIsWin(win)
    }
    useEffect(()=> {
        setIsDoubleClick(userCheck)
        
        
    }, [])


    useEffect(()=> {
        setDataAnswer(data[indexAnswer])
    }, [])


    return (
        <div className={style.container + " " + (isDoubleClick?style.doubleClick : "")} style={{ "--logoHeight": dataAnswer.answerLogoHeight, "--color-job": dataAnswer.colorJob, "--rect-success": dataAnswer.answerRectColorSuccess,  "--rect-error": dataAnswer.answerRectColorError, "--rect-answer": dataAnswer.answerRectColor, "--logoMobileHeight": dataAnswer.answerLogoMobileHeight, "--fontSize": dataAnswer.fontSizeAnswer?dataAnswer.fontSizeAnswer : "19px"} as CSSProperties}>
            <div className={style.wrapper}>
            <div className={style.wrapperCard + " " + ((isCheckCard && !userCheck) ? style.check : "") + " " + (userCheck ? style.win : "")} >
                <div className={style.item__back + " " + style.item}>

                <div className={style.card}>
                   {!isDoubleClick && <div className={style.card__answer}>
                       {isWin&& <img src="/images/cards/success.svg" alt="success" />}
                       {!isWin && <img src="/images/cards/error.svg" alt="error" />}
                    </div>}
                    {isDoubleClick && <div className={style.card__logo}>
                    <img src={`/images/cards/company/${dataAnswer.indexPhoto}.png`} alt="test" />
                    </div>}
                    <div className={style.close} onClick={backClick}>
                        <img src="/images/cards/close.svg" alt="close" />
                    </div>


                    <div className={style.card__info + " " + style.info}>
                        <div className={style.infoWrapper}>
                            <div className={style.info__titleLogo}>
                                <div className={style.info__title}>
                                    <span className={style.info__name}>{dataAnswer.name}</span>
                                    <span className={style.info__age}>{dataAnswer.age}</span>
                                </div>

                            </div>
                           {isDoubleClick && <div className={style.info__job}>
                           <span dangerouslySetInnerHTML={{ __html: dataAnswer.work }} />
                           <span dangerouslySetInnerHTML={{ __html: dataAnswer.workDesc }} />
                            </div>}

                        </div>

                        <div className={style.info__wrapperText}>
                            <div className={style.info__text} dangerouslySetInnerHTML={{ __html: dataAnswer.answerText }}></div>
                        </div>

                    </div>
                    <div className={style.card__arrow} onClick={backClick}>
                        <div className={style.card__arrowWrapper}>
                        <img src="/images/cards/arrow.svg" alt="arrow" />
                        </div>
                      

                    </div>
                    <div className={style.rect + " " + (isDoubleClick ? style.answer : isWin ? style.success: style.error)}>

                    </div>
                </div>
                </div>
                <div className={style.item__front + " " + style.item}>
                    <BigCard clickUser={clickUser} card={dataAnswer}></BigCard>
                </div> 
            </div>
              </div>  

        </div>

    );
}

export default Answer;