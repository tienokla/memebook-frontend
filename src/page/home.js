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
    header: {
        position: 'sticky',
        height: '100%',
        top: '0',
    },
    side: {
        position: 'sticky',
        height: '100%',
        top: '64px',
    },
    background:{
        backgroundColor:'#8B939C'
    }
}));

const array = new Array(100).fill(1)

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Grid
                spacing={0}
                container
            > 
                <Grid item xs={12} className={classes.header}>
                    <Header />
                </Grid>
                <Grid item xs={2} className={classes.side}>
                    <Navigation/>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <ul>
                            {array.map((item, index) => <li>index</li>)}
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={2} className={classes.side}>
                    <div>adwdada</div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;