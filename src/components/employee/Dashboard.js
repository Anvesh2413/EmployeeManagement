import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import WorkOffIcon from '@material-ui/icons/WorkOff';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Dashboard(props) {


  const component = props.value;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const { id } = JSON.parse(sessionStorage.getItem('session'))
  //(props.id!=undefined) ? props : props.location.state;


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Application Dashboard
          </Typography>

        </Toolbar>

      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> */}
        </div>
        <Divider />

        <List>


          <ListItem >
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText ><Link to='/home' ><b>Dashboard</b></Link> </ListItemText>
          </ListItem>
          <ListItem >
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText ><Link to={`/profile/${id}`} ><b>Profile</b></Link> </ListItemText>
          </ListItem>



          <ListItem> <ListItemIcon><AccountTreeIcon /></ListItemIcon>
            <ListItemText>
              <Link to="/projects"><b>Projects</b></Link></ListItemText>
          </ListItem>

          <ListItem> <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText> <Link to="/employees"><b>Employees</b></Link></ListItemText>
          </ListItem>
          <ListItem> <ListItemIcon><WorkOffIcon /></ListItemIcon>
            <ListItemText>
              <Link to="/leavedashboard"><b>Leaves</b></Link></ListItemText>
          </ListItem>




          <ListItem> <ListItemIcon><PowerSettingsNewIcon /></ListItemIcon>
            <ListItemText> <Link to="/logout"><b>Logout</b>
            </Link> </ListItemText>
          </ListItem>
        </List>


      </Drawer>




      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />






      </main>
    </div>






  );
}
