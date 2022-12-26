import { DayPicker } from 'react-day-picker';
const AppoinmentBanner = ({selectedDate, setSelectedDate}) => {
   
    return (
        <header className='my-6'>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://media.istockphoto.com/id/1257842474/vector/dentist-examining-patient-with-nurse-assistance.jpg?s=612x612&w=0&k=20&c=FCHqmBjnMEsV1g6ZXDXCbkpwvtonp3qMZuxBasvuT_0=" alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mr-6 sm:w-full'>
                    <DayPicker 
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                   
                </div>
            </div>
        </div>
    </header>
    );
};

export default AppoinmentBanner;