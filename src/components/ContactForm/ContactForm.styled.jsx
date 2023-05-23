import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 390px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid ${props => props.theme.colors.accentDark};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: -1px -1px 5px #fff, 1px 1px 5px ${p => p.theme.colors.accentDark};
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FieldInput = styled(Field)`
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: inset 1px 1px 3px ${props => props.theme.colors.accentLight},
    inset -1px -1px 5px ${props => props.theme.colors.accentLight};
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
  margin-bottom: 5px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  font-style: italic;
  color: ${props => props.theme.colors.error};
`;

export const FormBtnAdd = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  border: none;
  background-color: ${p => p.theme.colors.accentLight};
  transition: all 0.2s ease-in-out;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentDark};
    color: #fff;
    box-shadow: -2px -2px 5px #fff,
      2px 2px 5px ${p => p.theme.colors.accentDark};
    svg {
      fill: #fff;
      stroke: #fff;
    }
  }
`;
