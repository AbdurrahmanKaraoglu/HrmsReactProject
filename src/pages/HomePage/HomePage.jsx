import React, { useState, useEffect } from 'react'
import { Item, Label,Button,Icon } from 'semantic-ui-react'
import JobPostingFormService from '../../services/jobPostingFormService';
import './HomePage.css'


export default function HomePage() {
    const [jobPostings, setJobPostings] = useState([]);
    useEffect(() => {
        let jobPostingFormService = new JobPostingFormService();
        jobPostingFormService.getJobPostingForm().then(result => setJobPostings(result.data.data))
    }, []);
    
    return (
        
        <div class="myDiv"> 
            {
                jobPostings.map((jobPosting, i) => (

                    <Item.Group key={i} divided>
                        <Item key={i} >
                      
                            <Item.Image src={jobPosting.employerCompanyPictureAddress}  size='small'/>
                            <Item.Content > 
                               <br/><h2 class="header"> <Item.Header>{jobPosting.jobPositionTitle}</Item.Header></h2>
                                <Item.Meta>
                                    <span className='companyname'>{jobPosting.employerCompanyName}</span>
                                </Item.Meta>
                                <Item.Description> {jobPosting.jobDescription}</Item.Description>
                                <Item.Extra>
                                    <Label icon='map marker alternate' content={jobPosting.citieCityName} />
                                    <Label icon='dollar sign' content={jobPosting.minimumSalary} />
                                    <Label icon='dollar sign' content={jobPosting.maximumSalary} />
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
        </div>
    )
}