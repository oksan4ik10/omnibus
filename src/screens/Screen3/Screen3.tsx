import Presents from "../../components/Presents/Presents";

import style from "./Screen3.module.scss"

function Screen3() {
    return (
        <div className={style.container}>
            <Presents isMobile={true}></Presents>
            <button className={"btn " + style.btn}>ИГРАТЬ</button>
        </div>

    );
}

export default Screen3;