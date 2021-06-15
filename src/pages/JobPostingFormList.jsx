import React, { useState, useEffect } from 'react'
import { Icon, Item, Label, Button } from 'semantic-ui-react'
import JobPostingFormService from '../services/jobPostingFormService';

export default function JobPostingFormList() {
    const [jobPostings, setJobPostings] = useState([]);
    useEffect(() => {
        let jobPostingFormService = new JobPostingFormService();
        jobPostingFormService.getJobPostingForm().then(result => setJobPostings(result.data.data))
    }, [])
    return (
        <div>
            <Item.Group divided>{
                jobPostings.map(jobPosting => (
                    <Item key={jobPosting.id}>
                        <Item.Image src={jobPosting.employerCompanyPictureAddress} />
                        <Item.Content>
                            <Item.Header as='a'>{jobPosting.employerCompanyName}</Item.Header>
                            <Item.Meta>
                                <span className='cinema'>{jobPosting.jobPositionTitle}</span>
                            </Item.Meta>
                            <Item.Description>{jobPosting.jobDescription}</Item.Description>
                            <Item.Extra>
                                <Label.Group tag>
                                    <Label icon="map marker alternate" content={jobPosting.citieCityName} />
                                    <Label icon="dollar sign" content={jobPosting.minimumSalary} />
                                    <Label icon="dollar sign" content={jobPosting.maximumSalary} />
                                    <Label icon="user" content={jobPosting.numberOfOpenPositions} />
                                    <Label icon="calendar" content={jobPosting.releaseDate} />
                                    <Label icon="calendar alternate outline" content={jobPosting.applicationDeadline} />
                                </Label.Group>
                                <Button primary floated='right'>
                                    More Information
                                    <Icon name='right chevron' />
                                </Button>



                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))
            }

            </Item.Group>


        </div>
    )
}
