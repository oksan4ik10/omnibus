import style from "./Answer.module.scss"

function Answer() {
    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <div className={style.card__answer}>
                    <img src="/images/cards/success.svg" alt="success" />

                </div>
                <div className={style.card__arrow}>
                    <img src="/images/cards/arrow.svg" alt="arrow" />

                </div>

                <div className={style.card__info + " " + style.info}>
                    <div className={style.info__titleLogo}>
                        <div className={style.info__title}>
                            <span className={style.info__name}>Ксюша</span>
                            <span className={style.info__age}>23 года</span>
                        </div>

                    </div>
                    <div className={style.info__text}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit dolorem voluptatum harum assumenda expedita, voluptatibus excepturi doloremque obcaecati id.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit enim ex saepe tempore officiis temporibus, omnis delectus a eius, modi commodi molestiae earum soluta voluptatem, dicta nisi aliquam nulla.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim architecto recusandae aliquid officia sequi sit eveniet delectus voluptas harum facere saepe, optio doloribus cumque, incidunt officiis provident. Sit labore deleniti ipsam suscipit aliquam recusandae? Quis quas accusantium nemo aliquam dicta sequi veritatis quam eaque, deleniti exercitationem inventore id ullam pariatur incidunt enim quod voluptas asperiores temporibus quo aperiam soluta praesentium. Id eveniet ipsa omnis ab quae culpa minima possimus mollitia.</p>
                    </div>
                </div>
                <div className={style.rect}>

                </div>
            </div>
        </div>
    );
}

export default Answer;