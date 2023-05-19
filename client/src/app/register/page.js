"use client";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Register = () => {
 
  return(
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" placeholder="firstName"/>
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <br/>
            <Field name="lastName" placeholder="lastname"/>
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <br/>
            <Field name="email" type="email" placeholder="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br/>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      Already have an account yet? <Link href="/login">Sign in</Link> instead
    </div>
  )
}

export default Register