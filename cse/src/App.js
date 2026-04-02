// src/App.js
import React, { useState } from 'react';
import './App.css';
import LabMapList from './components/LabMapList';
import CreateLabMapForm from './components/CreateLabMapForm';
import { getLabMaps } from './data';
import { useEffect } from 'react';
import { Form, Input } from 'antd';

const App = () => {
    const [labmaps, setLabMaps] = useState(getLabMaps());
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        localStorage.setItem('labmaps', JSON.stringify(labmaps));
    }, [labmaps]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const addLabMap = (newLabMap) => {
        setLabMaps([...labmaps, newLabMap]);
    };

    const filteredLabMaps = labmaps.filter(labmap =>
        labmap.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1>Quản Lý Phòng LabMap</h1>

            <Form layout="inline" style={{ marginBottom: '20px' }}>
                <Input
                    placeholder="Tìm kiếm..."
                    onChange={handleSearch}
                    style={{ marginRight: '10px' }}
                />
            </Form>

            <CreateLabMapForm addLabMap={addLabMap} />

            <h2>Danh sách Phòng LabMap</h2>
            <LabMapList labmaps={filteredLabMaps} />
        </div>
    );
};

export default App;
