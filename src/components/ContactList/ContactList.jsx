// import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id}>
          {item.name}: {item.number}
          <button onClick={() => deleteContact(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
