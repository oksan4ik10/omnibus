import style from "./Finish.module.scss"
interface IProps{
    closeFinish: ()=> void
    isRecord: boolean;
}
function Finish(props: IProps) {
    const {closeFinish, isRecord} = props;

    return (
        <div className={style.wrapper}>
          
            <div className={style.form}>
            <div className={style.close} onClick={closeFinish}>
                <img src="/images/cards/close.svg" alt="close" />
            </div>
            {isRecord && <p>Спасибо, твоя&nbsp;почта&nbsp;записана.<br/><span>Теперь ты участвуешь в&nbsp;розыгрыше!</span></p>}
            {!isRecord && <p>Спасибо, твои&nbsp;данные&nbsp;перезаписаны.<br/><span>Ты уже участвуешь в&nbsp;розыгрыше!</span></p>}
            </div>
        </div>
    );
}

export default Finish;