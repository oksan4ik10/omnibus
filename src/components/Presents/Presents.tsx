import style from "./Presents.module.scss"
interface IProps {
    isMobile?: boolean;
}
function Presents(props: IProps) {
    const { isMobile } = props;
    return (
        <div className={style.presents + " " + (isMobile ? style.mobile : "")}>
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

                <div className={style.waterPresents}>
                    <img src="./images/sceen2/water-btn.png" alt="water" />
                </div>
                <div className={style.lampPresents}>
                    <img src="./images/lamp.svg" alt="lamp" />
                </div>
            </div >

        </div >
    );
}

export default Presents;