import React from 'react';
import BookService from '../BookService/BookService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <BookService />
        </div>
    );
};

export default Dashboard;