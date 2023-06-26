import { useState } from 'react';
import css from './contact_form.module.css';

//==============================================================================================================================
export const ContactForm = ({onClickToAddBtn}) => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onFormInputChangeName = (evt) => setName(evt.target.value);
    const onFormInputChangeNumber = (evt) => setNumber(evt.target.value);

    const reset = () => {
        setName('');
        setNumber('');
    }

    const onFormSubmit = e => {
        e.preventDefault();
        onClickToAddBtn(name, number);
        reset();
    }
    
    return (
        <form className={css.contact_form} onSubmit={onFormSubmit}>

            <label className={css.label_name}>Name
                <input className={css.input_name}
                    type="text"
                    name="name"
                    pattern="^[А-Яа-яЁёїЇ'A-Za-z\s]+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    maxLength="25"
                    required
                    onChange={onFormInputChangeName}
                    value={name}
                    placeholder='Name Surname'
                />
            </label>

            <label className={css.label_number}>Number
                <input className={css.input_number}
                    type="tel"
                    name="number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}|[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
                    title="Phone number must be in format [xxx-xxx-xx-xx] or [xxx xxx xx xx]"
                    required
                    onChange={onFormInputChangeNumber}
                    value={number}
                    placeholder='xxx-xxx-xx-xx'
                />
            </label>
            
            <button type="submit" className={css.submit_btn}>Add contact</button>
        </form>
    )
}
//==============================================================================================================================
