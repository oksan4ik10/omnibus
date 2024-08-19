import style from "./Screen2.module.scss"
import Card from "../../components/Card/Card";
function Screen2() {
    return (
        <div className={style.container}>
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
                    <div className={style.man}>
                        <Card></Card>
                    </div>
                    <div className={style.bookImg}>
                        <img src="images/sceen2/book.svg" alt="book" />
                    </div>
                    <div className={style.calcImg}>
                        <img src="images/sceen2/calc.svg" alt="calc" />
                    </div>
                    {/* <div className={style.btnImg}>
                        <img src="images/sceen2/btn-card.png" alt="calc" />
                    </div> */}

                </div>
                <div className={style.card__text}>
                    Сможешь угадать, кто из этих людей работает по специальности, а кто — нет? Среди участников, прошедших все карточки, мы разыграем призы!
                </div>


            </div>
            <div className="presents">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, temporibus eveniet? Magni maxime eaque officia, voluptate eum nihil commodi saepe maiores? Nisi vero magnam atque suscipit commodi ea esse quasi eius dolorum vel praesentium voluptatibus ipsa corporis iusto inventore ducimus sint in, vitae quod. Odit, iusto, quod voluptate ea natus quibusdam nam error quaerat recusandae illo expedita assumenda magni cupiditate? Architecto labore aspernatur debitis, mollitia reprehenderit illum iste possimus dolorem error delectus. Deserunt inventore commodi dolores iure aspernatur facere iusto numquam sed ab cum neque saepe accusantium debitis veniam necessitatibus earum quae ipsum obcaecati dolorem, porro facilis magnam. Sed, ratione.

            </div>


        </div>
    );
}

export default Screen2;