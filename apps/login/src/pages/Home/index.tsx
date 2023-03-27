import Shell from '@cib/shell';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Shell>
      <Box p={2}>
        <Typography>
          This is the cib Login Homepage from <code>@cib/login</code>.
        </Typography>
        <Link to="/">Click to go back home.</Link>
      </Box>
    </Shell>
  );
}

export default Home;
