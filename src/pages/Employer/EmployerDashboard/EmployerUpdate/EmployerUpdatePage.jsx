import React from 'react'
import { Formik, Form, useFormik, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import EmployerService from '../../../../services/employerService';
import './employerUpdatePage.css'
import { Publish } from "@material-ui/icons";
import './employerUpdatePage.css'


export default function EmployerUpdatePage() {

  const initialValues = {
    employerId: 1,
    companyName: "",
    companyPictureAddress: "",
    email: "",
    password: "",
    passwordRepeat: "",
    phoneNumber: "",
    webAddress: ""
  }
  const schema = Yup.object(
    {
      employerId: Yup.number().required("İş veren girilmesi zorunlu"),
      companyName: Yup.string().required("Şirket Adı Girmek Zorunlu"),
      companyPictureAddress: Yup.string().required("Şirket Logosu Yüklemek Zorunlu"),
      email: Yup.string().required("Email Adresi Girmek Zorunlu"),
      password: Yup.string().required("Şifre Girmek Zorunlu"),
      passwordRepeat: Yup.string().required("Şifre Tekrarı Girmek Zorunlu"),
      phoneNumber: Yup.string().required("Telefon Numarası Girmek Zorunlu"),
      webAddress: Yup.string().required("Web Adresi Girmek Zorunlu")
    }
  )
  let employerService = new EmployerService();
  const formik = useFormik(
    {
      initialValues: {
        employerId: 1,
        companyName: "",
        companyPictureAddress: "",
        email: "",
        password: "",
        passwordRepeat: "",
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
    }
  );

  return (
    <div className="updatePage">
      <h1>İşveren Bilgilerini Güncelle</h1>
      <div className="myJobPostingContainer">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="ui form">
            <div className="userUpdate">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Şirket İsmi</label>
                  <Field
                    name="companyName"
                    type="text"
                    placeholder="Şirket İsmi"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>E-Posta Adresi</label>
                  <Field
                    name="email"
                    type="text"
                    placeholder="E-Posta Adresi"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Web Sitesi Adresi</label>
                  <Field
                    name="webAddress"
                    type="text"
                    placeholder="Web Sitesi Adresi"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Telefon Numarası</label>
                  <Field
                    name="phoneNumber"
                    type="text"
                    placeholder="Telefon Numarası"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Şifre</label>
                  <Field

                    name="password"
                    type="password"
                    placeholder="Şifre"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Şifre Tekrarı</label>
                  <Field
                    name="passwordRepeat"
                    type="password"
                    placeholder="Şifre Tekrarı"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://www.yildizholding.com.tr/media/13333/ulker_logo.jpg"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" fontSize="large" />
                  </label>
                  <Field name="companyPictureAddress" type="file" id="file" style={{ display: "none" }} />
                </div>
              </div>
            </div>
            <div className="userUpdateButtonDiv">
              <button type="submit" className="userUpdateButton">Profili Güncelle</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}