import { CSSProperties, useEffect, useState } from "react";
import { ICard } from "../../models/type";
import style from "./Answer.module.scss"
interface IProps {
    closeAnswer: () => void;
    data: ICard;
    doubleClick: number;
    isWin: boolean;
}
function Answer(props: IProps) {
    const { closeAnswer, data, isWin, doubleClick} = props;
    console.log(data, isWin, doubleClick);
    const [isDoubleClick, setIsDoubleClick] = useState(false)
    useEffect(()=> {
        setIsDoubleClick(doubleClick === 1 ? false : true)
    }, [])


    return (
        <div className={style.container} style={{ "--logoHeight": data.answerLogoHeight, "--color-job": data.colorJob, "--rect-success": data.answerRectColorSuccess,  "--rect-error": data.answerRectColorError, "--rect-answer": data.answerRectColor} as CSSProperties}>
            <div className={style.wrapper}>
                <div className={style.card}>
                   {!isDoubleClick && <div className={style.card__answer}>
                       {isWin&& <img src="/images/cards/success.svg" alt="success" />}
                       {!isWin && <img src="/images/cards/error.svg" alt="error" />}
                    </div>}
                    {/* {isDoubleClick && <div className={style.card__logo}>
                        <img src={data} alt="" /></div>} */}


                    <div className={style.card__info + " " + style.info}>
                        <div>
                            <div className={style.info__titleLogo}>
                                <div className={style.info__title}>
                                    <span className={style.info__name}>Ксюша</span>
                                    <span className={style.info__age}>23 года</span>
                                </div>

                            </div>
                           {isDoubleClick && <div className={style.info__job}>
                                <span>FutureToday </span>
                                <span>Старший бренд-менеджер в департаменте маркетинга в группе по управлению брендом Flash Up</span>
                            </div>}

                        </div>

                        <div className={style.info__wrapperText}>
                            <div className={style.info__text}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit dolorem voluptatum harum assumenda expedita, voluptatibus excepturi doloremque obcaecati id.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit enim ex saepe tempore officiis temporibus, omnis delectus a eius, modi commodi molestiae earum soluta voluptatem, dicta nisi aliquam nulla.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim architecto recusandae aliquid officia sequi sit eveniet delectus voluptas harum facere saepe, optio doloribus cumque, incidunt officiis provident. Sit labore deleniti ipsam suscipit aliquam recusandae? Quis quas accusantium nemo aliquam dicta sequi veritatis quam eaque, deleniti exercitationem inventore id ullam pariatur incidunt enim quod voluptas asperiores temporibus quo aperiam soluta praesentium. Id eveniet ipsa omnis ab quae culpa minima possimus mollitia.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, expedita aperiam. Sunt tenetur obcaecati officia qui molestias sit porro cum architecto quod, labore, debitis alias accusantium vitae culpa doloremque minima cupiditate ex id itaque perferendis ipsam? Velit consequatur cum, voluptate neque rem deleniti dolor, explicabo blanditiis excepturi nihil maiores ex eos, sapiente placeat accusantium aliquid ratione molestiae aliquam dicta hic cumque in voluptates! Praesentium quis id magnam quam ea possimus doloribus molestias ipsa similique in? Illum voluptas rerum ad veniam excepturi nobis. Vitae libero odit at. Impedit velit quos doloribus voluptates dignissimos voluptatum saepe perferendis rem nostrum voluptas, explicabo ipsam?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit exercitationem, quaerat voluptate ea ex, qui maiores eius totam, dolores maxime! Expedita provident repellat sed autem tempora quidem quisquam ad eum incidunt fugit, dolorem saepe harum repudiandae, voluptate quasi quam! Similique, ea dolorum numquam quam totam ratione porro harum a unde? Assumenda tempora, cum sint impedit saepe placeat doloribus quasi, eaque nobis, voluptas aliquid. Hic expedita tempora debitis nostrum cupiditate eaque commodi itaque fugit ratione amet veritatis facere veniam labore enim et adipisci, nobis, in beatae architecto, atque similique ullam excepturi? Temporibus eius quis eveniet nobis alias harum libero, corporis ratione adipisci culpa eaque magni cumque est saepe quidem perferendis id quaerat sint! Maxime accusamus dolores minima. Hic rerum veniam est quos voluptatum odit accusamus eum possimus quis blanditiis debitis iusto repellat velit natus aspernatur modi, itaque harum voluptas sit! Debitis voluptas soluta esse, vel voluptatum reiciendis adipisci officiis odio fugit inventore eius fuga dignissimos aperiam! Doloribus optio ex, vel in recusandae a tempora quas blanditiis expedita earum, cum, non atque debitis fugiat labore vero magnam aspernatur deserunt. Sequi placeat beatae iste atque quisquam magnam minima quis neque. Accusamus at quam quisquam exercitationem. Perferendis, quibusdam nostrum, natus illum dolorem adipisci veritatis quo aperiam sint asperiores ad consequatur! Quia saepe expedita aliquid repudiandae labore sequi repellendus doloremque neque! Minima deleniti sapiente quos ab voluptatum ad explicabo odit, ipsum rerum dicta repellendus aliquid quasi praesentium repudiandae adipisci voluptas soluta eaque modi sint molestiae numquam qui consectetur! Rerum numquam neque adipisci. Officiis repellendus quo eveniet ipsam, optio aspernatur officia hic maxime ratione exercitationem perferendis, eligendi necessitatibus consequuntur laboriosam quos repudiandae fugit vitae animi molestiae tenetur, nostrum quis! Ut ducimus nemo aliquid velit eos tempora voluptates, deleniti accusantium, officia natus facilis iusto quisquam aut? Voluptatum necessitatibus ipsum provident laboriosam quaerat repudiandae perferendis tempora autem optio earum iste, reprehenderit quis veniam et quam, atque dolorem mollitia, unde voluptas dolor cupiditate ipsa vitae molestias fuga? Quas qui, excepturi eos nam sint quisquam ducimus esse accusantium labore aperiam delectus neque quis, ea enim atque, molestias ipsam quibusdam unde dolorem ipsum voluptas nihil sunt libero. Explicabo, magnam accusantium delectus praesentium in ea officiis quibusdam similique illo rem illum, unde sunt vitae architecto alias. Tempore explicabo, id at cum animi perferendis totam vel eos saepe necessitatibus veniam maiores quaerat sapiente. Non soluta ad consequatur expedita pariatur eius, facilis repudiandae nostrum quod nesciunt aliquam recusandae ipsam tenetur unde, placeat in earum ullam nihil tempore quia. Distinctio deserunt nesciunt magnam quam aspernatur amet velit delectus omnis voluptatibus quidem minus vel ducimus eligendi fuga quod unde nihil, recusandae, saepe, fugit vero similique cupiditate? Incidunt reiciendis, architecto molestiae fuga possimus cum expedita iure unde, enim et maxime sint at odit asperiores alias dolores suscipit, optio dolor! Accusantium nam pariatur quaerat maxime perspiciatis dolor ipsum eaque? Minus deserunt ab error mollitia iure tenetur iste ut officia soluta culpa voluptatum iusto, distinctio ex neque vel vitae deleniti earum suscipit sed reiciendis ratione? Necessitatibus aspernatur fuga repudiandae, saepe modi optio reprehenderit neque odio voluptatem culpa unde iste nostrum laboriosam error explicabo corrupti, eveniet quo tenetur quaerat eligendi? Quos reprehenderit ipsa recusandae quisquam dolorum numquam non culpa natus, sit a, explicabo nemo commodi molestias velit! Neque nisi minus rerum saepe commodi odio, repudiandae reiciendis dolorum ducimus cupiditate id nesciunt consequuntur quae omnis officia assumenda, molestias natus in minima laudantium? Exercitationem consequatur cupiditate, provident, possimus autem, numquam aut itaque delectus dolorum nam eveniet nulla. Maiores laborum sed recusandae minima repudiandae incidunt labore animi quos deserunt dolores at veritatis possimus accusantium molestias, debitis nesciunt dolore fugiat nemo eaque culpa temporibus vitae totam praesentium et. Vel qui earum officia beatae odio unde quasi corrupti expedita voluptatum explicabo iste animi ad, ullam facere culpa magni voluptatem est aut pariatur doloremque! Animi ab molestias provident. Voluptatem nostrum labore, eos voluptatum suscipit tempore sint qui, et in eligendi hic vitae illum recusandae repudiandae eaque voluptate dicta odit ab exercitationem dolore pariatur, tempora quaerat nemo harum? Minus nostrum expedita recusandae non, excepturi voluptatem saepe dolorem animi fuga repellat culpa delectus maiores cum est suscipit magni, reprehenderit assumenda repellendus quos veniam vel omnis atque a eos. Quos minima quisquam eligendi eius deleniti, nobis dicta, repellat ducimus dolores, iusto id in. Officia reiciendis nostrum ducimus dolore, aperiam ullam eos quae, porro culpa quia nisi, odio officiis fugiat molestiae ut nesciunt quisquam minus unde error. Magnam impedit perferendis labore adipisci unde repellendus quisquam tenetur, quod nostrum a qui incidunt rerum consectetur, dolorum necessitatibus sapiente voluptatem alias doloremque laboriosam, eius architecto praesentium dignissimos amet? Perferendis, architecto quidem sed voluptatum vel fuga minima quis maiores laudantium, reprehenderit deserunt. Fugit eum suscipit quisquam recusandae ex consequatur aperiam nesciunt modi voluptatem quasi illum praesentium, voluptatibus commodi nulla cum tempore sequi itaque sapiente hic iusto facilis, architecto ad natus. Totam aperiam fugiat dicta aspernatur ab, asperiores odit, omnis id, ratione fuga facere voluptas harum incidunt labore. Officia esse quod consequuntur iste nemo facere dolorum omnis numquam fugit. Eos et asperiores quae, ullam blanditiis voluptatibus debitis dolorum itaque numquam, repellat adipisci, illum atque molestias non perferendis quam nemo qui iusto consequuntur officiis reprehenderit natus quis aliquam laboriosam! Enim, ipsa? Libero laboriosam ad expedita totam accusantium nemo consequuntur ut pariatur a, vitae quam maxime sed veritatis quae sunt, fugit corporis quasi unde fugiat corrupti aliquam sapiente? Omnis molestias similique provident ipsa! Cumque nesciunt delectus suscipit quisquam inventore sunt tenetur saepe. Ab velit vero, ipsa cumque, rerum, impedit pariatur voluptatibus est minima delectus eius. Nemo exercitationem beatae excepturi, laboriosam sunt, vero laudantium vitae fugiat porro iure, cum inventore illo quae deserunt dicta corrupti ipsam sapiente a ipsum quam corporis necessitatibus minima ducimus? Maiores soluta inventore magnam, est commodi sit facilis nobis facere. Corporis quidem repudiandae, fuga quaerat odit quibusdam saepe at amet ex dolorum labore pariatur doloremque placeat magnam? Corporis nesciunt, facere accusamus quibusdam sapiente distinctio pariatur expedita ducimus ratione at ullam cum fugit, odit vitae laudantium architecto illum reiciendis voluptatibus fuga velit! Odit, molestiae. Quibusdam eligendi, illum perferendis et accusantium dolorem excepturi repudiandae at possimus eum asperiores aperiam earum aliquid doloremque commodi voluptatum. Consequuntur.

                                </p>
                            </div>
                        </div>

                    </div>
                    <div className={style.card__arrow} onClick={closeAnswer}>
                        <img src="/images/cards/arrow.svg" alt="arrow" />

                    </div>
                    <div className={style.rect + " " + (isDoubleClick ? style.answer : isWin ? style.success: style.error)}>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Answer;