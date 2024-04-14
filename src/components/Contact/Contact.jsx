import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={css.card}>
      <div>
        <p>
          <FaUser className={css.icon} /> {contact.name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} /> {contact.number}
        </p>
      </div>
      <button className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
