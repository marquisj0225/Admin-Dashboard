// material
import { Card, Typography, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme, color }) => ({
  boxShadow: 'none',
  padding: theme.spacing(5, 4),
  backgroundColor: alpha(color, 0.1)
}));

const Header = styled(Box)(({ color }) => ({
  margin: 'auto',
  display: 'flex',
  marginBottom: '45px',
  color: { color }
}));
// ----------------------------------------------------------------------

KnowledgeSkill.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
};

export default function KnowledgeSkill({ title, color }) {
  return (
    <RootStyle color={color}>
      <Header color={color}>
        <Iconify icon="fluent:folder-28-filled" width={45} height={45} />
        <Iconify
          icon="carbon:overflow-menu-horizontal"
          width={45}
          height={45}
          sx={{ marginLeft: 'auto', color: 'primary.dark' }}
        />
      </Header>
      <Typography variant="h5">{title}</Typography>
    </RootStyle>
  );
}
