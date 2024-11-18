
// import { FTClient } from 'ft-client'
import style from "./Forms.module.scss"
import { SubmitHandler, useForm } from 'react-hook-form';
import ym from 'react-yandex-metrika';
interface IProps{
    closeForm: ()=> void
    openFinish: (record: boolean)=> void
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

    const { handleSubmit} = useForm<IForm>();

    const sendForm: SubmitHandler<IForm> = async  ()=> {
        window.open("https://t.me/futru");
        ym('reachGoal', 'form')
        openFinish(true)
        return
        // const ftClient = new FTClient(
        //     ' https://games-admin.fut.ru/api/',
        //     'noregrets'
        //   )

        // const record = await ftClient.findRecord('post', dataForm.email)
        // console.log(record);
        //   if(record){
        //     record.data.name =  dataForm.name;
        //     await ftClient.updateRecord(record.id, record.data)
        //     openFinish(false)
        //     return
        //   }
          
        // const data = { post: dataForm.email, name: dataForm.name}
        // await ftClient.createRecord(data)
        // ym('reachGoal', 'form')
        // openFinish(true)
    }

    return (
        <div className={style.wrapper} onClick={(e)=>clickCloseForm(e)}>
            <form className={style.form} onSubmit={handleSubmit(sendForm)}>
            <div className={style.close} onClick={closeForm}>
                <img src="/images/cards/close.svg" alt="close" />
            </div>
                <div className={style.form__wrapper}>
                    <h2 className={style.form__title}>Начни строить<br/>карьеру сейчас!</h2>
                    <p className={style.form__text}>Подписывайся на&nbsp;ТГ-канал FutureToday!<br/>Тебя ждут все самые свежие стажировки и&nbsp;актуальные ивенты для молодых специалистов&nbsp;— прямиком от&nbsp;работодателей и&nbsp;в&nbsp;одном месте.</p>
                    {/* <div className={style.form__items}>
                        <label className={style.form__label}>
                            <input className={(errors.email ? style.error : "")} type="email" placeholder="Введи почту" {...register("email", { required: true, pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Некорректный email"}})} />
                        </label>
                        <label className={style.form__label}>
                            <input className={(errors.email ? style.error : "")} type="text" placeholder="Введи своё имя" {...register("name", { required: true})} />
                        </label>
                        <label className={style.form__checkbox + " " + (errors.checkbox ? style.errorCheck : "")}>
                            <input type="checkbox" {...register("checkbox", { required: true})}/>
                            <span>Я согласен(а) на <a href="https://fut.ru/personal-data" target="_blank" className={style.link}>обработку персональных данных</a> и получение информационных сообщений, а также с&nbsp;<a href="https://noregrets.fut.ru/agreement.pdf" className={style.link} target="_blank">правилами проведения акции</a></span>
                        </label>
                    </div> */}

                    <button className={style.form__btn + " btn"}>Перейти</button>
                </div>

            </form>

        </div>
    );
}

export default Forms;