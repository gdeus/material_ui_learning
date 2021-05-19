import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../../components/card';
import Chart from 'react-google-charts';
import { Button, Card, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: 20,
      flexDirection: "column"
    },
    fontTitle: {
      fontSize: 30,
      fontWeight: "bold"
    },
    fontSubTitle: {
      fontSize: 20,
      fontWeight: "normal"
    },
    divSubtitle: {
      width: "100%",
      justifyContent: "space-between",
      display: "flex"
    },
    card: {
      width: "100%",
      marginTop: 20
    },
    table: {

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
    },
    testAltura: {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      width: "100%",
      backgroundColor: 'red'
    }
  }),
);

const SimpleMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <SettingsEthernetIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Editar</MenuItem>
        <MenuItem onClick={handleClose}>Excluir</MenuItem>
      </Menu>
    </div>
  );
}

function createData(name: string, calories: string, fat: string, carbs: string, protein: string, action : any) {
  return { name, calories, fat, carbs, protein, action };
}

const rows = [
  createData('Ebix', "73.440.046/0001-03", "BWG", "teste@teste.com", "(45) 99999-9999", <SimpleMenu/>),
  createData('Ebix', "73.440.046/0001-03", "BWG", "teste@teste.com", "(45) 99999-9999", <SimpleMenu/>),
  createData('Ebix', "73.440.046/0001-03", "BWG", "teste@teste.com", "(45) 99999-9999", <SimpleMenu/>),
];

export default function Home() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.fontTitle}>Empresas</Typography>
      <div className={classes.divSubtitle}>
        <Typography className={classes.fontSubTitle}>Aqui você pode adicionar, listar e gerenciar empresas.</Typography>
        <Button color="primary" variant="contained"><Link to="/createCompany">Adicionar Empresa</Link></Button>
      </div>
      <Card className={classes.card}>
      <form className={classes.root} noValidate>
        <TextField id="outlined-basic" label="Você pode procurar uma empresa por nome ou CNPJ" variant="outlined" />
      </form>
      <Table size="small" aria-label="a dense table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">CNPJ</TableCell>
            <TableCell align="right">Grupo</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Card>
    </div>
  );
}
