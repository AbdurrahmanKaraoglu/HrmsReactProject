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


    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { parttime, freelance, office, fulltime } = state;



    const [cities, setCities] = useState([]);
    useEffect(() => {
        let citiesService = new CitiesService();
        citiesService.getAll().then(result => setCities(result.data.data))
    }, []);

    const cityOption = cities.map((city, index) => ({
        value: city.id,
        label: city.cityName,
        // key: index,
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

    {/* 	private int id;
	private int employerId;
	private int jobPositionId;
	private String jobDescription;
	private int citieId;
	private int minimumSalary;
	private int maximumSalary;
	private int numberOfOpenPositions;
	private LocalDate releaseDate; // yayın tarihi
	private LocalDate applicationDeadline; // son başvuru tarihi
	private boolean active;*/}
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
            // employerId: Yup.number().required("İş veren girilmesi zorunlu"),

            // jobPositionId: Yup.number().required("İş Pozisyonunu Seçmek Zorunlu"),
            jobDescription: Yup.string().required("İş Açıklaması Zorunlu"),
            citieId: Yup.number().required("İlan Vereceğiniz Şehri Seçmek Zorunlu"),
            maximumSalary: Yup.string().required("Maximum Maaş Zorunlu"),
            minimumSalary: Yup.string().required("Minumum Maaş Zorunlu"),
            // numberOfOpenPositions: Yup.number().required("Açık Pozisyon Sayısı Zorunlu"),
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
                alert("İş ilanı eklendi, personelin onayı ardından listelenecektir");
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
                                <div className="maxSalaryDiv">
                                    <HrmsTextInput name="maximumSalary" placeholder='Maximum Maaş' />
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
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Çalışma Türleri</FormLabel>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={parttime} onChange={handleChange} name="parttime" />}
                                                label="Part Time (Yarı Zamanlı)"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={freelance} onChange={handleChange} name="freelance" />}
                                                label="Freelance (Serbest)"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={office} onChange={handleChange} name="office" />}
                                                label="Office (Evden)"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={fulltime} onChange={handleChange} name="fulltime" />}
                                                label="Full Time (Tam Zamanlı)"
                                            />

                                        </FormGroup>
                                        <FormHelperText>Dikkatli Ol</FormHelperText>
                                    </FormControl>
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
                            {/* <HrmsFormTextAreaInput name='jobDescription' /> */}
                            {/* <TextareaAutosize
                            name="jobDescription"
                                    rowsMax={10}
                                    aria-label="maximum height"
                                    placeholder="Maximum 4 rows"
                                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
                                /> */}
                            {/* <FormField> */}

                            {/* <TextArea placeholder='İş Açıklaması' /> */}
                            {/* </FormField> */}
                            {/* <HrmsTextInput name="applicationDeadline" placeholder='Son Başvuru Tarihi' /> */}

                            <Button className="myJobPostingUpdateButton" color="green" type="submit">Güncelle</Button>
                        </Form>
                    </div>
                </Formik>
            </div>
        </div>
    )
}