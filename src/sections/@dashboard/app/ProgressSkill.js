// material
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled((props) => <Paper elevation={3} {...props} />)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '96%',
  margin: 'auto',
  display: 'flex'
}));

const WrapperLeftStyle = styled(Box)(() => ({
  display: 'flex'
}));

const IconWrapperStyle = styled(Box)(({ theme, bgColor }) => ({
  backgroundColor: bgColor,
  minWidth: '70px',
  borderRadius: '11px',
  marginRight: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff'
}));

// ----------------------------------------------------------------------

ProgressSkill.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  percent: PropTypes.string,
  color: PropTypes.string
};

export default function ProgressSkill({ title, description, icon, percent, color }) {
  return (
    <RootStyle>
      <WrapperLeftStyle>
        <IconWrapperStyle bgColor={color}>
          <Iconify icon={icon} width={25} height={25} />
        </IconWrapperStyle>
        <Box>
          <Typography variant="h5" sx={{ lineHeight: 1.2 }}>
            {percent} %
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 1.4 }}>
            {title}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.disabled', lineHeight: 1.2 }}>
            {description}
          </Typography>
        </Box>
      </WrapperLeftStyle>
      <Iconify
        icon="carbon:overflow-menu-horizontal"
        width={25}
        height={25}
        sx={{ marginLeft: 'auto', color: 'primary.dark' }}
      />
    </RootStyle>
  );
}
