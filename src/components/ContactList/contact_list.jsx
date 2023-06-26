import {Contact} from '../Contact/contact'
import {nanoid} from 'nanoid';
import css from './contact_list.module.css';

export const ContactList = ({contacts, onClickDelBtn}) => {
   
    return  <div className={css.contact_list_div}>
                <ul className={css.contact_list}> 
                    {contacts.map(contact => <Contact 
                                                name={contact.name} 
                                                number={contact.number} 
                                                id={contact.id} 
                                                onClickDelBtn={onClickDelBtn} 
                                                key={nanoid()}
                                            />
                    )} 
                </ul>
            </div>
}