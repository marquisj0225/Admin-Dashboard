// component
import Chip from '@mui/material/Chip';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('majesticons:analytics-plus-line')
  },
  {
    title: 'lessons',
    path: '/dashboard/lessons',
    icon: getIcon('radix-icons:backpack')
  },
  {
    title: 'teachers',
    path: '/dashboard/teachers',
    icon: getIcon('ci:group')
  },
  {
    title: 'calendar',
    path: '/dashboard/calendar',
    icon: getIcon('eva:calendar-outline')
  },
  {
    title: 'chat',
    path: '/dashboard/chat',
    icon: getIcon('ep:chat-dot-round'),
    info: (
      <Chip
        label="12"
        sx={{
          position: 'relative',
          left: '-30px',
          backgroundColor: 'secondary.lighter',
          height: '20px',
          fontWeight: '800'
        }}
      />
    )
  },
  {
    title: 'settings',
    path: '/settings',
    icon: getIcon('ci:settings'),
    asFooter: true
  }
];

export default sidebarConfig;
