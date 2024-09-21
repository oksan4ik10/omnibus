import style from "./BigCard.module.scss"
import { ICard } from "../../models/type";
import { CSSProperties } from "react";


interface IProps{
    card: ICard;
    clickUser: (win: boolean)=>void;
}

function BigCard(props: IProps) {
    const {card, clickUser} = props;
    const clickAnswer = (answer: "left"| "right")=> {
        clickUser(answer === card.answerRight);
    }
    return (
        <div className={style.wrapper + " "+ (card.bgPhoto ? "" : style.bgGradient)} style={{ "--colorBtn": card.colorBtn, "--color-job": card.colorJob, "--color-bg": card.bgPhoto, "--heightPhoto":card.heightLogo ? card.heightLogo: "27px",  "--heightLogoMobile":card.heightLogoMobile} as CSSProperties} >
            <div className={style.card}>

                <div className={style.card__photo}>
                    <img src={`/images/cards/${card.indexPhoto}.png`} alt="test" />

                </div>

                <div className={style.card__info + " " + style.info}>
                    <div className={style.info__titleLogo}>
                        <div className={style.info__title}>
                            <span className={style.info__name}>{card.name}</span>
                            <span className={style.info__age}>{card.age}</span>
                        </div>
                        <div className={style.info__logo}>
                            <img src={`/images/cards/company/${card.indexPhoto}.png`} alt="sber" />
                        </div>
                    </div>

                    <div className={style.info__job}>
                        <span dangerouslySetInnerHTML={{ __html: card.work }} />
                        <span dangerouslySetInnerHTML={{ __html: card.workDesc }} />
                    </div>
                    <div className={style.info__text}>
                        <div className={style.span} dangerouslySetInnerHTML={{ __html: card.cardDesc }} />
                    </div>

                </div>
                <div className={style.card__btns + " "}>
                    <div onClick={()=> clickAnswer("right")}>
                        <span>По специальности</span></div>
                        <div onClick={()=> clickAnswer("left")}>
                        <span>Не по специальности</span></div>
           
                </div>
            </div>

        </div>
    );
}

export default BigCard;