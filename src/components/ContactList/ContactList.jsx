import style from './ContactList.module.css';
import React from 'react';
import NotContacts from 'components/NotContacts/NotContacts';
import propTypes from 'prop-types';
import Filter from '../Filter/Filter';
import Contact from '../Contact/Contact';

class ContactList extends React.Component {
  state = {};

  render() {
    const listCont = this.props.contacts();
    return (
      <>
        <Filter filter={this.props.filter} onFinde={this.props.onFinde} />
        {listCont.length > 0 ? (
          <ul className={style.list}>
            {listCont.map(el => (
              <Contact key={el.id} elem={el} deleteEl={this.props.deleteEl} />
            ))}
          </ul>
        ) : (
          <NotContacts text={'Nothing found for your request'} />
        )}
      </>
    );
  }
}
ContactList.propTypes = {
  filter: propTypes.string,
  onFinde: propTypes.func,
  deleteEl: propTypes.func,
  contacts: propTypes.func,
};
export default ContactList;
