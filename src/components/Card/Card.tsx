import { ICard } from "../../models/type";
import style from "./Card.module.scss"
import { CSSProperties, useState } from "react";

interface IProps {
    screen4?: boolean;
    isUser?: boolean;
    isOdd?: boolean;
    item: ICard;
    isEduc?: boolean;
    clickAnswerUser?: (e: React.MouseEvent<HTMLSpanElement>, answer: string) => void;
}
function Card(props: IProps) {
    const { screen4, isUser, isOdd, item, clickAnswerUser, isEduc} = props;

    const [userAnswer, setUserAnswer] = useState("");
    const click = (e:  React.MouseEvent<HTMLSpanElement>, answer: string) => {
        if (!clickAnswerUser) return;
        setUserAnswer(answer)
        clickAnswerUser(e, answer)
    }

    return (
        <div className={style.wrapper + " " + (isUser ? style.userClick : "") + " " + (isOdd ? style.odd : "") + " " + (!screen4 ? style.pBtm : style.screen4) + " " + (item.bgPhoto ? "" : style.bgGradient) + " " + (userAnswer ? style.stopAnimation : "") + " " + (isEduc ? style.educ : "")} style={{ "--colorBtn": item.colorBtn, "--color-job": item.colorJob, "--color-bg": item.bgPhoto, "--heightPhoto":item.heightLogo ? item.heightLogo: "27px",  "--heightLogoMobile":item.heightLogoMobile} as CSSProperties}>
            <div className={style.card}>

                <div className={style.card__photo}>
                    <img src={`/images/cards/${item.indexPhoto}.png`} alt="test" />

                </div>

                <div className={style.card__info + " " + style.info}>
                    <div className={style.info__titleLogo}>
                        <div className={style.info__title}>
                            <span className={style.info__name}>{item.name}</span>
                            <span className={style.info__age}>{item.age}</span>
                        </div>
                        {isUser && <div className={style.info__logo}>
                            <img src={`/images/cards/company/${item.indexPhoto}.png`} alt="sber" />
                        </div>}
                    </div>

                    <div className={style.info__job}>
                        <span dangerouslySetInnerHTML={{ __html: item.work }} />
                        <span dangerouslySetInnerHTML={{ __html: item.workDesc }} />
                    </div>
                    <div className={style.info__text}>
                        <span dangerouslySetInnerHTML={{ __html: item.cardDesc }} />
                    </div>

                </div>
                {(isUser || !screen4) && <div className={style.card__btns + " " + (userAnswer === "right"? style.right : (userAnswer === "left"? style.left : ""))}>
                    <span onClick={(e: React.MouseEvent<HTMLSpanElement>) => click(e, 'right')}>По специальности</span>
                    <span onClick={(e: React.MouseEvent<HTMLSpanElement>) => click(e, 'left')}>Не по специальности</span>
                </div>}
            </div>
            {/* <div className={style.water}>
                        <img src="images/cards/water.svg" alt="water" />
                    </div> */}
        </div>

    );
}

export default Card;