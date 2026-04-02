// src/components/LabMapItem.js
import React from 'react';

const LabMapItem = ({ labmap }) => {
    return (
        <div className="card m-2 p-3">
            <h5 className="card-title">{labmap.name}</h5>
            <p><strong>Mã Phòng:</strong> {labmap.id}</p>
            <p><strong>Số Máy:</strong> {labmap.phone}</p>
            <p><strong>Quản Lý:</strong> {labmap.manager}</p>
            <p><strong>Email:</strong> {labmap.email}</p>
        </div>
    );
};

export default LabMapItem;
