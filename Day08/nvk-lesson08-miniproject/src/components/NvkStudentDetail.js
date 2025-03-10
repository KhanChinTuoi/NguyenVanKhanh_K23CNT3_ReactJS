import React from 'react';

const NvkStudentDetail = ({ student, onClose }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Thông tin chi tiết</h3>
                <p><strong>Mã sinh viên:</strong> {student.NvkID}</p>
                <p><strong>Họ tên:</strong> {student.NvkStudentName}</p>
                <p><strong>Tuổi:</strong> {student.NvkAge}</p>
                <p><strong>Giới tính:</strong> {student.NvkGender}</p>
                <p><strong>Ngày sinh:</strong> {student.NvkBirthday}</p>
                <p><strong>Nơi sinh:</strong> {student.NvkBirthPlace}</p>
                <p><strong>Địa chỉ:</strong> {student.NvkAddress}</p>
                <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
            </div>
        </div>
    );
};

export default NvkStudentDetail;