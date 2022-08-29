import { Container, Typography, TextField, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

import BackGround from '../assets/backgroundLogin.jpg'


const useStyles = makeStyles((theme) => ({
    center: {
        position: 'relative',
        transform: 'translate(0, 250px)',
        borderRadius: '5px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: theme.spacing(3)
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    background: {
        width: '100%',
        position: 'absolute',
        zIndex: '-1',
    }

}));



function SignUp() {
    const classes = useStyles()
    return (
        <div >
            <img src={BackGround} className={classes.background} alt="background"></img>
            <Container component="div" maxWidth="xs" className={classes.center}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="nickname"
                            label="nickname"
                            type="nickname"
                            id="text"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to='/signin'>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container >
        </div >
    );
}

export default SignUp;