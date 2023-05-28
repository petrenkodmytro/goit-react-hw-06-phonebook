import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FaUserPlus, FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import {
  FormField,
  Form,
  ErrorMessage,
  FormBtnAdd,
  LabelWrapper,
  FieldInput,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import {
  notificationMassege,
  notificationOptions,
} from 'components/Notification/Notification';
import { toast } from 'react-toastify';

// валідація полів форми
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz... '
    )
    .required(),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  // Для того щоб сповістити сторінку про те, що в інтерфейсі відбулася якась подія, необхідно відправити екшен. Для цього у бібліотеці React Redux є хук useDispatch(), який повертає посилання на функцію надсилання екшенів dispatch з об'єкта створеного нами раніше стора Redux.
  const dispatch = useDispatch();
  // Отримуємо необхідну частину стану зі стору
  const contacts = useSelector(getContacts);

  // console.log(getContacts);

  return (
    <Formik
      // дивись документацію
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        // перевірка на існуюче ім'я контакту
        if (
          contacts.some(
            contact =>
              contact.name.toLocaleLowerCase() ===
              values.name.toLocaleLowerCase()
          )
        ) {
          // повідомлення
          toast.error(
            `${values.name} ${notificationMassege}`,
            notificationOptions
          );
          return;
        }
        dispatch(addContact({ ...values, id: nanoid() }));
        // console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          <LabelWrapper>
            <FaUser size="16" />
            Name
          </LabelWrapper>
          <FieldInput name="name" />
          <ErrorMessage name="name" component="div" />
        </FormField>

        <FormField>
          <LabelWrapper>
            <BsFillTelephoneFill size="16" />
            Number
          </LabelWrapper>
          <FieldInput name="number" />
          <ErrorMessage name="number" component="div" />
        </FormField>

        <FormBtnAdd type="submit">
          <FaUserPlus size="16" />
          Add contact
        </FormBtnAdd>
      </Form>
    </Formik>
  );
};
