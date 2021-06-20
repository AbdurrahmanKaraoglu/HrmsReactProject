import React, { useState, useEffect } from 'react';
import { Icon, Table, Menu } from 'semantic-ui-react';
import React from 'react'
import ResumeService from '../services/resumeService';




export default function JobSeekerResumeList() {
    const [jobSeekerResume, setjobSeekerResume] = useState({});

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getAllByJobSeeker().then(result => setjobSeekerResume(result.data.data))
    }, [])
    return (
        <div>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>

                        <Table.HeaderCell>githubAddress</Table.HeaderCell>
                        <Table.HeaderCell>linkedinAddress</Table.HeaderCell>
                        <Table.HeaderCell>coverLetter</Table.HeaderCell>
                        <Table.HeaderCell>createdDate</Table.HeaderCell>

                        <Table.HeaderCell>schoolName</Table.HeaderCell>
                        <Table.HeaderCell>schoolDepartment</Table.HeaderCell>
                        <Table.HeaderCell>startedDate</Table.HeaderCell>
                        <Table.HeaderCell>endedDate</Table.HeaderCell>

                        <Table.HeaderCell>foreignLanguageName</Table.HeaderCell>
                        <Table.HeaderCell>foreignLanguageLevel</Table.HeaderCell>
                        <Table.HeaderCell>programmingOrTechnologyName</Table.HeaderCell>
                        <Table.HeaderCell>companyName</Table.HeaderCell>
                        <Table.HeaderCell>jobPosition</Table.HeaderCell>
                        <Table.HeaderCell>startedDate</Table.HeaderCell>
                        <Table.HeaderCell>endedDate</Table.HeaderCell>
                        <Table.HeaderCell>creationDate</Table.HeaderCell>

                        
                        <Table.HeaderCell>updatedDate</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobSeekerResume.map(resume => (
                            <Table.Row key={resume.id}>
                                <Table.Cell>{resume.jobSeekerFirstName}</Table.Cell>
                                <Table.Cell>{resume.jobSeekerLastName}</Table.Cell>
                                <Table.Cell>{resume.githubAddress}</Table.Cell>
                                <Table.Cell>{resume.linkedinAddress}</Table.Cell>
                                <Table.Cell>{resume.coverLetter}</Table.Cell>
                                <Table.Cell>{resume.createdDate}</Table.Cell>

                                <Table.Cell>{resume.educationInformations.schoolName}</Table.Cell>
                                <Table.Cell>{resume.educationInformations.schoolDepartment}</Table.Cell>
                                <Table.Cell>{resume.educationInformations.startedDate}</Table.Cell>
                                <Table.Cell>{resume.educationInformations.endedDate}</Table.Cell>


                                <Table.Cell>{resume.foreignLanguageKnowledges.foreignLanguageName}</Table.Cell>
                                <Table.Cell>{resume.foreignLanguageKnowledges.foreignLanguageLevel}</Table.Cell>
                                <Table.Cell>{resume.foreignLanguageKnowledges.creationDate}</Table.Cell>

                                <Table.Cell>{resume.programmingLanguagesOrTechnologies.programmingOrTechnologyName}</Table.Cell>


                                <Table.Cell>{resume.workExperiences.companyName}</Table.Cell>
                                <Table.Cell>{resume.workExperiences.companyName.creationDate}</Table.Cell>
                                <Table.Cell>{resume.workExperiences.companyName.endedDate}</Table.Cell>
                                <Table.Cell>{resume.workExperiences.companyName.jobPosition.title}</Table.Cell>
                                <Table.Cell>{resume.workExperiences.companyName.startedDate}</Table.Cell>

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
