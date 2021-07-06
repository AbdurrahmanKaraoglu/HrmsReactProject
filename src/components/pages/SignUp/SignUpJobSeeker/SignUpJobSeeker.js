import React from 'react';
import { Formik, Form } from 'formik';
import { HrmsSignUpTextField } from '../HrmsSignUpTextField';
import * as Yup from 'yup';


function SignUpJobSeeker() {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(25, '25 Karakter Veya Daha Az Olmalıdır')
            .required('Gereklidir'),
        lastName: Yup.string()
            .max(25, '25 Karakter Veya Daha Az Olmalıdır')
            .required('Gereklidir'),
        identificationNumber: Yup.string()
            .max(11, '11 Karakter Olmalıdır').min(11, '11 Karakter Olmalıdır')
            .required('Gereklidir'),
        dateOfBirth: Yup.string()
            .max(4, '4 Karakter Olmalıdır').min(4, '4 Karakter Olmalıdır')
            .required('Gereklidir'),
        email: Yup.string()
            .email('E-posta Geçersiz')
            .required('Email Gereklidir'),
        password: Yup.string()
            .min(6, 'Şifre En Az 6 Karakterden Oluşmalıdır')
            .required('Şifre Gereklidir'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Şifre Uyuşmalı')
            .required('Şifre Tekrarı Gereklidir.'),
    })
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-5'>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            identificationNumber: '',
                            dateOfBirth: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            console.log(values)
                        }}
                    >
                        {formik => (
                            <div>
                                <h1 className="my-4 font-weight-bold .display-4">İş Arayan Kayıt</h1>
                                <Form>
                                    <HrmsSignUpTextField label="İsim" name="firstName" type="text" />

                                    <HrmsSignUpTextField label="Soyisim" name="lastName" type="text" />

                                    <HrmsSignUpTextField label="Tc Kimlik No" name="identificationNumber" type="identificationNumber" />

                                    <HrmsSignUpTextField label="Doğum Yılı" name="dateOfBirth" type="dateOfBirth" />

                                    <HrmsSignUpTextField label="Email" name="email" type="email" />

                                    <HrmsSignUpTextField label="Şifre" name="password" type="password" />

                                    <HrmsSignUpTextField label="Şifre Tekrarı" name="confirmPassword" type="password" />

                                    <button className="btn btn-dark mt-3" type="submit">Kayıt Ol</button>
                                    <button className="btn btn-danger mt-3 ml-3" type="reset">Sıfırla</button>
                                </Form>
                                <br/>
                            </div>
                        )}
                    </Formik>
                </div>
                <div className='col-md-7'>
                    <img className='img-fluid w-100' src='images/rocket.png' alt='' />
                </div>
            </div>
        </div>
    )
}

export default SignUpJobSeeker
