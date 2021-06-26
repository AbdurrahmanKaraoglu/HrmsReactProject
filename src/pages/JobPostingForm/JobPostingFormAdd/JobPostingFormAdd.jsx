import React, { useState, useEffect } from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormField, Label, Button,Dropdown } from 'semantic-ui-react';
import CitiesService from '../../../services/citiesService';
import JobPositionService from '../../../services/jobPositionService';
import HrmsTextInput from '../../../utilities/jobPostingFormControls/HrmsTextInput';

const cityOptions = [];
const jobPositionOptions = [];

export default function JobPostingFormAdd() {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        let citiesService = new CitiesService();
        citiesService.getAll().then(result => setCities(result.data.data))
    }, []);

    cities.map((city) =>
        cityOptions.push({ key: city.id, text: city.cityName, value: city.id })
    );

    const [jobPositions, setJobPositions] = useState([]);
    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobposition().then(result => setJobPositions(result.data.data))
    }, []);
    jobPositions.map((jobPosition) =>
        jobPositionOptions.push({ key: jobPosition.id, text: jobPosition.title, value: jobPosition.id })
    );


    const initialValues = { employerId: 1, citieId: 1, jobPositionId: 1, jobDescription: "", numberOfOpenPositions: 1, applicationDeadline: "", maximumSalary: "", minimumSalary: "" }

    const schema = Yup.object({
        employerId: Yup.number().required("İş veren girilmesi zorunlu"),
        citieId: Yup.number().required("İlan Vereceğiniz Şehri Seçmek Zorunlu"),
        jobPositionId: Yup.number().required("İş Pozisyonunu Seçmek Zorunlu"),
        jobDescription: Yup.string().required("İş Açıklaması Zorunlu"),
        numberOfOpenPositions: Yup.number().required("Açık Pozisyon Sayısı Zorunlu"),
        applicationDeadline: Yup.string().required("Son Başvuru Tarihi Zorunlu"),
        maximumSalary: Yup.string().required("Maximum Maaş Zorunlu"),
        minimumSalary: Yup.string().required("Minumum Maaş Zorunlu"),
    })
    return (
       
        <div>
            <h1>İş İlanı  Ekle</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => { 
                    console.log(values);
                }}
            >
                <Form className="ui form">
                    <HrmsTextInput name="employerId" placeholder='İş Veren'/>
                    <HrmsTextInput name="jobDescription" placeholder='İş Açıklaması'/>
                    <HrmsTextInput name="numberOfOpenPositions" placeholder='Açık Pozisyon Sayısı'/>
                    <HrmsTextInput name="applicationDeadline" placeholder='Son Başvuru Tarihi'/>
                    <HrmsTextInput  name="maximumSalary" placeholder='Maximum Maaş'/>
                    <HrmsTextInput  name="minimumSalary" placeholder='Minumum Maaş'/>
                   
                    <FormField>
                    <Dropdown
                            placeholder='Şehir Seçin'
                            search
                            selection
                            options={cityOptions}
                        />
                        <ErrorMessage name="citieId" render={ error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField>

                    <FormField>
                        <Dropdown
                            placeholder='İş Pozisyonunu Seçin'
                            search
                            selection
                            options={jobPositionOptions}
                        />
                        <ErrorMessage name="jobPositionId" render={ error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField>

                    <Button color="green" type="submit">İlan Ver</Button>

                </Form>
            </Formik>
        </div>
    )
}


// {
//     "active": true,

//     "jobDescription": "string",
//     "applicationDeadline": "string",

//     "maximumSalary": 0,
//     "minimumSalary": 0,
//     "numberOfOpenPositions": 0,

//     "releaseDate": "string"


//     "citie": {
//       "cityName": "string",
//       "id": 0
//     },

//     "employer": {
//       "companyName": "string",
//       "companyPictureAddress": "string",
//       "email": "string",
//       "id": 0,
//       "password": "string",
//       "passwordRepeat": "string",
//       "phoneNumber": "string",
//       "webAddress": "string"
//     },

//     "id": 0,
//     

//     "jobPosition": {
//       "id": 0,
//       "title": "string"
//     },

//    
//   }