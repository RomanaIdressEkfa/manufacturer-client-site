import { useEffect, useState } from "react";

const ForReviews = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return [services, setServices];
};

export default ForReviews;