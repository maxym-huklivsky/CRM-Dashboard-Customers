import Status from 'components/Status/Status';

export default {
  title: 'Status',
  component: Status,
  tags: ['autodocs'],
};

export const Active = {
  args: {
    active: true,
  },
};

export const Inactive = {
  args: {
    active: false,
  },
};
