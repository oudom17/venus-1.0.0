import Grid from '@mui/material/Grid';
import TopCards from 'components/sections/dashboard/top-cards';
import AvatarCard from 'components/sections/dashboard/avatar-card';
import TotalSpent from 'components/sections/dashboard/total-spent';
import Balance from 'components/sections/dashboard/balance';

const Dashbaord = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12}>
        <TopCards />
      </Grid>

      <Grid item xs={12} md={8}>
        <TotalSpent />
      </Grid>

      <Grid item xs={12} md={4}>
        <AvatarCard />
      </Grid>

      <Grid item xs={12} md={8}>
        <Balance />
      </Grid>
    </Grid>
  );
};

export default Dashbaord;
