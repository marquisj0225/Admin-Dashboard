import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from './Iconify';

// ----------------------------------------------------------------------

const LogoText = styled((props) => <Typography variant="h5" {...props} />)(({ theme }) => ({
  color: theme.palette.primary.main,
  letterSpacing: '2px',
  marginTop: '5px',
  '&:after': {
    content: "''",
    display: 'inline-block',
    width: '6px',
    height: '6px',
    borderRadius: '100%',
    marginLeft: '4px',
    backgroundColor: '#ae9aff'
  }
}));

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <RouterLink to="/" style={{ textDecoration: 'none' }}>
      <Box sx={{ display: 'inline-flex' }}>
        <Iconify
          icon="cib:nodemon"
          width={30}
          height={30}
          sx={{ color: 'primary.main', marginRight: '10px', ...sx }}
        />
        <LogoText variant="h5">Demon</LogoText>
      </Box>
    </RouterLink>
  );
}
