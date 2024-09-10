import { useEffect, useRef, useState } from "react";
import style from "./Screen1.module.scss"


interface IProps {
    changeSlide: () => void;
    isLoader: boolean
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


    }, [])

    const [url, setUrl] = useState('');
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/oksan4ik10/omnibus/master/public/images/screen1/people.png')
        .then(response => response.blob())
        .then((image) => {
          setUrl(URL.createObjectURL(image));
          console.log(url);
          
        });
    }, []);

    // const handleImageLoaded = (e: Event)=> {
    //     console.log(e);
        
    //     console.log("loaded");
    //     setIsLoaded(false)
        
    // }
    // const handleImageErrored=()=> {
    //     console.log("error");
        
    // }
    return (<>
       <div className={style.container + " container" + " " + (url ? "": style.opacity)}>
            <div className={style.waterLogo}>
                <img fetchPriority="low" role="presentation" src="./images/screen1/water-logo.png" alt="water" />
            </div>
            <div className={style.logo}>
                <img fetchPriority="high" src="./images/screen1/logo.png" alt="logo" />
            </div>

            <main className={style.main}>
                <div className={style.main__people}>

                    <div className={style.waterPeople}>
                        <img fetchPriority="low" role="presentation" src="./images/screen1/water-people.png" alt="water" />
                    </div>
                    <div className={style.main__img}>
                    <picture>
                        <img fetchPriority="high"  src={url} alt="people"  />
                    </picture>
                       
                        <div className={style.lamp}>
                            <img src="./images/lamp.svg" alt="lamp" />
                        </div>
                    </div>
                </div>
                <div className={style.main__info + " " + style.info}>
                    <div className={style.info__img}>
                        <img src="./images/screen1/label.png" fetchPriority="high" alt="label" className={style.labelImg} />
                        <img src="./images/screen1/label-mobile.png" fetchPriority="high" role="presentation" alt="label" className={style.labelImgMobile} />
                        <div className={style.waterLabel}>
                            <img src="./images/screen1/water.png" alt="water" />
                        </div>
                        <div className={style.labelLamp}>
                            <img src="./images/lamp.svg" alt="lamp" />
                        </div>
                    </div>
                    <div className={style.info__line} ref={refLine}>
                        <img role="presentation" fetchPriority="low" src="./images/screen1/square.svg" alt="square" />
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
        {!url &&
        <div className={style.container + " conatainer"}>
            <div className={style.loaderWrapper}>
            <div className={style.loader}></div>
            </div> 
            </div>

}
    </>

    )
}

export default Screen1;