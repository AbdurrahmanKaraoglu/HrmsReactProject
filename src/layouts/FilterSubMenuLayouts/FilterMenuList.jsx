import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Table,
    Button,
    Header,
    Icon,
    Pagination,
    Dropdown,
    Item,
    Label
} from "semantic-ui-react";
import JobPostingFormService from '../../services/jobPostingFormService';
import JobAdFilter from './FilterSubMenu';
import { useSelector } from 'react-redux';
// import FavoriteService from '../services/FavoriteService';
import { toast } from 'react-toastify';
import './filterMenuList.css'

export default function FilterMenuList() {

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
            </div>
      
    )
}
