import React from 'react';

import CustomerRow from 'components/CustomerRow/CustomerRow';
import customers from '../../customers.json';
import css from './CustomersTable.module.css';

const CustomersTable = ({ search }) => {
  const searchLowercase = search.toLowerCase();

  const filteredCustomers = customers.filter(
    ({ name, company, phone, email, country, active }) =>
      name.toLowerCase().includes(searchLowercase) ||
      company.toLowerCase().includes(searchLowercase) ||
      phone.toLowerCase().includes(searchLowercase) ||
      email.toLowerCase().includes(searchLowercase) ||
      country.toLowerCase().includes(searchLowercase) ||
      (searchLowercase === 'active' && active) ||
      (searchLowercase === 'inactive' && !active)
  );

  return (
    <div className={css.overflow}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => (
            <CustomerRow key={customer.email} {...customer} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
