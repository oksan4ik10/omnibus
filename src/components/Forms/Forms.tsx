import style from "./Forms.module.scss"

function Forms() {
    return (
        <div className={style.wrapper}>
            <form className={style.form}>
                <div className={style.form__wrapper}>
                    <h2 className={style.form__title}>Участвуй в розыгрыше<br />и получи приз!</h2>
                    <p className={style.form__text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sit perferendis autem, rem, nihil mollitia tempora vitae debitis maxime voluptate commodi animi ut excepturi nemo repellat consectetur quos fugit saepe!</p>
                    <label className={style.form__label}>
                        <input type="email" placeholder="Введите почту" />
                    </label>
                    <label className={style.form__label}>
                        <input type="text" placeholder="Введите ваше имя" />
                    </label>
                    <label className={style.form__checkbox}>
                        <input type="checkbox" />
                        <span>Я согласен(а) на <a href="https://vk.com/" className={style.link}>обработку персональных данных</a> и получение информационных сообщений, а также с <a href="https://vk.com/" className={style.link}>правилами проведения акции</a></span>
                    </label>
                    <button className={style.form__btn + " btn"}>Отправить</button>
                </div>

            </form>

        </div>
    );
}

export default Forms;