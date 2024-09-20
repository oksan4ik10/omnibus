import style from "./BigCard.module.scss"
import { ICard } from "../../models/type";


interface IProps{
    card: ICard;
    clickUser: (win: boolean)=>void;
}

function BigCard(props: IProps) {
    const {card, clickUser} = props;
    console.log(card);
    
    return (

            <div className={style.card} onClick={()=>clickUser(true)}>
            
            </div>
    );
}

export default BigCard;