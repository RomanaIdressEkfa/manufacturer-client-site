import React from 'react';
import ForReviews from '../Hooks/ForReviews';
import Service from './Service';

const Services = (props) => {
    const [services, setServices] = ForReviews();
    return (
        <div className='mt-16'>
            <h1 className="text-5xl font-bold text-center m-5">Equipment Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    services.slice(0, 6).map(service => <Service key={service.id}
                        service={service} >
                    </Service>)
                }
            </div>
        </div >
    );
};

export default Services;