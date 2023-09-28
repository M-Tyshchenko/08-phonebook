import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormItem,
  StyledField,
  StyledForm,
  SubmitBtn,
  ErrMessage,
} from './LoginForm.styled';
// import { addContact } from 'redux/operations';

const schema = Yup.object().shape({
  email: Yup.string().trim().required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  //   const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(
            logIn({
              email: values.email,
              password: values.password,
            })
          );
          actions.resetForm();
        }}
      >
        <StyledForm>
          <FormItem>
            Email
            <StyledField
              type="email"
              name="email"
              //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrMessage name="email" component="div" />
          </FormItem>

          <FormItem>
            Password
            <StyledField
              type="text"
              name="password"
              //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrMessage name="password" component="div" />
          </FormItem>
          <SubmitBtn type="submit">Log In</SubmitBtn>
        </StyledForm>
      </Formik>
    </>
  );
};
