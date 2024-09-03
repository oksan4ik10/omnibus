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
                        <span>Старший бренд-менеджер в департаменте маркетинга в группе по управлению брендом Flash Up</span>
                    </div>
                    <div className={style.info__text}>
                        <span>На вопрос родственников «чем ты занимаешься?» отвечаю: делаю так, чтобы безалкогольные бренды росли и приносили хорошие деньги нашей компании:) Я управляю всеми аспектами бренда: от стратегии до упаковки. Результаты своей работы вижу на полках магазина — каждый раз долго любуюсь какой‑нибудь бутылкой кваса, зная, что она когда‑то была у меня в разработке в ноутбуке. А теперь красуется здесь!</span>
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