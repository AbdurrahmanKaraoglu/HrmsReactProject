import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ResumeService from '../services/resumeService';
import { Card, Image, Table } from 'semantic-ui-react'



export default function JobSeekerResumeList() {
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
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Card.Group>

                        

                        <Table celled selectable key={i} inverted>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>First Name</Table.HeaderCell>
                                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                                    <Table.HeaderCell>githubAddress</Table.HeaderCell>
                                    <Table.HeaderCell>linkedinAddress</Table.HeaderCell>
                                    <Table.HeaderCell>coverLetter</Table.HeaderCell>
                                    <Table.HeaderCell>createdDate</Table.HeaderCell>
                                    <Table.HeaderCell>updatedDate</Table.HeaderCell>
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


                        <Table celled selectable >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>schoolName</Table.HeaderCell>
                                    <Table.HeaderCell>schoolDepartment</Table.HeaderCell>
                                    <Table.HeaderCell>startedDate</Table.HeaderCell>
                                    <Table.HeaderCell>endedDate</Table.HeaderCell>
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
                    </div>
                )
            })}
        </div>
    );
}