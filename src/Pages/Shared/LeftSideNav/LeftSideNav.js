import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategoris] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then(data => setCategoris(data))
    } , [])

    return (
        <div>
            <h4>All Category : {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;