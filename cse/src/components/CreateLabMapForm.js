// src/components/CreateLabMapForm.js
import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';

const CreateLabMapForm = ({ addLabMap }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        addLabMap(values);
        form.resetFields();
        message.success('Phòng đã được tạo thành công!');
    };

    return (
        <Form form={form} onFinish={onFinish}>
            <Form.Item
                name="name"
                label="Tên phòng"
                rules={[{ required: true, message: 'Vui lòng nhập tên phòng!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="id"
                label="Mã Phòng"
                rules={[
                    { required: true, message: 'Vui lòng nhập mã phòng!' },
                    {
                        pattern: /^[PM]\d{3}$/,
                        message: 'Mã phòng phải có định dạng PMxxx (x là 3 chữ số)',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Số Máy"
                rules={[
                    { required: true, message: 'Vui lòng nhập số máy!' },
                    {
                        type: 'number',
                        min: 1,
                        max: 60,
                        message: 'Số máy phải từ 1 đến 60',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="manager"
                label="Quản Lý"
                rules={[{ required: true, message: 'Vui lòng nhập tên quản lý!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    { required: true, message: 'Vui lòng nhập email!' },
                    {
                        type: 'email',
                        message: 'Định dạng email không hợp lệ!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Tạo Phòng
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CreateLabMapForm;
