// src/data.js
const initialData = [
    { id: 'PM001', name: 'Phòng A', manager: 'Nguyễn Văn A', email: 'nv.a@example.com' },
    { id: 'PM002', name: 'Phòng B', manager: 'Trần Thị B', email: 'tt.b@example.com' },
    { id: 'PM003', name: 'Phòng C', manager: 'Lê Văn C', email: 'lv.c@example.com' },
    { id: 'PM004', name: 'Phòng D', manager: 'Hoàng Thị D', email: 'ht.d@example.com' },
    { id: 'PM005', name: 'Phòng E', manager: 'Đào Văn E', email: 'dv.e@example.com' }
];

localStorage.setItem('labmaps', JSON.stringify(initialData));

export const getLabMaps = () => {
    return JSON.parse(localStorage.getItem('labmaps')) || [];
};
