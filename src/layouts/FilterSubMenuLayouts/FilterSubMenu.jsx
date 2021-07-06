import React, { useEffect, useState } from 'react'
import CityService from '../../services/citiesService'
import JobPositionService from '../../services/jobPositionService';
import WorkPlaceService from '../../services/workPlaceService';
import WorkTimeService from '../../services/workTimeService';
import { Label, Dropdown, Segment, Checkbox, Button } from 'semantic-ui-react'
import './FilterSubMenu.css'

import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import FilterMenuList from './FilterMenuList';
import JobAdFilter from './FilterSubMenu';
import JobPostingFormService from '../../services/jobPostingFormService';


export default function FilterSubMenu({ clickEvent }) {

    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    const [workPlaces, setWorkPlaces] = useState([]);
    const [workTimes, setWorkTimes] = useState([]);


    useEffect(() => {
        let cityService = new CityService()
        cityService.getAll().then(result => setCities(result.data.data))

        let jobPositionService = new JobPositionService()
        jobPositionService.getJobposition().then(result => setJobPositions(result.data.data))

        let workPlaceService = new WorkPlaceService()
        workPlaceService.getWorkPlaces().then(result => setWorkPlaces(result.data.data))

        let workTimeService = new WorkTimeService();
        workTimeService.getWorkTimes().then(result => setWorkTimes(result.data.data))
    }, [])

    const [cityIndex, setCityIndex] = useState([])
    const handleChangeCity = (e, { value }) => {
        setCityIndex(value)
    }

    const [jobPositionIndex] = useState([])
    const handleChangeJobPosition = (e, { value, checked }) => {
        if (checked) {
            jobPositionIndex.push(value)
        } else {
            let index = jobPositionIndex.indexOf(value)
            if (index > -1) {
                jobPositionIndex.splice(index, 1)
            }
        }
    }

    const [workPlaceIndex] = useState([])
    const handleChangeWorkPlace = (e, { value, checked }) => {
        if (checked) {
            workPlaceIndex.push(value)
        } else {
            let index = workPlaceIndex.indexOf(value)
            if (index > -1) {
                workPlaceIndex.splice(index, 1)
            }
        }
    }

    const [workTimeIndex] = useState([])
    const handleChangeWorkTime = (e, { value, checked }) => {
        if (checked) {
            workTimeIndex.push(value)
        } else {
            let index = workTimeIndex.indexOf(value)
            if (index > -1) {
                workTimeIndex.splice(index, 1)
            }
        }
    }

    return (

        <div>

            <div className='filter__section'>
                <div className='filter__wrapper'>
                    <div className='filter__container'>
                        <div className='filter__container-card'>
                            <div className='filter__container-cardInfo'>
                                <Segment color="white" raised>
                                    <Label size="large">Şehir</Label>
                                    <Dropdown
                                        placeholder="Şehir seçiniz"
                                        selection
                                        search
                                        multiple
                                        clearable
                                        options={cities.map((city, index) => {
                                            return { text: city.cityName, key: city.index, value: city.id }
                                        })}
                                        onChange={handleChangeCity}
                                        value={cityIndex}
                                    />
                                </Segment>
                                <Segment color="white" raised>
                                    <Label attached="top" size="large">İş Pozisyonu</Label>
                                    {
                                        jobPositions.map(jobPosition => (
                                            <Checkbox
                                                key={jobPosition.id}
                                                label={jobPosition.title}
                                                onChange={handleChangeJobPosition}
                                                value={jobPosition.id}
                                            />
                                        ))
                                    }
                                </Segment>
                                <Segment color="white" raised>
                                    <Label attached="top" size="large">Çalışma Yeri</Label>
                                    {
                                        workPlaces.map(workPlace => (
                                            <Checkbox
                                                key={workPlace.id}
                                                label={workPlace.name}
                                                onChange={handleChangeWorkPlace}
                                                value={workPlace.id}
                                            />
                                        ))
                                    }
                                </Segment>
                                <Segment color="white" raised>
                                    <Label attached="top" size="large">Çalışma Süresi</Label>
                                    {
                                        workTimes.map(workTime => (
                                            <Checkbox
                                                key={workTime.id}
                                                label={workTime.name}
                                                onChange={handleChangeWorkTime}
                                                value={workTime.id}
                                            />
                                        ))
                                    }
                                </Segment>
                                <button
                                    className='button'
                                    onClick={() => clickEvent({ cityId: cityIndex, jobPositionId: jobPositionIndex, workPlaceId: workPlaceIndex, workTimeId: workTimeIndex })}
                                >
                                    Filtrele
                                </button>
                            </div>
                            
                        </div>


                        <FilterMenuList />





                      
                    </div>
                    
                </div>
            </div>

        </div>
    )
}