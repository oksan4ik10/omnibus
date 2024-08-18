import style from "./Screen1.module.scss"

interface IProps {
    changeSlide: () => void;
}
function Screen1(props: IProps) {
    const { changeSlide } = props;

    const clickBtn = () => {
        changeSlide();
    }
    return (
        <div className={style.container}>
            <div className={style.waterLogo}>
                <img src="./images/screen1/water-logo.png" alt="water" />
            </div>
            <div className={style.logo}>
                <img src="./images/screen1/logo.png" alt="logo" />
            </div>

            <main className={style.main}>
                <div className={style.main__people}>

                    <div className={style.waterPeople}>
                        <img src="./images/screen1/water-people.png" alt="water" />
                    </div>
                    <div className={style.main__img}>
                        <img src="./images/screen1/people.png" alt="people" />
                        <div className={style.lamp}>
                            <img src="./images/lamp.svg" alt="lamp" />
                        </div>
                    </div>
                </div>
                <div className={style.main__info + " " + style.info}>
                    <div className={style.info__img}>
                        <img src="./images/screen1/label.png" alt="label" className={style.labelImg} />
                        <img src="./images/screen1/label-mobile.png" alt="label" className={style.labelImgMobile} />
                        <div className={style.waterLabel}>
                            <img src="./images/screen1/water.png" alt="water" />
                        </div>
                        <div className={style.labelLamp}>
                            <img src="./images/lamp.svg" alt="lamp" />
                        </div>
                    </div>
                    <div className={style.info__line}>
                        <img src="./images/screen1/square.svg" alt="square" />
                        <div></div>
                    </div>
                    <div className={style.info__text}>
                        <p>Все люди делятся на два типа — на тех, кто работают по&nbsp;специальности, и тех, кто выбирает совсем другую сферу после учебы. А какой путь выбираешь ты?</p>
                        <p>Твоя карьера может складываться интересно вне зависимости от&nbsp;твоего выбора! Мы собрали реальные карьерные истории сотрудников Х компаний и на их примере показали, что ограничения только у нас в голове. У тебя есть много вариантов работы по&nbsp;специальности, а если хочется что-то изменить, то помни&nbsp;— большинство компаний смотрят не на строчку «Образование» в&nbsp;резюме, а на твои знания, интересы и навыки.</p>
                    </div>
                    <button className={style.info__btn + " btn"} onClick={clickBtn}>Дальше</button>
                </div>
            </main>

        </div>
    )
}

export default Screen1;