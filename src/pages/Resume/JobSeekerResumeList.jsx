import React, { useState, useEffect } from 'react';
import ResumeService from '../../services/resumeService';
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import '../Resume/JobSeekerResumeList.css'

export default function JobSeekerResumeList() {
    const [jobSeekerResume, setjobSeekerResume] = useState([]);
    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getAll().then((result) => setjobSeekerResume(result.data.data))
    }, [])
    return (
        <div>
            <hr />
            <h3> CV Listeleri </h3>
            <Table celled selectable>
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
                {jobSeekerResume.map((resume, i) => {
                    return (
                        <Table.Body key={i}>
                            {
                                <Table.Row key={i}>
                                    <Table.Cell className='resumecell'>
                                        <Link to={`/allcvinformationofthecandidatepage/${resume.jobSeekerId}`}>
                                            {resume.jobSeekerFirstName}
                                        </Link>

                                    </Table.Cell>
                                    <Table.Cell>{resume.jobSeekerLastName}</Table.Cell>
                                    <Table.Cell>{resume.githubAddress}</Table.Cell>
                                    <Table.Cell>{resume.linkedinAddress}</Table.Cell>
                                    <Table.Cell>{resume.coverLetter}</Table.Cell>
                                    <Table.Cell>{resume.createdDate}</Table.Cell>
                                    <Table.Cell>{resume.updatedDate}</Table.Cell>
                                </Table.Row>
                            }
                        </Table.Body>
                    )
                })}
            </Table>
        </div>
    );
}