import { Dashboard } from '@cib/shell';
import { Box } from '@mui/material';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '@cib／shell/layouts/Dashboard',
  component: Dashboard,
  componentSubtitle: 'The Dashboard layout that powers cib portals'
};

export const DashboardLayout = () => (
  <Dashboard>
    <Box p={2}>Welcome!</Box>
  </Dashboard>
);
