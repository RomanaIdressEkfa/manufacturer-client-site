import { useEffect, useState } from "react";

const ForReviews = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://obscure-headland-49513.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return [services, setServices];
};

export default ForReviews;