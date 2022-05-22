import React from 'react';
import ForReviews from '../Hooks/ForReviews';
import Service from './Service';

const Services = (props) => {
    const [services, setServices] = ForReviews();
    return (
        <div>
            <h1 className='text-5xl font-bold mb-9 mt-8 text-center '>Total Customer services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    services.map(service => <Service key={service.id}
                        service={service} >
                    </Service>)
                }
            </div>
        </div >
    );
};

export default Services;