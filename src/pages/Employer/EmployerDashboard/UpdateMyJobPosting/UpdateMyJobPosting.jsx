import React, { useState, useEffect } from 'react'
import { Formik, ErrorMessage, useFormik, Field } from 'formik';
import * as Yup from 'yup';
import { Label } from 'semantic-ui-react';
import CitiesService from '../../../../services/citiesService'
import JobPositionService from '../../../../services/jobPositionService';
import { toast } from "react-toastify";
import JobPostingFormService from '../../../../services/jobPostingFormService';
import './updateMyJobPosting.css';
import { makeStyles} from '@material-ui/core/';

import Select from 'react-select'


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
            // jobPostingId: Yup.number().required("??lan girilmesi zorunlu"),
            //employerId: Yup.number().required("???? veren girilmesi zorunlu"),

            //jobPositionId: Yup.number().required("???? Pozisyonunu Se??mek Zorunlu"),
            jobDescription: Yup.string().required("???? A????klamas?? Zorunlu"),
            //citieId: Yup.number().required("??lan Verece??iniz ??ehri Se??mek Zorunlu"),
            maximumSalary: Yup.string().required("Maximum Maa?? Zorunlu"),
            minimumSalary: Yup.string().required("Minumum Maa?? Zorunlu"),
            numberOfOpenPositions: Yup.number().required("A????k Pozisyon Say??s?? Zorunlu"),
            applicationDeadline: Yup.string().required("Son Ba??vuru Tarihi Zorunlu")
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
                alert("???? ??lan?? Eklendi, Sistem Personeli Taraf??ndan Onayland??ktan Sonra Yay??nlanacakt??r");
            },
        }
    );

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };
    return (
        <div className="jobPostingFormUpdate">
        <h1 className="updateJobPostingTitle">???? ??lan??n?? G??ncelle</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <form className="updateJobPostingForm">
                {/* <HrmsTextInput className="deneme" name="jobPostingId" placeholder='??lan ??d' />
                <HrmsTextInput name="employerId" placeholder='???? Veren ??d' /> */}

                {/* <div className="newJobPostingItem">
                    <label>employerId</label>
                    <input type="text" placeholder="employerId"></input>
                </div> */}

                <div className="updateJobPostingItem">
                    <label>??ehir</label>
                    <Select
                        name="citieId"
                        clearable
                        item
                        placeholder="??ehir"
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

                <div className="updateJobPostingItem">
                    <label>???? Pozisyonu</label>
                    <Select
                        name={jobPositionOptions}
                        clearable
                        item
                        placeholder='???? Pozisyonunu Se??in'
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

                <div className="updateJobPostingItem">
                    <label>???? A????klamas??</label>
                    <Field name='jobDescription' as="textarea" rows={2} cols={80} placeholder='A????klama...' className="form-control" />
                    {/* <ErrorMessage name="jobDescription" render={error =>
                        <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage> */}
                </div>

                <div className="updateJobPostingItem">
                    <label>Maximum Maa??</label>
                    <input type="text" placeholder="Maximum Maa??"></input>
                </div>

                <div className="updateJobPostingItem">
                    <label>Minimum Maa??</label>
                    <input type="text" placeholder="Minimum Maa??"></input>
                </div>

                <div className="updateJobPostingItem">
                    <label>A????k Pozisyon Say??s??</label>
                    <input type="text" placeholder="A????k Pozisyon Say??s??"></input>
                </div>

                <div className="updateJobPostingItem">
                    <label>Son Ba??vuru Tarihi</label>
                    {/* <input type="text" placeholder="Son Ba??vuru Tarihi"></input> */}
                    <Field
                        name="applicationDeadline"
                        id="date"
                        // label="Son Ba??vuru Tarihi"
                        type="date"
                        className={classes.textField}
                    />
                </div>

                <div className="updateJobPostingItem">
                    <label>Yay??nlanma Tarihi</label>
                    <input type="text" placeholder="Yay??nlanma Tarihi( Buras?? Sistemden Al??nacak Onayland?????? Tarih)"></input>
                </div>

                <div className="newJobPostingItem">
                        <label>??al????ma ??ekli</label>
                        <div className="newJobPostingWorkingTypes">

                            <label class="newJobPostingWorkingTypesContainer">Part Time (Yar?? Zamanl??)
                                <input type="checkbox" name="parttime" id="parttime" value="parttime" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>

                            <label class="newJobPostingWorkingTypesContainer">Full Time (Tam Zamanl??)
                                <input type="checkbox" name="fulltime" id="fulltime" value="fulltime" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>

                            <label class="newJobPostingWorkingTypesContainer">Freelance (Serbest)
                                <input type="checkbox" name="freelance" id="freelance" value="freelance" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>

                            <label class="newJobPostingWorkingTypesContainer">Office (Evden)
                                <input type="checkbox" name="office" id="office" value="office" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>

                            <label class="newJobPostingWorkingTypesContainer">Stajyer
                                <input type="checkbox" name="intern" id="intern" value="intern" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>

                            <label class="newJobPostingWorkingTypesContainer">D??nemsel(Proje Bazl??)
                                <input type="checkbox" name="seasonal" id="seasonal" value="seasonal" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>
                        </div>
                    </div>

                    <div className="newJobPostingItem">
                        <label>??al????ma T??rleri</label>
                        <div className="newJobPostingWorkingTypes">

                            <label class="newJobPostingWorkingTypesContainer">Uzaktan
                                <input type="checkbox" name="afar" id="afar" value="afar" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>

                            <label class="newJobPostingWorkingTypesContainer">???? Yerinde
                                <input type="checkbox" name="workplace" id="workplace" value="workplace" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>
                        </div>
                    </div>

                <div className="jobPostingActive">
                    {/* daha ??nce onaylanan ilanlarda aktiflik durumu d??zenlenebilir. */}
                    <label>Aktif Mi</label>
                    <select name="active" id="active">
                        <option value="yes">Evet</option>
                        <option value="no">Hay??r</option>
                    </select>
                </div>

            </form>

        </Formik>
        <div className="updateJobPostingButtonItem">
            <button className="updateJobPostingButton">G??ncelle</button>
        </div>
    </div>
    )
}