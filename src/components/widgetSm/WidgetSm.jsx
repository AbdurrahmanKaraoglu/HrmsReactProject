import React from 'react'
import "./widgetSm.css"
import {  Work, LocationOn, Phone, Email, People, Web } from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Şirket Genel Bakışı</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <Work className="widgetIcon" />
                    <div className="widgetSmFeature">
                        <span className="widgetSmFeatureTitle">Job Description:</span>
                        <span className="widgetSmFeatureInformation">Graphic Designe</span>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <LocationOn className="widgetIcon" />
                    <div className="widgetSmFeature">
                        <span className="widgetSmFeatureTitle">Location:</span>
                        <span className="widgetSmFeatureInformation">Los Angeles Califonia PO</span>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <Phone className="widgetIcon" />
                    <div className="widgetSmFeature">
                        <span className="widgetSmFeatureTitle">Phone:</span>
                        <span className="widgetSmFeatureInformation">0145636941</span>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <Email className="widgetIcon" />
                    <div className="widgetSmFeature">
                        <span className="widgetSmFeatureTitle">Email:</span>
                        <span className="widgetSmFeatureInformation">webstrot@example.com
                        </span>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <People className="widgetIcon" />
                    <div className="widgetSmFeature">
                        <span className="widgetSmFeatureTitle">Compant Size:</span>
                        <span className="widgetSmFeatureInformation">20-50</span>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <Web className="widgetIcon" />
                    <div className="widgetSmFeature">
                        <span className="widgetSmFeatureTitle">Website:</span>
                        <span className="widgetSmFeatureInformation">www.webstrot.com
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}