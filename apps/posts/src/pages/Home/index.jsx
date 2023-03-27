import Shell from '@cib/shell';
import { Spinner } from '@cib/posts-ui';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Shell>
      <Box p={2}>
        <Typography>
          This is the cib Posts Homepage from <code>@cib/posts</code>.
        </Typography>
        <Link to="/">Click to go back home.</Link>
        <Box>
          <Spinner />
        </Box>
      </Box>
    </Shell>
  );
}

export default Home;
