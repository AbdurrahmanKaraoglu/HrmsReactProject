import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ResumeService from '../../../services/resumeService';
import { Card, Image, Table } from 'semantic-ui-react'



export default function JobSeekerResumePage() {
    let { id } = useParams();
    const [jobSeekerResume, setjobSeekerResume] = useState([]);

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getAllByJobSeekerId(id).then((result) => setjobSeekerResume(result.data.data))
    }, [id])
    return (
        <div>
            {jobSeekerResume.map((resume, i) => {
                return (
                    <div>
                        <Card.Group >
                            <Card key={i}>
                                <Image src='https://avatars.githubusercontent.com/u/74272647?v=4' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{resume.jobSeekerFirstName}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{resume.createdDate}</span>
                                    </Card.Meta>
                                    <Card.Description>
                                    {resume.coverLetter}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                        <hr />
                        <h3> İş Arayan Bilgileri </h3>
                        <Table celled selectable key={i}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>İsim</Table.HeaderCell>
                                    <Table.HeaderCell>Soyisim</Table.HeaderCell>
                                    <Table.HeaderCell>Github Adresi</Table.HeaderCell>
                                    <Table.HeaderCell>Linkedin Adresi</Table.HeaderCell>
                                    <Table.HeaderCell>Ön Yazı</Table.HeaderCell>
                                    <Table.HeaderCell>Oluşturulma Tarihi</Table.HeaderCell>
                                    <Table.HeaderCell>Güncellenme Tarihi</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    <Table.Row key={i + 1}>
                                        <Table.Cell>{resume.jobSeekerFirstName}</Table.Cell>
                                        <Table.Cell>{resume.jobSeekerLastName}</Table.Cell>
                                        <Table.Cell>{resume.githubAddress}</Table.Cell>
                                        <Table.Cell>{resume.linkedinAddress}</Table.Cell>
                                        <Table.Cell>{resume.coverLetter}</Table.Cell>
                                        <Table.Cell>{resume.createdDate}</Table.Cell>
                                        <Table.Cell>{resume.updatedDate}</Table.Cell>
                                    </Table.Row>
                                }
                            </Table.Body>
                        </Table>
                        <hr />
                        <h3> Eğitim Bilgileri </h3>
                        <Table celled selectable >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                                    <Table.HeaderCell>Okul Bölümü</Table.HeaderCell>
                                    <Table.HeaderCell>Başlama Tarihi</Table.HeaderCell>
                                    <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {resume.educationInformations.map(function (education) {
                                    return (
                                        <Table.Row key={education.id}>
                                            <Table.Cell>{education.schoolName}</Table.Cell>
                                            <Table.Cell>{education.schoolDepartment}</Table.Cell>
                                            <Table.Cell>{education.startedDate}</Table.Cell>
                                            <Table.Cell >{education.endedDate}</Table.Cell>
                                        </Table.Row>
                                    )
                                })}
                            </Table.Body>
                        </Table>
                        <hr />
                        <h3> Yabancı Dil Bilgileri </h3>
                        <Table celled selectable >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Yabancı Dil Adı</Table.HeaderCell>
                                    <Table.HeaderCell>Yabancı Dil Seviyesi</Table.HeaderCell>
                                    <Table.HeaderCell>Oluşturulma Tarihi</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {resume.foreignLanguageKnowledges.map(function (foreignLanguage) {
                                    return (
                                        <Table.Row key={foreignLanguage.id}>
                                            <Table.Cell>{foreignLanguage.foreignLanguageName}</Table.Cell>
                                            <Table.Cell>{foreignLanguage.foreignLanguageLevel}</Table.Cell>
                                            <Table.Cell>{foreignLanguage.creationDate}</Table.Cell>

                                        </Table.Row>
                                    )
                                })}
                            </Table.Body>
                        </Table>
                        <hr />
                        <h3> Programlama Dilleri veya Teknolojileri </h3>
                        <Table celled selectable >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Programlama Veya Teknoloji Adı</Table.HeaderCell>
                                    <Table.HeaderCell>Oluşturulma Tarihi</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {resume.programmingLanguagesOrTechnologies.map(function (technologies) {
                                    return (
                                        <Table.Row key={technologies.id}>
                                            <Table.Cell>{technologies.programmingOrTechnologyName}</Table.Cell>
                                            <Table.Cell>{technologies.creationDate}</Table.Cell>
                                        </Table.Row>
                                    )
                                })}
                            </Table.Body>
                        </Table>
                        <hr />
                        <h3> İş Deneyimleri </h3>
                        <Table celled selectable >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                                    <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                                    <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
                                    <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
                                    <Table.HeaderCell>Oluşturulma Tarihi</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {resume.workExperiences.map(function (workExperience) {
                                    return (
                                        <Table.Row key={workExperience.id}>

                                            <Table.Cell>{workExperience.companyName}</Table.Cell>
                                            <Table.Cell>{workExperience.creationDate}</Table.Cell>
                                            <Table.Cell>{workExperience.endedDate}</Table.Cell>
                                            <Table.Cell>{workExperience.jobPosition.title}</Table.Cell>
                                            <Table.Cell>{workExperience.startedDate}</Table.Cell>
                                        </Table.Row>
                                    )
                                })}
                            </Table.Body>
                        </Table>
                        <br />
                        <hr />
                    </div>
                )
            })}
        </div>
    );
}