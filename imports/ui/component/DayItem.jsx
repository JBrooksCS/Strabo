import React, { useState } from 'react';

export default function DayItem(props) {
    console.log(props)
    const day = new Date(props.day).toDateString()
    return (
        <p>{day}</p>
    )
}