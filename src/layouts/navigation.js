import { makeStyles } from '@material-ui/core/styles';
import { Avatar, List, ListItem, ListItemText, ListItemAvatar, Typography, Grid } from '@material-ui/core'

import GroupIcon from '@material-ui/icons/Group';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlagIcon from '@material-ui/icons/Flag';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import logo from '../assets/logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
    },
    line: {
        borderBottom: "1px solid white",
        margin: '0 8px'
    },
    title: {
        margin: '0 16px',
    },
    right: {
        textAlign: 'right',
    }
}));

function Navigation() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List >
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={logo}>

                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="tien le" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <GroupIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="ban be" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <BookmarkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="da luu" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <FlagIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="trang" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <ExpandMoreIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="xem them" />
                </ListItem>
            </List>
            <div className={classes.line} />

            <Grid container className={classes.title}>
                <Grid item xs={6} >
                    <Typography variant="caption">
                        loi tawt cua ban
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.right}>
                    <Typography variant="button">

                    </Typography>
                </Grid>
            </Grid>


            <List >
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={logo} variant="rounded">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="tien le" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={logo} variant="rounded">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="ban be" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={logo} variant="rounded">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="da luu" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={logo} variant="rounded">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="trang" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={logo} variant="rounded">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="xem them" />
                </ListItem>
            </List>
        </div>
    );
}

export default Navigation;