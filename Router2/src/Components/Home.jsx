import React from 'react';
import Card from './Card';

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Site</h1>
            <img src="path_to_your_image" alt="Site Logo" />
            <div className="card-container">
                <Card title="Card 1" description="This is the first card" />
                <Card title="Card 2" description="This is the second card" />
                <Card title="Card 3" description="This is the third card" />
            </div>
        </div>
    );
};

export default Home;