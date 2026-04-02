// src/components/LabMapList.js
import React, { useEffect, useState } from 'react';
import LabMapItem from './LabMapItem';

const LabMapList = ({ labmaps }) => {
    return (
        <div className="row">
            {labmaps.map(labmap => (
                <LabMapItem key={labmap.id} labmap={labmap} />
            ))}
        </div>
    );
};

export default LabMapList;
