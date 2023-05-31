import React from 'react';

const EducationCard = ({ data }) => {
  // logic

  // UI
  return (
    <ul className="list-group m-1">
      <li className="list-group-item d-flex justify-content-between">
        <div className="flex-fill rounded p-2" style={{ textAlign: 'left' }}>
          <p className="m-0" >{data.year}</p>
        </div>
        <div className="flex-fill p-2" style={{ textAlign: 'right' }}>
          <p className="m-0" style={{ fontWeight: 'bold' }}>{data.name}</p>
          <p className="m-0">{data.degree}</p>
        </div>
      </li>
    </ul>
  );
};

export default EducationCard;
