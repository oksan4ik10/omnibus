import { ICard } from "../../models/type";
import style from "./Card.module.scss"
import { CSSProperties } from "react";

interface IProps {
    screen4?: boolean;
    isUser?: boolean;
    isOdd?: boolean;
    item: ICard;
    index: number;
}
function Card(props: IProps) {
    const { screen4, isUser, isOdd, item, index } = props;

    return (
        <div className={style.wrapper + " " + (isUser ? style.userClick : "") + " " + (isOdd ? style.odd : "") + " " + (!screen4 ? style.pBtm : "") + " " + (item.bgPhoto ? "" : style.bgGradient)} style={{ "--colorBtn": item.colorBtn, "--color-job": item.colorJob, "--color-bg": item.bgPhoto } as CSSProperties}>
            <div className={style.card}>

                <div className={style.card__photo}>
                    <img src={`/images/cards/${index}.png`} alt="test" />

                </div>
                <div className={style.card__info + " " + style.info}>
                    <div className={style.info__titleLogo}>
                        <div className={style.info__title}>
                            <span className={style.info__name}>{item.name}</span>
                            <span className={style.info__age}>{item.age}</span>
                        </div>
                        {isUser && <div className={style.info__logo}>
                            <img src={`/images/cards/company/${index}.png`} alt="sber" />
                        </div>}
                    </div>

                    <div className={style.info__job}>
                        <span dangerouslySetInnerHTML={{ __html: item.work }} />
                        <span dangerouslySetInnerHTML={{ __html: item.workDesc }} />
                    </div>
                    <div className={style.info__text}>
                        <span dangerouslySetInnerHTML={{ __html: item.cardDesc }} />
                    </div>
                    <div className={style.water}>
                        <img src="images/cards/water.svg" alt="water" />
                    </div>
                </div>
                {(isUser || !screen4) && <div className={style.card__btns}>
                    <span>По специальности</span>
                    <span>Не по специальности</span>
                </div>}
            </div>
        </div>

    );
}

export default Card;