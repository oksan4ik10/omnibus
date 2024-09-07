import style from "./Screen2.module.scss"
import Card from "../../components/Card/Card";

import Presents from "../../components/Presents/Presents";

interface IProps {
    screen: number;
    isMobile: boolean;
    changeSlide: () => void;
    startGame: () => void;
}
function Screen2(props: IProps) {

    const { screen, isMobile, changeSlide, startGame } = props;


    const cardInfo=    {
        "name": "Данил",
        "age": "23 года",
        "work": "Сбер",
        "workDesc": "Старший бренд-менеджер в&nbsp;департаменте маркетинга в&nbsp;группе по&nbsp;управлению брендом Flash Up",
        "cardDesc": "На вопрос родственников «чем ты занимаешься?» отвечаю: делаю так, чтобы безалкогольные бренды росли и приносили хорошие деньги нашей компании:) Я управляю всеми аспектами бренда: от&nbsp;стратегии до&nbsp;упаковки. Результаты своей работы вижу на&nbsp;полках магазина — каждый раз долго любуюсь какой‑нибудь бутылкой кваса, зная, что она когда‑то была у&nbsp;меня в&nbsp;разработке в&nbsp;ноутбуке. А теперь красуется здесь!",
        "answerRight": "left",
        "colorBtn": "#08A652",
        "colorJob": "#08A652",
        "bgPhoto": "",
        "answerText": "<p>Данил учился на&nbsp;менеджера в&nbsp;СПБГЭУ. Ещё в&nbsp;старшей школе видел себя бизнесменом — стремился понять, как работает коммерция, какие существуют бизнес-процессы. В&nbsp;вузе зря времени не&nbsp;терял — участвовал в&nbsp;кейс-чемпионатах, а&nbsp;после выпуска активно искал работу. На&nbsp;дне карьеры узнал о&nbsp;программе «Звезды Балтики», пообщался с&nbsp;эйчаром, попал на&nbsp;первый собес и школьная мечта сбылась! На&nbsp;работе Данил чувствует себя предпринимателем, только управляет не&nbsp;компаний, а&nbsp;отдельным брендом Балтики.</p><p>Свою профессию Данил ценит за&nbsp;динамику и возможность влиять на продукт. А ещё любит коллег, офис со&nbsp;спортзалом, уютной столовой и атмосферу драйва, когда вокруг постоянный штурм идей.</p><p>Чтобы быть предпринимателем не&nbsp;обязательно открывать своё ООО, приходи в&nbsp;Балтику и отвечай за&nbsp;бренды, знакомые каждому)</p>",
        "answerRectColorSuccess": "#08A652",
        "answerRectColorError": "yellow",
        "answerRectColor": "red",
        "answerLogoHeight": "48px",
        "answerLogoMobileHeight": "25px"
    }
    return (
        <div className={style.container + ` ${style['screen' + String(screen)]}` + " " + (isMobile ? style.mobile : "")}>
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
                        <div className={style.btnImg}>
                            <img src="images/sceen2/btn-card.png" alt="calc" />
                        </div>
                        <Card index={1} item={cardInfo}></Card>
                    </div>
                    <div className={style.bookImg}>
                        <img src="images/sceen2/book.svg" alt="book" />
                    </div>
                    <div className={style.calcImg}>
                        <img src="images/sceen2/calc.svg" alt="calc" />
                    </div>
                    {isMobile && <div className={style.waterPresents}>
                        <img src="./images/sceen2/water-btn.png" alt="water" />
                    </div>}
                </div>
                <div className={style.card__text}>
                    Сможешь угадать, кто из этих людей работает по специальности, а кто — нет? Среди участников, прошедших все карточки, мы разыграем призы!
                </div>


            </div>
            {isMobile && <div className={style.waterBtm}>
                <img src="./images/screen1/water.png" alt="water" />
            </div>}
            {isMobile && <button onClick={changeSlide} className={style.btn + " btn"}>Дальше</button>}
            {screen === 2 && !isMobile && <Presents startGame={startGame}></Presents>}



        </div >
    );
}

export default Screen2;