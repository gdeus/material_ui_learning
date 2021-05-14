import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../../components/card';
import Chart from 'react-google-charts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    result:{
        display: 'flex',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    color: {
        backgroundColor: 'yellow'
    }
  }),
);

export default function Home() {
    const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
            <SimpleCard>
                <div>
                    <div className={classes.font}>
                        Empresas cadastradas: 
                    </div>
                    <div className={classes.result}>
                        <div>50</div>
                    </div>
                </div>
            </SimpleCard>
        </Grid>
        <Grid item xs={6}>
            <SimpleCard>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Empresas', 'Quantidades'],
                        ['BWG', 60],
                        ['People Club', 12],
                        ['Roit', 16],
                        ['iFood', 150],
                    ]}
                    options={{
                        title: 'Gráfico de usuárops por empresa',
                        // Just add this option
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                    />
            </SimpleCard>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
