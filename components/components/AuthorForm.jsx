import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ author, onSubmit }) => {
    const initialValues = author || {
        name: '',
        birthDate: '',
        biography: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        birthDate: Yup.date().required('Required'),
        biography: Yup.string().required('Required')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }}
        >
            <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" />
                </div>
                <div>
                    <label htmlFor="birthDate">Birth Date</label>
                    <Field name="birthDate" type="date" />
                    <ErrorMessage name="birthDate" component="div" />
                </div>
                <div>
                    <label htmlFor="biography">Biography</label>
                    <Field name="biography" as="textarea" />
                    <ErrorMessage name="biography" component="div" />
                </div>
                <button type="submit">{author ? 'Update' : 'Add'} Author</button>
            </Form>
        </Formik>
    );
};

export default AuthorForm;
