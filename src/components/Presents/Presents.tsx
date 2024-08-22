import style from "./Presents.module.scss"
interface IProps {
    isMobile?: boolean;
    screen?: number
    isScreen3Mobile?: boolean;
}
function Presents(props: IProps) {
    const { isMobile, isScreen3Mobile } = props;

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
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                            <li><span>150</span> карьерные консультации и 5 подписок на MyBook от «Технологии Доверия».</li>
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                            <li><span>150</span> сертификатов Яндекс.Еда на 1000 р.</li>
                        </ul>
                    </div >
                    <button className={"btn " + style.btn}>
                        играть
                    </button>


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