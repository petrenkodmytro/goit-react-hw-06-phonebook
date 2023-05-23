import React from 'react';
import PropTypes from 'prop-types';
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

export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      // дивись документацію
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
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

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
