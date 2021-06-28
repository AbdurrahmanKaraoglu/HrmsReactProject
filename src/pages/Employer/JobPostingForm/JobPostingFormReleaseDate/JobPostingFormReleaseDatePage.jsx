import React, { useState, useEffect } from 'react'
import { Item, Label, Button, Icon } from 'semantic-ui-react'
import JobPostingFormService from '../../../../services/jobPostingFormService';
import './JobPostingFormReleaseDatePage.css'
import TablePagination from '@material-ui/core/TablePagination';

export default function JobPostingFormReleaseDatePage() {
    const [jobPostings, setJobPostings] = useState([]);
    useEffect(() => {
        let jobPostingFormService = new JobPostingFormService();
        jobPostingFormService.getJobPostingFormReleaseDate().then(result => setJobPostings(result.data.data))
    }, [])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className="myDiv">
            {
                jobPostings.map((jobPosting, i) => (

                    <Item.Group key={i} divided>
                        <Item key={i} >
                            <Item.Image src={jobPosting.employerCompanyPictureAddress} size='small' />
                            <Item.Content >
                                <br /><h2 className="header"> <Item.Header>{jobPosting.jobPositionTitle}</Item.Header></h2>
                                <Item.Meta>
                                    <span className='companyname'>{jobPosting.employerCompanyName}</span>
                                </Item.Meta>
                                <Item.Description> {jobPosting.jobDescription}</Item.Description>
                                <Item.Extra>
                                    <Label icon='user circle outline' content={jobPosting.numberOfOpenPositions} />
                                    <Label icon='calendar alternate outline' content={jobPosting.releaseDate} />
                                    <Label icon='calendar alternate' content={jobPosting.applicationDeadline} />
                                </Item.Extra>
                                <Item.Extra>
                                    <div>
                                        <Button primary floated='right'>
                                            Detaylar
                                            <Icon name='right chevron' />
                                        </Button>
                                    </div>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                ))
            }
            <TablePagination
                component="div"
                count={100}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]}
            >
            </TablePagination>
        </div>
    )
}