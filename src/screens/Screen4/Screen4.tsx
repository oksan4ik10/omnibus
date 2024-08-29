import Card from "../../components/Card/Card";
import style from "./Screen4.module.scss"
function Screen4() {
    return (
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
                        <img src="images/screen4/logoDesktop.png" alt="logo" />

                    </div>
                    <div className={style.header__counter}>
                        <span>0</span>
                        <span>/</span>
                        <span>15</span>
                    </div>
                </div>
                <div className={style.cards}>

                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isOdd={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isOdd={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isOdd={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isOdd={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isOdd={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isOdd={true} isUser={true}></Card>
                        </div>




                    </div>
                    <div className={style.cards__item}>
                        <div className={style.card__front + " " + style.card}>
                            <Card screen4={true} isUser={false}></Card>
                        </div>
                        <div className={style.card__back + " " + style.card}>
                            <Card screen4={true} isUser={true}></Card>
                        </div>




                    </div>


                </div>
                <div className={style.btm}>
                    <button className={"btn " + style.btn}>розыгрыш</button>
                    <p>Для того, чтобы участвовать в розыгрыше, нужно открыть еще Х карточек</p>
                </div>

            </div>
            <div className={style.lampCards}>
                <div className={style.lampCards__wrapper}>

                    <img src="/images/lamp.svg" alt="lamp" className={style.lampCardsImg} />
                    {/* <img src="/images/screen4/bg-calc.svg" alt="calc" className={style.calcImg} /> */}
                </div>

            </div>
            <div className={style.lampBtm}>
                <div className={style.lampBtm__wrapper}>
                    <img src="./images/lamp.svg" alt="lamp" className={style.lampImg} />

                </div>

            </div>
            <div className={style.lampPurpleCards}>
                <div className={style.lampPurpleCards__wrapper}>
                    <img src="./images/screen4/lamp-purple.svg" alt="lamp-purple" className={style.lampImg} />
                    <img src="./images/screen4/bg-candy.svg" alt="candy" className={style.candyImg} />
                    <img src="./images/screen4/water-purple.png" alt="water-purple" className={style.waterImg} />
                </div>

            </div>
        </div>
    );
}

export default Screen4;