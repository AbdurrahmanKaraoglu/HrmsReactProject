import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">İş İlanlarına Başvuru Sayısı</span>
                <div className="featuredNumberContainer">
                    <span className="featuredNumber">450</span>
                    <span className="featuredNumberRate">-350 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Geçen Aya Kıyasla</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">İlanların Görüntülenme Sayısı</span>
                <div className="featuredNumberContainer">
                    <span className="featuredNumber">2225</span>
                    <span className="featuredNumberRate">+3240 <ArrowUpward className="featuredIcon" /></span>
                </div>
                <span className="featuredSub">Geçen Aya Kıyasla</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">İlanların Favoriye Eklenme Sayısı</span>
                <div className="featuredNumberContainer">
                    <span className="featuredNumber">3423</span>
                    <span className="featuredNumberRate">+3640 <ArrowUpward className="featuredIcon" /></span>
                </div>
                <span className="featuredSub">Geçen Aya Kıyasla</span>
            </div>
        </div>
    )
}