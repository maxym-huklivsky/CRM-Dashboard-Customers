import Status from 'components/Status/Status';
import React from 'react';

const CustomerRow = ({ name, company, phone, email, country, active }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{company}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td>{<Status active={active} />}</td>
    </tr>
  );
};

export default CustomerRow;
