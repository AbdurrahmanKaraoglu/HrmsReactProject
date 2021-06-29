import React, { useState, useEffect } from 'react'
import { Formik, ErrorMessage, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { FormField, Label, Button, Dropdown } from 'semantic-ui-react';
import HrmsTextInput from '../../../utilities/jobPostingFormControls/HrmsTextInput';
import { toast } from "react-toastify";
import EmployerService from '../../../services/employerService';
import './employerUpdatePage.css'

export default function EmployerUpdatePage() {

    {/* "companyName": "string",
  "companyPictureAddress": "string",
  "email": "string",
  "id": 0,
  "password": "string",
  "passwordRepeat": "string",
  "phoneNumber": "string",
  "webAddress": "string" */}

    const initialValues = {
        employerId: 1,
        companyName: "",
        companyPictureAddress: "",
        email: "", 
        // password: "",
        // passwordRepeat: "",
        phoneNumber: "",
        webAddress: ""
    }



    const schema = Yup.object({
        employerId: Yup.number().required("İş veren girilmesi zorunlu"),

        companyName: Yup.string().required("Şirket Adı Girmek Zorunlu"),
        companyPictureAddress: Yup.string().required("Şirket Logosu Yüklemek Zorunlu"),
        email: Yup.string().required("Email Adresi Girmek Zorunlu"),
        // password: Yup.string().required("Şifre Girmek Zorunlu"),
        // passwordRepeat: Yup.string().required("Şifre Tekrarı Girmek Zorunlu"),
        phoneNumber: Yup.string().required("Telefon Numarası Girmek Zorunlu"),
        webAddress: Yup.string().required("Web Adresi Girmek Zorunlu")
    })



    let employerService = new EmployerService();

    const formik = useFormik({
        initialValues: { 
            employerId: 1,
            companyName: "",
            companyPictureAddress: "",
            email: "", 
            // password: "",
            // passwordRepeat: "",
            phoneNumber: "",
            webAddress: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            values.employerId = 1;
            employerService
                .updateEmployer(values)
                .then((result) => toast.success(result.data.message));
        },
    });

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };
    return (

        <div className="updatePage">
            <h1>İşveren Bilgilerini Güncelle</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {/* "companyName": "string",
  "companyPictureAddress": "string",
  "email": "string",
  "id": 0,
  "password": "string",
  "passwordRepeat": "string",
  "phoneNumber": "string",
  "webAddress": "string" */}
                <Form className="ui form">
                    <HrmsTextInput name="employerId" placeholder='İş Veren İd' />
                    <HrmsTextInput name="companyName" placeholder='Şirket Adı' />
                    <HrmsTextInput name="companyPictureAddress" placeholder='Şirket Resim Adresi' />
                    <HrmsTextInput name="email" placeholder='Email Adresi' />
                    {/* <HrmsTextInput name="password" placeholder='Şifre' />
                    <HrmsTextInput name="passwordRepeat" placeholder='Şifre Tekrarı' /> */}
                    <HrmsTextInput name="phoneNumber" placeholder='Telefon Numarası' />
                    <HrmsTextInput name="webAddress" placeholder='Web Site Adresi' />
                    <Button color="green" type="submit">İlan Ver</Button>
                </Form>
            </Formik>
        </div>
    )
}