import React, { useState } from 'react'
import './myJobPostings.css'
import { DataGrid } from '@material-ui/data-grid';
import { Visibility, Edit, Delete } from '@material-ui/icons';
import { myJobPostingsRows } from './dummyData'
import { Link } from "react-router-dom";

export default function MyJobPostings() {

    const [data, setData] = useState(myJobPostingsRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }


    // "employerCompanyName": "string",
    // "employerCompanyPictureAddress": "string",

    // "id": 0,
    // "jobPositionTitle": "string",
    // "jobDescription": "string",
    // "citieCityName": "string",
    // "numberOfOpenPositions": 0,
    // "maximumSalary": 0,
    // "minimumSalary": 0,
    // "releaseDate": "string"
    // "applicationDeadline": "string",
    // "active": true,

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'jobPositionTitle',
            headerName: 'İş Pozisyonu',
            width: 150
        },
        {
            field: 'jobDescription',
            headerName: 'İş Açıklaması',
            width: 180
        },
        {
            field: 'cityName',
            headerName: 'Şehir',
            width: 130
        },

        {
            field: 'numberOfOpenPositions',
            headerName: 'Açık Pozisyon Sayısı',
            type: 'number',
            width: 200,
        },
        {
            field: 'minimumSalary',
            headerName: 'Min Maaş',
            sortable: false,
            width: 110
        },
        {
            field: 'maximumSalary',
            headerName: 'Max Maaş',
            sortable: false,
            width: 110
        },
        {
            field: 'releaseDate',
            headerName: 'Yayınlanma Tarihi',
            width: 190
        },
        {
            field: 'applicationDeadline',
            headerName: 'Son Başvuru Tarihi',
            width: 190
        },
        {
            field: 'status',
            headerName: 'Durum',
            width: 120
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            renderCell: (params) => {
                return (
                    <>

                        <Link to={"/myjobposting/" + params.row.id}>
                            <Visibility className="iconVisibility" />
                        </Link>
                        <Link to={"/update/myjobposting/" + params.row.id}>
                            <Edit className="iconEdit" />
                        </Link>
                        <Delete className="iconDelete" onClick={() => handleDelete(params.row.id)} />
                    </>

                    // <div className="jobPostingsList">
                    //     <td class="icontd">
                    //     <ul class="iconul">
                    //         <li class="iconli">
                    //             <Visibility className="jobPostingIcon" />
                    //         </li>
                    //         <li class="iconli">
                    //             <Edit className="jobPostingIcon" />
                    //         </li>
                    //         <li class="iconli">
                    //             <Delete className="jobPostingIcon" />
                    //         </li>
                    //     </ul>
                    // </td>
                    // </div>
                )
            }
        }
    ];


    return (
        <div className="myJobPostings">
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={10} />
        </div>
    )
}
