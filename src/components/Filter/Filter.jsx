// import PropTypes from 'prop-types';

export const Filter = ({ filterChange, filterValue }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={filterChange}
        value={filterValue}
        name="find"
        
      />
    </>
  );
};
