import React, { useState, useEffect } from 'react';
import { FormContact } from './formcontact/FormContact';
import { Contact } from './contacts/Contacsts';
import { Filter } from './filtr/Filter';
import shortid from 'shortid';


const useLocalStorage = (key, defaultValue)=>{
const [state, setState] = useState(() =>{
  return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
})

useEffect(()=>{
  window.localStorage.setItem(key, JSON.stringify(state));
},[key, state])

return [state, setState]
}

export const App =()=> {
  const [contacts, setContacts] = useLocalStorage('contacts',  [{ id: 156156, name: 'Rosie Simpson', number: '459-12-56' }])
  const [filter, setFilter] = useState('')

 const addNamesContact = (name, number) => {
    const addCont = {
      id: shortid.generate(),
      name,
      number,
    };

    const gmapCont = contacts.find(
      ({ name }) => name.toLowerCase() === addCont.name.toLowerCase()
    );

    if (gmapCont) {
      return alert(`${name} is already in contacs.`);
    }

    setContacts(prevState => [addCont, ...prevState],
    );
  };

 const filtrChange = e => {
    setFilter(e.target.value);
  };

 const filterRender = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

 const onDelete = id => {
  setContacts(prevState => 
      prevState.filter(contact => contact.id !== id));
    const localClear = this.state.contacts.filter(contact => contact.id === id);

    localStorage.removeItem(localClear[0].name);
    setFilter({ filter: '' });
  };

    const visibleStat = filterRender();
    return (
      <div>
        <FormContact addNamesContact={addNamesContact} />
        <Filter onChange={filtrChange} value={filter} />
        <Contact dataContact={visibleStat}  onDelete={onDelete}/> 
      </div>
    );
  
}