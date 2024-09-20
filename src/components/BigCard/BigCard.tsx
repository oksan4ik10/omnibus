import style from "./BigCard.module.scss"
import { ICard } from "../../models/type";


interface IProps{
    card: ICard;
}

function BigCard(props: IProps) {
    const {card} = props;
    console.log(card);
    
    return (

            <div className={style.card}>
            
            </div>
    );
}

export default BigCard;