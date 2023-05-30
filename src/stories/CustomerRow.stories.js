import CustomerRow from 'components/CustomerRow/CustomerRow';

export default {
  title: 'CustomerRow',
  component: CustomerRow,
  tags: ['autodocs'],
};

export const Customers = {
  args: {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    active: false,
  },
};
