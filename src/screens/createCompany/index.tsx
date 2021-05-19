import { Button, Card, CardActions, CardContent, CardMedia, createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      root: { 
        display: "flex",
        margin: 20,
        flexDirection: 'column'
      },
      buttonImg: {
        marginTop: 10,
        justifyContent: "flex-start"
      },
      form: {
        display: 'flex',
        marginTop: 10,
        flexDirection: 'column'
      },
      formControl: {
        marginTop: 10
      },
      select: {
        minWidth: 200,
        maxWidth: 400,
        marginTop: 10
      },
      row: {
        display: "flex",
        flexDirection: 'row'
      },
      rowItens: {
        minWidth: 160,
        maxWidth: 300,
        marginRight: 20,
        marginTop: 10
      },
      card: {
        maxWidth: 250,
        margin: 15
      },
      cardButton: {
        justifyContent: "center"  
      }
  }),
);

export default function CreateCompany(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <h1>Adicionar empresa</h1>
            <h3>Preencher formulário para cadastrar uma empresa</h3>
            <div style={{
                width: 300,
                height: 150,
                backgroundColor: 'red'
            }}/>
            <div className={classes.buttonImg}>
                <Button color="primary" variant="contained">Alterar imagem</Button>
            </div>
            <div className={classes.form}>
                <form className={classes.form}>
                    <FormControl variant="filled" className={classes.select}>
                        <InputLabel id="demo-simple-select-filled-label">Grupo</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value="Grupo"
                        >
                            <MenuItem value="Grupo">
                                Grupo
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" className={classes.select}>
                        <TextField id="outlined-basic" label="CNPJ" variant="outlined" />   
                    </FormControl>
                    <div className={classes.row}>
                        <FormControl variant="filled" className={classes.rowItens}>
                            <TextField id="outlined-basic" label="Razão Social" variant="outlined" />   
                        </FormControl>
                        <FormControl variant="filled" className={classes.rowItens}>
                            <TextField id="outlined-basic" label="Nome Fantasia" variant="outlined" />   
                        </FormControl>
                    </div>
                    <div className={classes.row}>
                        <FormControl variant="filled" className={classes.rowItens}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" />   
                        </FormControl>
                        <FormControl variant="filled" className={classes.rowItens}>
                            <TextField id="outlined-basic" label="Telefone" variant="outlined" />   
                        </FormControl>
                    </div>
                </form>
            </div>
            <h1>Endereço</h1>
            <div className={classes.form}>
                <form className={classes.form}>
                    <FormControl variant="filled" className={classes.select}>
                        <TextField id="outlined-basic" label="CEP" variant="outlined" />   
                    </FormControl>
                    <div className={classes.row}>
                        <FormControl variant="filled" className={classes.rowItens}>
                            <TextField id="outlined-basic" label="Endereço" variant="outlined" />   
                        </FormControl>
                        <FormControl variant="filled" className={classes.rowItens}>
                            <TextField id="outlined-basic" label="Bairro" variant="outlined" />   
                        </FormControl>
                    </div>
                    <div className={classes.row}>
                        <FormControl variant="filled" className={classes.rowItens}>
                            <TextField id="outlined-basic" label="Cidade" variant="outlined" />   
                        </FormControl>
                        <FormControl variant="filled" className={classes.rowItens}>
                            <TextField id="outlined-basic" label="Estado" variant="outlined" />   
                        </FormControl>
                    </div>
                    <div className={classes.row}>
                        <FormControl variant="filled" className={classes.rowItens}>
                            <TextField id="outlined-basic" label="Número" variant="outlined" />   
                        </FormControl>
                        <FormControl variant="filled" className={classes.rowItens}>
                            <TextField id="outlined-basic" label="Complemento" variant="outlined" />   
                        </FormControl>
                    </div>
                </form>
            </div>
            <h1>Beneficios</h1>
            <div className={classes.form}>
                <h2>Alimentação</h2>
                <div className={classes.row}>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2020/01/EOK8rjuX4AQZoLp.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5">Beneficio XYZ</Typography>
                            <Typography variant="body1"> O Cerro Portenho é um time conhecido por ser o maior do Paraguai, patrocinado pela Puma e conhecido como time do povo no Paraguai</Typography>
                        </CardContent>
                        <CardActions className={classes.cardButton}>
                            <Button color="primary" variant="contained">
                                Alterar imagem
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2020/01/EOK8rjuX4AQZoLp.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5">Beneficio XYZ</Typography>
                            <Typography variant="body1"> O Cerro Portenho é um time conhecido por ser o maior do Paraguai, patrocinado pela Puma e conhecido como time do povo no Paraguai</Typography>
                        </CardContent>
                        <CardActions className={classes.cardButton}>
                            <Button color="primary" variant="contained">
                                Alterar imagem
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2020/01/EOK8rjuX4AQZoLp.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5">Beneficio XYZ</Typography>
                            <Typography variant="body1"> O Cerro Portenho é um time conhecido por ser o maior do Paraguai, patrocinado pela Puma e conhecido como time do povo no Paraguai</Typography>
                        </CardContent>
                        <CardActions className={classes.cardButton}>
                            <Button color="primary" variant="contained">
                                Alterar imagem
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2020/01/EOK8rjuX4AQZoLp.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5">Beneficio XYZ</Typography>
                            <Typography variant="body1"> O Cerro Portenho é um time conhecido por ser o maior do Paraguai, patrocinado pela Puma e conhecido como time do povo no Paraguai</Typography>
                        </CardContent>
                        <CardActions className={classes.cardButton}>
                            <Button color="primary" variant="contained">
                                Alterar imagem
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <h2>Seguros</h2>
                <div className={classes.row}>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2020/01/EOK8rjuX4AQZoLp.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5">Beneficio XYZ</Typography>
                            <Typography variant="body1"> O Cerro Portenho é um time conhecido por ser o maior do Paraguai, patrocinado pela Puma e conhecido como time do povo no Paraguai</Typography>
                        </CardContent>
                        <CardActions className={classes.cardButton}>
                            <Button color="primary" variant="contained">
                                Alterar imagem
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2020/01/EOK8rjuX4AQZoLp.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5">Beneficio XYZ</Typography>
                            <Typography variant="body1"> O Cerro Portenho é um time conhecido por ser o maior do Paraguai, patrocinado pela Puma e conhecido como time do povo no Paraguai</Typography>
                        </CardContent>
                        <CardActions className={classes.cardButton}>
                            <Button color="primary" variant="contained">
                                Alterar imagem
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2020/01/EOK8rjuX4AQZoLp.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5">Beneficio XYZ</Typography>
                            <Typography variant="body1"> O Cerro Portenho é um time conhecido por ser o maior do Paraguai, patrocinado pela Puma e conhecido como time do povo no Paraguai</Typography>
                        </CardContent>
                        <CardActions className={classes.cardButton}>
                            <Button color="primary" variant="contained">
                                Alterar imagem
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            height="140"
                            src="https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2020/01/EOK8rjuX4AQZoLp.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5">Beneficio XYZ</Typography>
                            <Typography variant="body1"> O Cerro Portenho é um time conhecido por ser o maior do Paraguai, patrocinado pela Puma e conhecido como time do povo no Paraguai</Typography>
                        </CardContent>
                        <CardActions className={classes.cardButton}>
                            <Button color="primary" variant="contained">
                                Alterar imagem
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
}