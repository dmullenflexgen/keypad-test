
//    TODO: Create and deploy theme style using:
//  
import {createMuiTheme} from '@material-ui/core'
import { red100 } from 'material-ui/styles/colors';

export const theme = createMuiTheme({
    palette:{
      //TODO: are these colors dear?
      primary: {
        light: "#64b5f6",
        main: "#2196f3",
        dark: "#1976d2",
        contrastText: "#fff",
      },   
      secondary:{
        light: "rgb(231, 51, 115)",
        main: "rgb(225, 0, 80)",
        dark: "rgb(157, 0, 56)",
        contrastText: "#fff",
      },
      text:{
        disabled:"rgba(0, 0, 0, 0.38)",
        hint:"rgba(0, 0, 0, 0.38)",
        primary:"rgba(0, 0, 0, 0.87)",
        secondary:"rgba(0, 0, 0, 0.54)"
      }
    },
    typography: {
      useNextVariants: true,
    },
});
//console.log('theme: ',theme)



const drawerWidth = 240;
//TODO: why hard-coded and not responsive?

export const STYLES_LAYOUT = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    //TODO: why hard-coded?
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    //TODO: hard-coded?
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    //TODO: vh is not displayed consistently across all browsers AFAIK. May be okay for 100vh.
    overflow: 'auto',
  },
  event_content: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
    //TODO: this and the following two are hard-wired
  },
  tableContainer: {
    height: 320,
  },
  logo:{
    width:128
  }
});


export const STYLES_DASHBOARD = theme => ({
    root: {
        flexGrow: 1,
      },
      cardContent:{
        minHeight:150
      },
      gridItem:{
        alignContent:'space-between'
      },
      cardHeader: {
        // backgroundColor: theme.palette.grey[200],
      },
      chip:{
        margin: theme.spacing.unit,
        paddingTop:2,
        paddingBottom:2
      }
});

export const STYLES_ALERT = theme => ({
  root: {
    minWidth: '150px',
    //TODO: hard-wired
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginBottom: '20px',
    border: '1px solid transparent',
    borderRadius: '3px'
  },  
  success:{
    backgroundColor: '#5cb85c',
    borderColor: '#5cb85c',
    color: '#5cb85c'
  },
  warning:{
    backgroundColor: '#E2A41F',
    borderColor: '#E2A41F',
    color: '#E2A41F'
  },
  danger:{
    backgroundColor: '#d43f3a',
    borderColor: '#d43f3a',
    color: '#d43f3a'
  },
  text:{
    color:'#fff'
  }
});




export const STYLES_ASSET_CARD = theme => ({
    card: {
        minWidth: 150,
        marginBottom:10,
        width:'100%'
      },
      heading:{
          marginBottom:10
      },
      root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      panelHeading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
      table: { },
      appBar: {
        position: 'relative',
      },
      flex: {
        flex: 1,
      },
      gridContainer:{
        flexGrow: 1,
      },
      gridItem:{
        alignContent:'space-between'
      },
      paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      },
      radioRoot: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
      },
 });



export const STYLES_FEATURES = theme => ({
  root: {
      flexGrow: 1,
    },
    card: {
      marginBottom:10,
      width:'100%'
    },
});




export const STYLES_NUMBERPAD = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 400
  },
  label: {
    marginBottom:15
  },
});



export const STYLES_CUSTOM_KEYBOARD = theme => ({
  //TODO: should there be consistency in the names of these two^?
  root: {
    flexGrow: 1,
    maxWidth: 400
  }
});