import { useEffect, useRef } from "react";
import style from "./Screen1.module.scss"

interface IProps {
    changeSlide: () => void;
}
function Screen1(props: IProps) {
    const { changeSlide } = props;

    const clickBtn = () => {
        changeSlide();
    }

    const refLine = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const { current } = refLine;
        if (!current) return
        const { top } = current.getBoundingClientRect();
        document.body.style.setProperty("--topLine", top + "px")


    })
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
                    <div className={style.info__line} ref={refLine}>
                        <img src="./images/screen1/square.svg" alt="square" />
                        <div></div>
                    </div>
                    <div className={style.info__text}>
                        <p>Люди делятся на два типа: одни работают по&nbsp;специальности, а другие меняют трек развития после учебы. Что выбираешь ты?
                        </p>
                        <p>Карьера может сложиться интересно в&nbsp;любом случае! Мы опросили сотрудников Х компаний и выяснили, что все ограничения только у нас в&nbsp;голове. Ты можешь работать по&nbsp;специальности или развиваться в&nbsp;любом другом интересном тебе направлении. </p>
                        <p>Помни: большинство компаний смотрят не&nbsp;на&nbsp;образование, а на&nbsp;твои знания, интересы и навыки.</p>
                    </div>

                </div>
            </main>
            <button className={style.btn + " btn"} onClick={clickBtn}>Дальше</button>
        </div>
    )
}

export default Screen1;