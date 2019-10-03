import React, { Component } from "react";
import ReactLightCalendar from "@lls/react-light-calendar";
import "@lls/react-light-calendar/dist/index.css";

const DAY_LABELS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
const MONTH_LABELS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

class Calendar extends Component {


    render = () => {


        return (
            <ReactLightCalendar
                dayLabels={DAY_LABELS}
                monthLabels={MONTH_LABELS}
                onChange={this.props.calendarOnChange}
                startDate={this.props.startDate}
                endDate={this.props.endDate}
                {...this.props} // Add parent's additionnal props
            />
        );
    };
}

export default Calendar;
