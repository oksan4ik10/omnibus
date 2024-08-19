import style from "./Screen2.module.scss"
import Card from "../../components/Card/Card";

import Presents from "../../components/Presents/Presents";

interface IProps {
    screen: number;
    isMobile: boolean;
}
function Screen2(props: IProps) {
    const { screen, isMobile } = props;
    return (
        <div className={style.container + ` ${style['screen' + String(screen)]}`}>
            <div className={style.waterTop}>
                <img src="./images/sceen2/water-top.png" alt="water" />
            </div>
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
            {screen === 2 && !isMobile && <Presents></Presents>}



        </div >
    );
}

export default Screen2;