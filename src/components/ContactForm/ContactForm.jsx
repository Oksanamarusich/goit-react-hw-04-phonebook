import { Formik  } from 'formik';
import * as Yup from 'yup';
import { FaUserPlus } from "react-icons/fa";

import { Container,StyledForm, StyledField, Button, Label, Error } from "./ContactForm.styled";

 const FormSchema = Yup.object().shape({
   name:  Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This field is required'),
   number: Yup.string()
     .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in the format 000-00-00!")
     .required('This field is required'),
  
 });

export const ContactForm = ({ onAdd }) => {
  return <Container>
     <Formik
    initialValues={{
      name: '',
      number: '',
      
      }}
    validationSchema={FormSchema}
    onSubmit={(values, actions) => {
      onAdd(values);
      actions.resetForm();
    }}
    >
      <StyledForm>
        
        <Label>
           Name
          <StyledField name="name" />
          <Error name ="name" component ="div"/>
        </Label>
        
        <Label>
          Number
          <StyledField type="tel" name="number" />
          <Error name ="number" component ="div"/>
        </Label>
        

        
        <Button type="submit"><FaUserPlus/> Add contacts</Button>
      </StyledForm>
    </Formik>
  

  </Container>
}
