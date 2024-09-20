import style from "./Presents.module.scss"
interface IProps {
    isMobile?: boolean;
    screen?: number
    isScreen3Mobile?: boolean;
    startGame?: () => void;
}
function Presents(props: IProps) {
    const { isMobile, isScreen3Mobile, startGame } = props;
    const clickGame = () => {
        if (!startGame) return;
        startGame()
    }

    return (
        <>
            <div className={style.presents + " " + (isMobile ? style.mobile : "") + " " + (isScreen3Mobile ? style.screen3 : "")}>
                <div className={style.presents__img}>
                    <img src="images/sceen2/sertificat.png" alt="" />
                </div>
                <div className={style.presents__list}>
                    <div className={style.presents__title}>
                        <h2>Призы от компаний</h2>
                        <ul className={style.list}>
                            <li><span>300</span> сертификатов на Ozon и Яндекс. Еда</li>
                            <li><span>22</span> карьерных консультаций от компаний</li>
                            <li>подписки на MyBook</li>
                            <li>промокоды на сервис выгоды «X5 Пакет»</li>
                            <li><span>PlayStation 5 Slim</span></li>
                        </ul>
                    </div >
                    {!isMobile && <button className={"btn " + style.btn} onClick={clickGame}>
                        играть
                    </button>}


                    <div className={style.lampPresents}>
                        <img src="./images/lamp.svg" alt="lamp" />
                    </div>
                </div >
                <div className={style.waterPresents}>
                    <img src="./images/sceen2/water-btn.png" alt="water" />
                </div>

            </div >
            {isMobile && <div className={style.waterBtm}>
                <img src="./images/screen1/water.png" alt="water" />
            </div>}
            {isMobile && <div className={style.lampBtmMobile}>
                <img src="./images/lamp.svg" alt="lamp" />
            </div>}
        </>

    );
}

export default Presents;