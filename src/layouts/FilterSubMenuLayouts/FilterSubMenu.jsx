import React, { useState, useEffect } from 'react'
import { Checkbox, Input, Menu, Button, Dropdown } from 'semantic-ui-react'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './FilterSubMenu.css'
import CitiesService from '../../services/citiesService';

const cityOptions = [];

export default function FilterSubMenu() {

    const [cities, setCities] = useState([]);
    useEffect(() => {
        let citiesService = new CitiesService();
        citiesService.getAll().then(result => setCities(result.data.data))
    }, []);

    cities.map((city) =>
        cityOptions.push({ key: city.id, text: city.cityName, value: city.id })
    );

    return (

        <div className="myDiv">

            <Menu vertical>
                <Menu.Item>
                    <Input placeholder='Ara...' />
                </Menu.Item>

                <Accordion className='accordion'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h3> Çalışma Şekli </h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Menu.Menu>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Sürekli / Tam zamanlı' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Yarı zamanlı / Part Time' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Serbest Zamanlı' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Dönemsel / Proje bazlı' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Stajyer' }} />
                            </Menu.Item>
                        </Menu.Menu>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='accordion'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h3> Pozisyon Seviyesi </h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Menu.Menu>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Üst düzey yönetici' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Orta düzey yönetici' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Yönetici adayı' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Uzman' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Yeni Başlayan' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Serbest / Freelancer' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'İşçi ve Mavi Yaka' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Uzman Yardımcısı' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Eleman' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Hizmet Personeli' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Stajyer' }} />
                            </Menu.Item>
                        </Menu.Menu>
                    </AccordionDetails>
                </Accordion>




                <Accordion className='accordion'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h3> Eğitim Seviyesi </h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Menu.Menu>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Doktora - Mezun' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Doktora - Öğrenci' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Yüksek Lisans - Mezun' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Yüksek Lisans - Öğrenci' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Üniversite - Mezun' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Üniversite - Öğrenci' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Meslek Yüksekokulu - Mezun' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Meslek Yüksekokulu - Öğrenci' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Üniversite - Mezun' }} />
                            </Menu.Item>
                            <Menu.Item>
                                <Checkbox label={{ children: 'Üniversite - Öğrenci' }} />
                            </Menu.Item>
                        </Menu.Menu>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='accordion'>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h3> Şehir Seçin </h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Dropdown
                            placeholder='Şehir Seçin'
                            fluid
                            multiple
                            search
                            selection
                            options={cityOptions}
                        />
                    </AccordionDetails>
                </Accordion>
                <Menu.Item>
                    <Button fluid primary>Uygula</Button>
                </Menu.Item>
            </Menu>
        </div>
    )
}