import { alpha, makeStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton, InputBase, Avatar,Tabs,Tab } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import logo from '../assets/logo.png'

import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    header: {
        height: '64px',
        backgroundColor: '#38405F',
    },
    logo: {
        height: '48px',
    },
    search: {
        position: 'relative',
        borderRadius: '50px',
        height: '40px',
        backgroundColor: '#8B939C',
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        height: '40px',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    grow: {
        flexGrow: '1',
    },
    option: {
        backgroundColor: '#8B939C',
    },
    iconbutton: {
        padding: '4px'
    },
    icon:{
        width:'28px',
    },
    action:{
        marginLeft:'100px'
    },
    tabs: {

        '& button': {
            height: '64px',
            minWidth: '128px'
        }
      }


}));

function Header() {
    const classes = useStyles()
    const [value,setValue] = useState(0)
    const handleValue=(event,newValue)=>{
        setValue(newValue)
    }
    return (
        <div className={classes.header}>
            <Toolbar>
                <img src={logo} alt='logo' className={classes.logo}></img>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.grow} />

                <Tabs  aria-label="simple tabs example" onChange={handleValue} value={value} className={classes.tabs} selectionFollowsFocus>
                    <Tab icon={<HomeSharpIcon fontSize='large'/>} />
                    <Tab icon={<HomeSharpIcon fontSize='large'/>} />
                    <Tab icon={<HomeSharpIcon fontSize='large'/>} />
                </Tabs>

                <div className={classes.grow} />

                <div className={classes.action}>
                    <IconButton aria-label="show 4 new mails" color="inherit" className={classes.iconbutton}>
                        <Avatar className={classes.option}>
                            <MoreVertSharpIcon />
                        </Avatar>
                    </IconButton>
                    <IconButton aria-label="show 4 new mails" color="inherit" className={classes.iconbutton}>
                        <Avatar className={classes.option}>
                            <NotificationsIcon />
                        </Avatar>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit" className={classes.iconbutton}>
                        <Avatar className={classes.option}>
                            <ChatIcon />
                        </Avatar>
                    </IconButton>
                    <IconButton className={classes.iconbutton}>
                        <Avatar src={logo} className={classes.option} >

                        </Avatar>
                    </IconButton>
                </div>

            </Toolbar>
        </div>
    );
}

export default Header;