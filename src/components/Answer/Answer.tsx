import { CSSProperties, useEffect, useState } from "react";
import style from "./Answer.module.scss"
import { ICard } from "../../models/type";
interface IProps {
    closeAnswer: () => void;
    indexAnswer: number;
    isDoubleClick: boolean;
    isWin: boolean;
    setIsStepMobile: ()=> void
    dataCards: ICard[]
}
function Answer(props: IProps) {
    const {dataCards: data, closeAnswer, indexAnswer, isWin, isDoubleClick, setIsStepMobile} = props;
    const [dataAnswer, setDataAnswer] = useState(data[0])

    const backClick = ()=> {
        setIsStepMobile()
        closeAnswer()
    }
    useEffect(()=> {
        setDataAnswer(data[indexAnswer])
    }, [])


    return (
        <div className={style.container + " " + (isDoubleClick?style.doubleClick : "")} style={{ "--logoHeight": dataAnswer.answerLogoHeight, "--color-job": dataAnswer.colorJob, "--rect-success": dataAnswer.answerRectColorSuccess,  "--rect-error": dataAnswer.answerRectColorError, "--rect-answer": dataAnswer.answerRectColor, "--logoMobileHeight": dataAnswer.answerLogoMobileHeight} as CSSProperties}>
            <div className={style.wrapper}>
                <div className={style.card}>
                   {!isDoubleClick && <div className={style.card__answer}>
                       {isWin&& <img src="/images/cards/success.svg" alt="success" />}
                       {!isWin && <img src="/images/cards/error.svg" alt="error" />}
                    </div>}
                    {isDoubleClick && <div className={style.card__logo}>
                    <img src={`/images/cards/company/${dataAnswer.indexPhoto}.png`} alt="test" />
                    </div>}


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
        </div>

    );
}

export default Answer;