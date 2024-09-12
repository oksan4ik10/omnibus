
import style from "./Forms.module.scss"
interface IProps{
    closeForm: ()=> void
}
function Forms(props: IProps) {
    const {closeForm} = props;
    const clickCloseForm=(e: React.MouseEvent<HTMLDivElement>)=> {
        const target = e.target as HTMLElement;
        if(target.closest(`.${style.form}`)) return
        closeForm()
        
    }

    return (
        <div className={style.wrapper} onClick={(e)=>clickCloseForm(e)}>
            <form className={style.form}>
                <div className={style.form__wrapper}>
                    <h2 className={style.form__title}>Участвуй в розыгрыше<br />и получи приз!</h2>
                    <p className={style.form__text}>Мы разыгрываем карьерные консультации, сертификаты на&nbsp;маркетплейсы и&nbsp;подписки на&nbsp;сервисы! Оставляй почту и имя, чтобы участвовать. Результаты объявим <strong>19&nbsp;ноября.</strong></p>
                    <div className={style.form__items}>
                        <label className={style.form__label}>
                            <input type="email" placeholder="Введите почту" />
                        </label>
                        <label className={style.form__label}>
                            <input type="text" placeholder="Введите ваше имя" />
                        </label>
                        <label className={style.form__checkbox}>
                            <input type="checkbox" />
                            <span>Я согласен(а) на <a href="https://vk.com/" target="_blank" className={style.link}>обработку персональных данных</a> и получение информационных сообщений, а также с&nbsp;<a href="https://vk.com/" className={style.link} target="_blank">правилами проведения акции</a></span>
                        </label>
                    </div>

                    <button className={style.form__btn + " btn"}>Отправить</button>
                </div>

            </form>

        </div>
    );
}

export default Forms;