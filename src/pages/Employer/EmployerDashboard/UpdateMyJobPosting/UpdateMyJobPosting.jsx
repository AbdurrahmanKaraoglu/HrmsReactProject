import React, { useState, useEffect } from 'react'
import { Formik, ErrorMessage, Form, useFormik, Field } from 'formik';
import * as Yup from 'yup';
import { FormField, Label, Button, Dropdown, Grid } from 'semantic-ui-react';

import CitiesService from '../../../../services/citiesService'
import JobPositionService from '../../../../services/jobPositionService';
import HrmsTextInput from '../../../../utilities/jobPostingFormControls/HrmsTextInput';
import { toast } from "react-toastify";
import JobPostingFormService from '../../../../services/jobPostingFormService';
import './updateMyJobPosting.css';

import { makeStyles, TextField, FormLabel, FormControl, FormControlLabel, FormHelperText, Checkbox } from '@material-ui/core/';

import FormGroup from '@material-ui/core/FormGroup';
// import { FormSelect } from "shards-react";
import Select from 'react-select'
import HrmsFormTextAreaInput from '../../../../utilities/jobPostingFormControls/HrmsFormTextAreaInput';






const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function UpdateMyJobPosting() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        parttime: false,
        freelance: false,
        office: false,
        fulltime: false,
    });




    const [cities, setCities] = useState([]);
    useEffect(() => {
        let citiesService = new CitiesService();
        citiesService.getAll().then(result => setCities(result.data.data))
    }, []);

    const cityOption = cities.map((city, index) => ({
        value: city.id,
        label: city.cityName,
        key: index,
        // text: city.cityName,
        // value: city.id,

    }));


    const [jobPositions, setJobPositions] = useState([]);
    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobposition().then(result => setJobPositions(result.data.data))
    }, []);

    const jobPositionOptions = jobPositions.map((jobPosition) =>
        ({ value: jobPosition.id, label: jobPosition.title })
    );

    const initialValues = {
        jobPostingId: 1,
        employerId: 1,
        jobPositionId: 1,
        jobDescription: "",
        citieId: 1,
        maximumSalary: "",
        minimumSalary: "",
        numberOfOpenPositions: 1,
        applicationDeadline: ""
    }


    const schema = Yup.object(
        {
            // jobPostingId: Yup.number().required("İlan girilmesi zorunlu"),
            //employerId: Yup.number().required("İş veren girilmesi zorunlu"),

            //jobPositionId: Yup.number().required("İş Pozisyonunu Seçmek Zorunlu"),
            jobDescription: Yup.string().required("İş Açıklaması Zorunlu"),
            //citieId: Yup.number().required("İlan Vereceğiniz Şehri Seçmek Zorunlu"),
            maximumSalary: Yup.string().required("Maximum Maaş Zorunlu"),
            minimumSalary: Yup.string().required("Minumum Maaş Zorunlu"),
            numberOfOpenPositions: Yup.number().required("Açık Pozisyon Sayısı Zorunlu"),
            applicationDeadline: Yup.string().required("Son Başvuru Tarihi Zorunlu")
        }
    )



    let jobPostingService = new JobPostingFormService();
    const formik = useFormik(
        {
            initialValues:
            {
                jobPostingId: 1,
                employerId: 1,
                jobPositionId: 1,
                jobDescription: "",
                citieId: 1,
                maximumSalary: "",
                minimumSalary: "",
                numberOfOpenPositions: 1,
                applicationDeadline: "",
            },
            validationSchema: schema,
            onSubmit: (values) => {
                values.employerId = 2;
                jobPostingService
                    .updateMyJobPosting(values)
                    .then((result) => toast.success(result.data.message));
                alert("İş İlanı Eklendi, Sistem Personeli Tarafından Onaylandıktan Sonra Yayınlanacaktır");
            },
        }
    );

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };
    return (
        <div className="updateMyJobPostings">
            <div className="myJobPostingTitleContainer">
                <h1>İlan Bilgilerini Güncelle</h1>
            </div>
            <div className="myJobPostingContainer">
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    <div className="formContainer">
                        <Form className="ui form">
                            {/* <HrmsTextInput className="deneme" name="jobPostingId" placeholder='İlan İd' />
                        <HrmsTextInput name="employerId" placeholder='İş Veren İd' /> */}
                            <div className="selectdiv">
                                <div className="jobPositionSelect">
                                    <Select
                                        name={jobPositionOptions}
                                        clearable
                                        item
                                        placeholder='İş Pozisyonunu Seçin'
                                        search
                                        selection
                                        onChange={(event, data) =>
                                            handleChangeSemantic(data.value, "jobPositionId")
                                        }
                                        onBlur={formik.onBlur}
                                        id="jobPositionId"

                                        options={jobPositionOptions}
                                    />
                                    <ErrorMessage name="jobPositionId" render={error =>
                                        <Label pointing basic color="red" content={error}></Label>
                                    }></ErrorMessage>
                                </div>


                                <div className="citySelect">


                                    <Select


                                        clearable
                                        item
                                        placeholder="Şehir"
                                        search
                                        selection
                                        onChange={(event, data) =>
                                            handleChangeSemantic(data.value, "citieId")
                                        }
                                        onBlur={formik.onBlur}
                                        id="citieId"
                                        value={formik.values.citieId}
                                        options={cityOption}
                                    />
                                    <ErrorMessage name="citieId" render={error =>
                                        <Label pointing basic color="red" content={error}></Label>
                                    }></ErrorMessage>


                                </div>
                            </div>
                            <div className="maxminSalaryDiv">
                                {/* <div className="maxSalaryDiv">
                                    <HrmsTextInput name="maximumSalary" placeholder='Maximum Maaş' />
                                </div> */}
                                <div className="form-group">
                                    <label htmlFor="maximumSalary">Maximum Maaş</label>
                                    <Field name="maximumSalary" className={(formik.touched.maximumSalary && formik.errors.maximumSalary) ? 'form-control is-invalid' : 'form-control'} type="text" />



                                    <ErrorMessage name="maximumSalary" render={error =>
                                        <Label pointing basic color="red" content={error}></Label>
                                    }></ErrorMessage>
                                </div>
                                <div className="minSalaryDiv">
                                    <HrmsTextInput name="minimumSalary" placeholder='Minumum Maaş' />
                                </div>
                            </div>

                            <div className="numberOfOpenPositions">
                                <HrmsTextInput type="number" name="numberOfOpenPositions" placeholder='Açık Pozisyon Sayısı' />
                            </div>
                            <div className="applicationDeadline">
                                <FormField>
                                    <Field
                                        name="applicationDeadline"
                                        id="date"
                                        // label="Son Başvuru Tarihi"
                                        type="date"

                                        className={classes.textField}

                                    />
                                </FormField>
                            </div>
                            <div className="workingtypes">
                                <FormField>
                                    <label>Çalışma Türleri</label>
                                    <div class="form-check">
                                        <Field name="parttime"
                                            className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">Part Time (Yarı Zamanlı)</label>
                                    </div>
                                    <div class="form-check">
                                        <Field name="freelance"
                                            className="form-check-input" type="checkbox" id="gridCheck2" />
                                        <label className="form-check-label" htmlFor="gridCheck2">Freelance (Serbest)</label>
                                    </div>
                                    <div class="form-check">
                                        <Field name="office"
                                            className="form-check-input" type="checkbox" id="gridCheck3" />
                                        <label className="form-check-label" htmlFor="gridCheck3">Office (Evden)</label>
                                    </div>
                                    <div class="form-check">
                                        <Field name="fulltime"
                                            className="form-check-input" type="checkbox" id="gridCheck4" />
                                        <label className="form-check-label" htmlFor="gridCheck4">Full Time (Tam Zamanlı)</label>
                                    </div>
                                </FormField>
                            </div>

                            <div className="jobDescription">
                                <FormField>
                                    <Field name='jobDescription' as="textarea" rows={2} cols={80} placeholder='Açıklama...' />
                                    <ErrorMessage name="jobDescription" render={error =>
                                        <Label pointing basic color="red" content={error}></Label>
                                    }></ErrorMessage>
                                </FormField>
                            </div>

                            <button className="myJobPostingUpdateButton" type="submit">Güncelle</button>
                        </Form>
                    </div>
                </Formik>
            </div>
        </div>
    )
}