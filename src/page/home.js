import { Header ,Navigation } from '../layouts'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    test: {
        position: 'sticky',
        height: '100%',
        top: '0',
    }
}));

const array = new Array(100).fill(1)

function Home() {
    const classes = useStyles();
    return (
        <div >
            <Grid
                spacing={0}
                container
            > 
                <Grid item xs={12} className={classes.test}>
                    <Header />
                </Grid>
                <Grid item xs={3} className={classes.test}>
                    <Navigation/>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <ul>
                            {array.map((item, index) => <li>index</li>)}
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={3} className={classes.test}>
                    <div>adwdada</div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;