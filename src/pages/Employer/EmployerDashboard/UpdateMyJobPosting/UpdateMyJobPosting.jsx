import React, { useState, useEffect } from 'react'
import { Formik, ErrorMessage, Form, useFormik, Field } from 'formik';
import * as Yup from 'yup';
import { FormField, Label } from 'semantic-ui-react';
import CitiesService from '../../../../services/citiesService'
import JobPositionService from '../../../../services/jobPositionService';
import HrmsTextInput from '../../../../utilities/jobPostingFormControls/HrmsTextInput';
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
        <div className="jobPostingFormUpdate">
        <h1 className="updateJobPostingTitle">İş İlanını Güncelle</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <form className="updateJobPostingForm">
                {/* <HrmsTextInput className="deneme" name="jobPostingId" placeholder='İlan İd' />
                <HrmsTextInput name="employerId" placeholder='İş Veren İd' /> */}

                {/* <div className="newJobPostingItem">
                    <label>employerId</label>
                    <input type="text" placeholder="employerId"></input>
                </div> */}

                <div className="updateJobPostingItem">
                    <label>Şehir</label>
                    <Select
                        name="citieId"
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

                <div className="updateJobPostingItem">
                    <label>İş Pozisyonu</label>
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

                <div className="updateJobPostingItem">
                    <label>İş Açıklaması</label>
                    <Field name='jobDescription' as="textarea" rows={2} cols={80} placeholder='Açıklama...' className="form-control" />
                    {/* <ErrorMessage name="jobDescription" render={error =>
                        <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage> */}
                </div>

                <div className="updateJobPostingItem">
                    <label>Maximum Maaş</label>
                    <input type="text" placeholder="Maximum Maaş"></input>
                </div>

                <div className="updateJobPostingItem">
                    <label>Minimum Maaş</label>
                    <input type="text" placeholder="Minimum Maaş"></input>
                </div>

                <div className="updateJobPostingItem">
                    <label>Açık Pozisyon Sayısı</label>
                    <input type="text" placeholder="Açık Pozisyon Sayısı"></input>
                </div>

                <div className="updateJobPostingItem">
                    <label>Son Başvuru Tarihi</label>
                    {/* <input type="text" placeholder="Son Başvuru Tarihi"></input> */}
                    <Field
                        name="applicationDeadline"
                        id="date"
                        // label="Son Başvuru Tarihi"
                        type="date"
                        className={classes.textField}
                    />
                </div>

                <div className="updateJobPostingItem">
                    <label>Yayınlanma Tarihi</label>
                    <input type="text" placeholder="Yayınlanma Tarihi( Burası Sistemden Alınacak Onaylandığı Tarih)"></input>
                </div>

                <div className="newJobPostingItem">
                        <label>Çalışma Şekli</label>
                        <div className="newJobPostingWorkingTypes">

                            <label class="newJobPostingWorkingTypesContainer">Part Time (Yarı Zamanlı)
                                <input type="checkbox" name="parttime" id="parttime" value="parttime" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>

                            <label class="newJobPostingWorkingTypesContainer">Full Time (Tam Zamanlı)
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

                            <label class="newJobPostingWorkingTypesContainer">Dönemsel(Proje Bazlı)
                                <input type="checkbox" name="seasonal" id="seasonal" value="seasonal" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>
                        </div>
                    </div>

                    <div className="newJobPostingItem">
                        <label>Çalışma Türleri</label>
                        <div className="newJobPostingWorkingTypes">

                            <label class="newJobPostingWorkingTypesContainer">Uzaktan
                                <input type="checkbox" name="afar" id="afar" value="afar" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>

                            <label class="newJobPostingWorkingTypesContainer">İş Yerinde
                                <input type="checkbox" name="workplace" id="workplace" value="workplace" />
                                <span class="newJobPostingWorkingTypesCheckmark"></span>
                            </label>
                        </div>
                    </div>

                <div className="jobPostingActive">
                    {/* daha önce onaylanan ilanlarda aktiflik durumu düzenlenebilir. */}
                    <label>Aktif Mi</label>
                    <select name="active" id="active">
                        <option value="yes">Evet</option>
                        <option value="no">Hayır</option>
                    </select>
                </div>

            </form>

        </Formik>
        <div className="updateJobPostingButtonItem">
            <button className="updateJobPostingButton">Güncelle</button>
        </div>
    </div>
    )
}