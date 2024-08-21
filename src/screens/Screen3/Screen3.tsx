import Presents from "../../components/Presents/Presents";

import style from "./Screen3.module.scss"

interface IProps {
    screen: number;
    isScreen3Mobile: boolean
}
function Screen3(props: IProps) {
    const { screen, isScreen3Mobile } = props;
    return (
        <div className={style.container}>
            <Presents isMobile={true} screen={screen} isScreen3Mobile={isScreen3Mobile}></Presents>
            <button className={"btn " + style.btn}>ИГРАТЬ</button>
        </div>

    );
}

export default Screen3;