import React, { useState, useEffect } from 'react'
import { Icon, Table, Menu } from 'semantic-ui-react'
import JobPostingFormService from '../../../services/jobPostingFormService';

export default function JobPostingFormReleaseDateList() {

    const [jobPostings, setJobPostings] = useState([]);
    useEffect(() => {
        let jobPostingFormService = new JobPostingFormService();
        jobPostingFormService.getJobPostingFormReleaseDate().then(result => setJobPostings(result.data.data))
    }, [])
    return (
        <div>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employer CompanyName</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>Number Of Open Positions</Table.HeaderCell>
                        <Table.HeaderCell>Release Date</Table.HeaderCell>
                        <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPostings.map(jobPosting => (
                            <Table.Row key={jobPosting.id}>
                                <Table.Cell>{jobPosting.employerCompanyName}</Table.Cell>
                                <Table.Cell>{jobPosting.jobPositionTitle}</Table.Cell>
                                <Table.Cell>{jobPosting.jobDescription}</Table.Cell>
                                <Table.Cell>{jobPosting.numberOfOpenPositions}</Table.Cell>
                                
                                <Table.Cell>{jobPosting.releaseDate}</Table.Cell>
                                <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
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
