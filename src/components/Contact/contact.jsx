import css from './contact.module.css';

//==============================================================================================================================
export const Contact = ({name, number, id, onClickDelBtn}) => {
    return (
        <li className={css.contact}> 
            <div className={css.contact_div}>
                <p className={css.contact_p_name}>{name}</p>
                <p className={css.contact_p}>:</p>
                <a className={css.contact_a_number} href={"tel:" + number}>{number}</a>
                <button className={css.delete_btn} name={id} onClick={onClickDelBtn}>x</button>
            </div>
        </li>
    )
}
//==============================================================================================================================