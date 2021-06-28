import React from 'react'
import "./widgetSm.css"
import { Visibility, Work, LocationOn, Phone, Email, People, Web } from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Şirket Genel Bakışı</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <Work className="widgetIcon" />
                    <span className="widgetSmUserTitle"> Graphic Designe</span>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmUser">
                        <LocationOn className="widgetIcon" />
                        <span className="widgetSmUserTitle"> Los Angeles Califonia PO</span>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmUser">
                        <Phone className="widgetIcon" />
                        <span className="widgetSmUserTitle"> 0145636941</span>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmUser">
                        <Email className="widgetIcon" />
                        <span className="widgetSmUserTitle"> webstrot@example.com
                        </span>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmUser">
                        <People className="widgetIcon" />
                        <span className="widgetSmUserTitle"> 20-50</span>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmUser">
                        <Web className="widgetIcon" />
                        <span className="widgetSmUserTitle"> www.webstrot.com
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}