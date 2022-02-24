// material
import { Avatar, Card, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import account from '../../../_mocks_/account';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(6, 0),
  paddingBottom: theme.spacing(2.5),
  color: theme.palette.primary.dark,
  backgroundColor: '#f9f8fd'
}));

const AvatarWrapperStyle = styled('div')(() => ({
  margin: 'auto',
  display: 'flex',
  position: 'absolute',
  top: '-30px',
  left: 'calc(50% - 30px)',
  zIndex: '999'
}));

// ----------------------------------------------------------------------

export default function AccountOverview() {
  return (
    <div style={{ position: 'relative' }}>
      <AvatarWrapperStyle>
        <Avatar alt={account.displayName} src={account.photoURL} sx={{ height: 60, width: 60 }} />
      </AvatarWrapperStyle>

      <RootStyle>
        <Typography variant="h5">{account.displayName}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          {account.email}
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
          <Grid item xs={6}>
            <Typography variant="h6">Lessons</Typography>
            <Typography variant="h6">98</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Terms</Typography>
            <Typography variant="h6">5</Typography>
          </Grid>
        </Grid>
      </RootStyle>
    </div>
  );
}
