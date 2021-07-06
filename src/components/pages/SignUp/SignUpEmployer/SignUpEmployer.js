import React from 'react';
import { Formik, Form } from 'formik';
import { HrmsSignUpTextField } from '../HrmsSignUpTextField';
import * as Yup from 'yup';


function SignUpEmployer() {
    const validate = Yup.object({
        companyName: Yup.string()
            .max(50, '50 Karakter Veya Daha Az Olmalıdır')
            .required('Gereklidir'),
        email: Yup.string()
            .email('E-posta Geçersiz')
            .required('Email Gereklidir'),
        phoneNumber: Yup.string()
            .max(11, '11 Karakter Olmalıdır').min(11, '11 Karakter Olmalıdır')
            .required('Gereklidir'),
        webAddress: Yup.string()
            .max(50, 'Maksimum 50 Karakter Olmalıdır')
            .required('Gereklidir'),
        companyPictureAddress: Yup.string()
            .max(100, 'Maksimum 100 Karakter Olmalıdır')
            .required('Gereklidir'),
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
                            companyName: '',
                            email: '',
                            phoneNumber: '',
                            webAddress: '',
                            companyPictureAddress: '',
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
                                <h1 className="my-4 font-weight-bold .display-4">İş Veren Kayıt</h1>
                                <Form>
                                    <HrmsSignUpTextField label="Şirket Adı" name="companyName" type="companyName" />

                                    <HrmsSignUpTextField label="Email" name="email" type="email" />

                                    <HrmsSignUpTextField label="Telefon Numarası" name="phoneNumber" type="phoneNumber" />

                                    <HrmsSignUpTextField label="Web Sitesi" name="webAddress" type="webAddress" />

                                    <HrmsSignUpTextField label="Resim Adresi Düzenlenecek" name="companyPictureAddress" type="companyPictureAddress" />

                                    <HrmsSignUpTextField label="Şifre" name="password" type="password" />

                                    <HrmsSignUpTextField label="Şifre Tekrarı" name="confirmPassword" type="password" />

                                    <button className="btn btn-dark mt-3" type="submit">Kayıt Ol</button>
                                    <button className="btn btn-danger mt-3 ml-3" type="reset">Sıfırla</button>
                                </Form>
                                <br />
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

export default SignUpEmployer
