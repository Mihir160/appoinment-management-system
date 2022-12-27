import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `https://appoinment-management-system-server.vercel.app/bookings?email=${user?.email}`;
    console.log(url)

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                  
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBooking = booking => {
        fetch(`https://appoinment-management-system-server.vercel.app/bookings/${booking._id}`, {
            method: 'DELETE', 
            headers: {
              
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Booking deleted successfully`)
            }
        })
    }
    return (
        <div>
        <h3 className="text-3xl mb-5">My Appointments</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                  
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    { bookings &&
                        bookings?.map((booking, i) => <tr key={booking._id}>
                  
                            <td>{booking.patient}</td>
                            <td>{booking.treatment}</td>
                            <td>{booking.appointmentDate}</td>
                            <td>{booking.slot}</td>
                             <td><button onClick={ ()=> handleDeleteBooking(booking)} className='btn btn-sm'>Cancel</button>
                             </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyAppointment;