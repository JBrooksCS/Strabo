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

    state = {
        startDate: "",
        endDate: ""
    }
    onChange = (startDate, endDate) => this.setState({ startDate, endDate });

    render = () => {
        const { startDate, endDate } = this.state;

        return (
            <ReactLightCalendar
                dayLabels={DAY_LABELS}
                monthLabels={MONTH_LABELS}
                onChange={this.onChange}
                startDate={startDate}
                endDate={endDate}
                {...this.props} // Add parent's additionnal props
            />
        );
    };
}

export default Calendar;
