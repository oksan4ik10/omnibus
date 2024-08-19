import style from "./Screen2.module.scss"
import Card from "../../components/Card/Card";

interface IProps {
    screen: number;
}
function Screen2(props: IProps) {
    const { screen } = props;
    console.log(screen);

    return (
        <div className={style.container + ` ${style['screen' + String(screen)]}`}>
            <div className={style.ribbon}>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
                <span>подарки</span>
            </div>
            <div className={style.line}>
                <img src="images/sceen2/line.svg" alt="line" />
            </div>
            <div className={style.card}>

                <div className={style.card__item}>
                    <div className={style.lamp}>
                        <img src="./images/lamp.svg" alt="lamp" />
                    </div>
                    <div className={style.man}>
                        <Card></Card>
                    </div>
                    <div className={style.bookImg}>
                        <img src="images/sceen2/book.svg" alt="book" />
                    </div>
                    <div className={style.calcImg}>
                        <img src="images/sceen2/calc.svg" alt="calc" />
                    </div>
                </div>
                <div className={style.card__text}>
                    Сможешь угадать, кто из этих людей работает по специальности, а кто — нет? Среди участников, прошедших все карточки, мы разыграем призы!
                </div>


            </div>
            <div className={style.presents}>
                <div className={style.presents__img}>
                    <img src="images/sceen2/sertificat.png" alt="" />
                </div>
                <div className={style.presents__list}>
                    <div className={style.presents__title}>
                        <h2>Призы от компаний</h2>
                        <ul className={style.list}>
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                            <li><span>150</span> карьерные консультации и 5 подписок на MyBook от «Технологии Доверия».</li>
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                        </ul>
                    </div >
                    <button className={"btn " + style.btn}>
                        играть
                    </button>
                </div >

            </div >


        </div >
    );
}

export default Screen2;