import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div id='appoinment'>
            <AppoinmentBanner selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}></AppoinmentBanner>
            <AvailableAppointments selectedDate={selectedDate}></AvailableAppointments>
        </div>
    );
};

export default Appoinment;