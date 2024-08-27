import Card from "../../components/Card/Card";
import style from "./Screen4.module.scss"
function Screen4() {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <div className={style.header__img}>
                        <img src="images/screen4/logo.png" alt="logo" />
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
                </div>
                <div className={style.btm}>
                    <button className={"btn " + style.btn}>розыгрыш</button>
                    <p>Для того, чтобы участвовать в розыгрыше, нужно открыть еще Х карточек</p>
                </div>

            </div>

        </div>
    );
}

export default Screen4;