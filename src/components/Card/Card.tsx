import style from "./Card.module.scss"

interface IProps {
    screen4?: boolean;
    isUser?: boolean;
    isOdd?: boolean;
}
function Card(props: IProps) {
    const { screen4, isUser, isOdd } = props;
    return (
        <div className={style.wrapper + " " + (isUser ? style.userClick : "") + " " + (isOdd ? style.odd : "")}>
            {!screen4 && <div className={style.btnImg}>
                <img src="images/sceen2/btn-card.png" alt="calc" />
            </div>}
            <div className={style.card}>

                <div className={style.card__photo}>
                    <img src="/images/cards/1.png" alt="test" />

                </div>
                <div className={style.card__info + " " + style.info}>
                    <div className={style.info__titleLogo}>
                        <div className={style.info__title}>
                            <span className={style.info__name}>Ксюша</span>
                            <span className={style.info__age}>23 года</span>
                        </div>
                        {isUser && <div className={style.info__logo}>
                            <img src="images/cards/company/1.png" alt="sber" />
                        </div>}
                    </div>

                    <div className={style.info__job}>
                        <span>FutureToday </span>
                        <span>Старший продюссер спецпроектов</span>
                    </div>
                    <div className={style.info__text}>
                        <span>Дима отвечает за коммуникацию с клиентами, за их удержание и развитие отношений с ними. Он — связующее звено между клиентами и компанией.</span>
                    </div>
                    <div className={style.water}>
                        <img src="images/cards/water.svg" alt="water" />
                    </div>
                </div>
                {isUser && <div className={style.card__btns}>
                    <span>По специальности</span>
                    <span>Не по специальности</span>
                </div>}
            </div>
        </div>

    );
}

export default Card;