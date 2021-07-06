import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Table,
    Button,
    Header,
    Icon,
    Pagination,
    Dropdown
} from "semantic-ui-react";
import JobPostingFormService from '../services/jobPostingFormService';
import JobAdFilter from '../layouts/FilterSubMenuLayouts/FilterSubMenu';
import { useSelector } from 'react-redux';
// import FavoriteService from '../services/FavoriteService';
import { toast } from 'react-toastify';

export default function JobAds() {

 
    let [favorites, setFavorites] = useState([]);

    //   const {authItem} = useSelector(state => state.auth)

    let [activePage, setActivePage] = useState(1);
    let [filterOption, setFilterOption] = useState({});
    let [pageSize, setPageSize] = useState(2);
    let [totalPageSize, setTotalPageSize] = useState(0);

    const [jobPostings, setJobPostings] = useState([]);
    useEffect(() => {
        let jobPostingFormService = new JobPostingFormService();
        jobPostingFormService.getJobPostingForm().then(result => setJobPostings(result.data.data))
    }, [])


    //   useEffect(() => {
    //     let jobAdService = new JobAdService();
    //     // let favoriteService = new FavoriteService();
    //     jobAdService.getPageableAndFilterJobPostings(activePage, pageSize, filterOption)
    //     .then((result) => {
    //       setJobAds(result.data.data);
    //       setTotalPageSize(parseInt(result.data.message));
    //     });
    //     if(authItem[0].loggedIn===true && authItem[0].user.userType===1){
    //       favoriteService.getByCandidateId(authItem[0].user.id).then((result) => {
    //         setFavorites(result.data.data.map((favoriteAd) => (
    //           favoriteAd.jobAd.id
    //         )))
    //       })
    //     }
    //   }, [filterOption, activePage, pageSize,authItem]);

    const handleFilterClick = (filterOption) => {
        console.log(filterOption)
        if (filterOption.cityId.length === 0) {
            filterOption.cityId = null;
        }
        if (filterOption.jobPositionId.length === 0) {
            filterOption.jobPositionId = null;
        }
        if (filterOption.workPlaceId.length === 0) {
            filterOption.workPlaceId = null;
        }
        if (filterOption.workTimeId.length === 0) {
            filterOption.workTimeId = null;
        }
        setFilterOption(filterOption);
        setActivePage(1);
    }

    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage);
    }

    //   let favoriteService = new FavoriteService();
    //   const handleAddFavorite = (jobAdId) => {
    //     favoriteService.addFavorite(authItem[0].user.id,jobAdId).then((result) => {
    //       toast.success(result.data.message)
    //       favorites.push(jobAdId)
    //       setFavorites([...favorites])
    //     }).catch((result) => {
    //       toast.error(result.response.data.message)
    //     })
    //   }

    const handlePaginationSizeChange = (value) => {
        setPageSize(value);
        console.log(pageSize)
    }

    const paginationOptions = [
        { key: 2, text: "2 İlan", value: 2 },
        { key: 10, text: "10 İlan", value: 10 },
        { key: 25, text: "25 İlan", value: 25 },
        { key: 50, text: "50 İlan", value: 50 },
        { key: 100, text: "100 İlan", value: 100 },
    ];

    
    return (
      
        <div>
              
            <JobAdFilter clickEvent={handleFilterClick} />

            <Header as="h2">
                <Icon name="bullhorn" />
                <Header.Content>İş İlanları</Header.Content>
            </Header>

            {/* <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İd</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>City Name</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>Number Of Open Positions</Table.HeaderCell>
                        <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
                        <Table.HeaderCell>Release Date</Table.HeaderCell>
                        <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPostings.map(jobPosting => (
                            <Table.Row key={jobPosting.id}>
                                <Table.Cell>{jobPosting.id}</Table.Cell>
                                <Table.Cell>
                                    {jobPosting.employerCompanyName}
                                </Table.Cell>
                                <Table.Cell>{jobPosting.jobPositionTitle}</Table.Cell>
                                <Table.Cell>{jobPosting.citieCityName}</Table.Cell>
                                <Table.Cell>{jobPosting.jobDescription}</Table.Cell>
                                <Table.Cell>{jobPosting.numberOfOpenPositions}</Table.Cell>
                                <Table.Cell>{jobPosting.maximumSalary}</Table.Cell>
                                <Table.Cell>{jobPosting.minimumSalary}</Table.Cell>
                                <Table.Cell>{jobPosting.releaseDate}</Table.Cell>
                                <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
</Table> */}
    </div>
    )
}