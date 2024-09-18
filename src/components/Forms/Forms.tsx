
import { FTClient } from 'ft-client'
import style from "./Forms.module.scss"
import { SubmitHandler, useForm } from 'react-hook-form';
interface IProps{
    closeForm: ()=> void
    openFinish: ()=> void
}
interface IForm{
    name: string;
    email: string;
    checkbox: boolean;
}
function Forms(props: IProps) {
    const {closeForm, openFinish} = props;
    const clickCloseForm=(e: React.MouseEvent<HTMLDivElement>)=> {
        const target = e.target as HTMLElement;
        if(target.closest(`.${style.form}`)) return
        closeForm()
        
    }

    const { register, handleSubmit, formState: { errors }} = useForm<IForm>({
        defaultValues: {
          name: '',
          email: '',
          checkbox: false,
        }
      });

    const sendForm: SubmitHandler<IForm> = async  (dataForm: IForm)=> {
        console.log(dataForm);
        
        const ftClient = new FTClient(
            'https://ft-admin-api.sjuksin.ru/',
            'noregrets'
          )
          const projectState = await ftClient.loadProjectState()
          console.log('Project state', projectState)
        const data = { post: 'user@mail.ru', name: "test"}
        // const data = { post: 'user@mail.ru', name: "test"}
        const newRecord = await ftClient.createRecord(data)
        console.log('new record:', newRecord)
        openFinish()
    }

    return (
        <div className={style.wrapper} onClick={(e)=>clickCloseForm(e)}>
            <form className={style.form} onSubmit={handleSubmit(sendForm)}>
            <div className={style.close} onClick={closeForm}>
                <img src="/images/cards/close.svg" alt="close" />
            </div>
                <div className={style.form__wrapper}>
                    <h2 className={style.form__title}>Участвуй в розыгрыше<br />и получи приз!</h2>
                    <p className={style.form__text}>Мы разыгрываем карьерные консультации, сертификаты на&nbsp;маркетплейсы и&nbsp;подписки на&nbsp;сервисы! Оставляй почту и имя, чтобы участвовать. Результаты объявим <strong>19&nbsp;ноября.</strong></p>
                    <div className={style.form__items}>
                        <label className={style.form__label}>
                            <input className={(errors.email ? style.error : "")} type="email" placeholder="Введите почту" {...register("email", { required: true, pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Некорректный email"}})} />
                        </label>
                        <label className={style.form__label}>
                            <input className={(errors.email ? style.error : "")} type="text" placeholder="Введите ваше имя" {...register("name", { required: true})} />
                        </label>
                        <label className={style.form__checkbox + " " + (errors.checkbox ? style.errorCheck : "")}>
                            <input type="checkbox" {...register("checkbox", { required: true})}/>
                            <span>Я согласен(а) на <a href="https://fut.ru/personal-data" target="_blank" className={style.link}>обработку персональных данных</a> и получение информационных сообщений, а также с&nbsp;<a href="https://noregrets.fut.ru/agreement.pdf" className={style.link} target="_blank">правилами проведения акции</a></span>
                        </label>
                    </div>

                    <button className={style.form__btn + " btn"}>Отправить</button>
                </div>

            </form>

        </div>
    );
}

export default Forms;