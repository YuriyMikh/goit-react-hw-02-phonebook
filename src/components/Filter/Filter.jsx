import PropTypes from 'prop-types';

export const Filter = ({ filterChange, filterValue }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={filterChange}
        value={filterValue}
        //   name="name"
        //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //   required
      />
    </>
  );
};
