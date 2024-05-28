import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LibraryContext } from '../LibraryContext';

const BookForm = ({ book, onSubmit }) => {
    const { authors } = useContext(LibraryContext);

    const initialValues = book || {
        title: '',
        author: '',
        isbn: '',
        publicationDate: ''
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        author: Yup.string().required('Required'),
        isbn: Yup.string().required('Required'),
        publicationDate: Yup.date().required('Required')
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
                    <label htmlFor="title">Title</label>
                    <Field name="title" type="text" />
                    <ErrorMessage name="title" component="div" />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <Field name="author" as="select">
                        <option value="">Select an author</option>
                        {authors.map(author => (
                            <option key={author.id} value={author.name}>{author.name}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="author" component="div" />
                </div>
                <div>
                    <label htmlFor="isbn">ISBN</label>
                    <Field name="isbn" type="text" />
                    <ErrorMessage name="isbn" component="div" />
                </div>
                <div>
                    <label htmlFor="publicationDate">Publication Date</label>
                    <Field name="publicationDate" type="date" />
                    <ErrorMessage name="publicationDate" component="div" />
                </div>
                <button type="submit">{book ? 'Update' : 'Add'} Book</button>
            </Form>
        </Formik>
    );
};

export default BookForm;
