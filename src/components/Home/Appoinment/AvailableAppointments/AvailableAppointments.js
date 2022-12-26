import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <section className='my-16'>
         <p className='text-center text-blue-500 font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
        
        </div>
      
    </section>

    );
};

export default AvailableAppointments;