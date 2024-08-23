import Card from "../../components/Card/Card";
import style from "./Screen4.module.scss"
function Screen4() {
    return (
        <div className={style.container}>
            <div className={style.cards}>
                <div className={style.cards__item}>
                    <Card screen4={true} isUser={true}></Card>
                </div>
            </div>

        </div>
    );
}

export default Screen4;