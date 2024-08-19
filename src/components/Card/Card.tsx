import style from "./Card.module.scss"

function Card() {
    return (
        <div className={style.card}>
            <div className={style.card__photo}>
                <img src="/images/cards/1.png" alt="test" />

            </div>
            <div className={style.card__info + " " + style.info}>
                <div className={style.info__title}>
                    <span className={style.info__name}>Ксюша</span>
                    <span className={style.info__age}>23 года</span>
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
        </div>
    );
}

export default Card;