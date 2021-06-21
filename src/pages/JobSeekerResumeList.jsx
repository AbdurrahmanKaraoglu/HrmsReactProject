import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { Icon, Table, Menu } from 'semantic-ui-react';
import ResumeService from '../services/resumeService';

export default function JobSeekerResumeList() {
    let {id} = useParams();
    const [jobSeekerResume, setjobSeekerResume] = useState([]);

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getAllByJobSeeker(id).then(result => setjobSeekerResume(result.data.data))
    }, [])
    return (
        <div>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>

                        <Table.HeaderCell>Github Address</Table.HeaderCell>
                        <Table.HeaderCell>Linkedin Address</Table.HeaderCell>
                        <Table.HeaderCell>Cover Letter</Table.HeaderCell>
                        <Table.HeaderCell>Created Date</Table.HeaderCell>

                        <Table.HeaderCell>School Name</Table.HeaderCell>
                        <Table.HeaderCell>School Department</Table.HeaderCell>
                        <Table.HeaderCell>Started Date</Table.HeaderCell>
                        <Table.HeaderCell>Ended Date</Table.HeaderCell>
                        <Table.HeaderCell>Creation Date</Table.HeaderCell>


                        
                        <Table.HeaderCell>updatedDate</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobSeekerResume.map((resume) => (
                            <Table.Row key={resume.id}>
                                <Table.Cell>{resume.jobSeekerFirstName}</Table.Cell>
                                <Table.Cell>{resume.jobSeekerLastName}</Table.Cell>
                                <Table.Cell>{resume.githubAddress}</Table.Cell>
                                <Table.Cell>{resume.linkedinAddress}</Table.Cell>
                                <Table.Cell>{resume.coverLetter}</Table.Cell>
                                <Table.Cell>{resume.createdDate}</Table.Cell>

                                <Table.Cell>{resume.educationInformations.id}</Table.Cell>
                                <Table.Cell>{resume.educationInformations.schoolName}</Table.Cell>
                                <Table.Cell>{resume.educationInformations.schoolDepartment}</Table.Cell>
                                <Table.Cell>{resume.educationInformations.startedDate}</Table.Cell>
                                <Table.Cell>{resume.educationInformations.endedDate}</Table.Cell>
                                <Table.Cell>{resume.educationInformations.creationDate}</Table.Cell>

                                <Table.Cell>{resume.updatedDate}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
