// material
import { Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProgressSkill from './ProgressSkill';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(() => ({
  boxShadow: 'none'
}));

const WrapperStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: theme.spacing(3),
  minHeight: '410px'
}));

// ----------------------------------------------------------------------

export default function DailyProgress() {
  return (
    <RootStyle>
      <Typography variant="h4">Daily Progress</Typography>
      <WrapperStyle>
        <ProgressSkill
          icon="fluent:headphones-sound-wave-24-regular"
          title="Listening"
          description="Speak 20 minutes."
          percent="15"
          color="#a2b6ff"
        />
        <ProgressSkill
          icon="majesticons:edit-pen-4-line"
          title="Grammar"
          description="Learn 5 new rules."
          percent="32"
          color="#faa66a"
        />
        <ProgressSkill
          icon="bx:microphone"
          title="Prounanciation"
          description="Read 30 minutes."
          percent="21"
          color="#73d990"
        />
        <ProgressSkill
          icon="codicon:book"
          title="Dictionary"
          description="Learn 15 new words."
          percent="64"
          color="#ffa38e"
        />
      </WrapperStyle>
    </RootStyle>
  );
}
