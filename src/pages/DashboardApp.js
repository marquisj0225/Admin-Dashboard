// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AccountOverview,
  KnowledgeSkill,
  DailyProgress,
  StatisticsChart
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Knowledge base</Typography>
        </Box>
        <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <KnowledgeSkill title="Vocabulary" color="#74c1ed" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <KnowledgeSkill title="Phrasal verbs" color="#f2acd1" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <KnowledgeSkill title="Grammar" color="#f8d553" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AccountOverview />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <StatisticsChart />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <DailyProgress />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
