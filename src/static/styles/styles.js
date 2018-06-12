import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

import bgHeader from '../images/bg-header.png';

var muiTheme = exports.muiTheme = getMuiTheme({
    fontFamily: 'pfbeausanspro-reg, sans-serif',
    global: {
        maxWidth: '126rem',
        minWidth: '126rem',
        minHeight: '58rem',
        margin: '0 auto',
        fontSize: 16,
        fontWeight: 500,
    },
    app: {
        //margin: '0 auto auto',
        height: 'auto', //по высоте меню 
        width: '80%',
        flexDirection: 'unset',
        //background: `url(${bgHeader}) no-repeat 0px 0px`,
        сard: {
            margin: '0 auto',
            //minHeight: '32rem',
            height: '100%', //'-webkit-fill-available', //'40rem',
            title: {
                fontSize: 30,
            },
            header: {
                fontSize: 24,
            },
            header1: {
                fontSize: 20,
            },
            text: {
                fontSize: 16,
            },
        },
        header: {
            /*background: {
                image: `url(${ bgHeader })`,
                repeat: 'no-repeat',
                size: 'cover',
                position: 'center'
            },*/
            appBar: {
                height: 80,
                width: '100%',
                elementLeft: {
                    width: '100%',
                    height: 'inherit',
                    margin: '0.5rem 0 -1rem 0',
                    display: 'flex',
                    iconStyleLeft: {
                        width: '75rem',
                        margin: '1.5rem 0 0rem 0',
                    },
                    logo: {
                        //2,646370023419204
                        width: 220,
                        height: 76,
                        cursor: 'pointer',
                        picture: {
                            height: 'inherit',
                            width: 201,
                            objectFit: 'contain',
                            margin: '-2.5rem auto auto -1rem',
                        },
                    },
                    menu: {
                        width: '100%',
                        height: 'inherit',
                        margin: 'auto auto auto',
                        tab: {
                            fontSize: 18,
                            fontWeight: 500,
                            textTransform: 'none',
                        }
                    },
                },
                titleStyle: {
                    width: 'auto',
                },
                elementRight: {
                    width: '100%',
                    height: 'inherit',
                    margin: '0.7rem auto',
                    iconStyleRight: {
                        width: 'auto',
                        //margin: '0rem auto',
                    },
                    login: {
                        top: '0rem',
                        right: '3rem',
                        height: 'inherit',
                        width: '28rem',
                        backgroundColor: 'inherit',
                        fontSize: 14,
                        //width: '100%',
                        //height: 'inherit',
                        //margin: 'auto',
                        badge: {
                            top: '-0.5rem',
                            right: '3rem',
                            height: 'inherit',
                            width: '30rem',
                            backgroundColor: 'inherit',
                            fontFamily: 'PFBeauSansPro-Reg, sans-serif',
                            fontSize: 14,
                        },
                        button: {
                            margin: '0rem 0rem 0', //'1rem 1rem 0',
                            label: {
                                fontSize: 18,
                                fontWeight: 500,
                            },
                        },
                    }
                },
                flexWrap: 'wrap',
            },
        },
        leftNav: {
            width: '20%',
            //maxWidth: '28rem',
        },
        footer: {
            bottomNavigation: {
                position: 'space-around',
                display: 'table',
                button: {
                    //minWidth: '31rem',
                    maxWidth: 'none',
                    icon: {
                        height: 24,
                        width: '100%',
                        objectFit: 'contain',
                    },
                },
            },
        },
    },
    palette: {
        textColor: Colors.blue900,
        alternateTextColor: Colors.blue900,
        primary1Color: Colors.teal200, //Colors.lightGreen50,
        //backgroundColor: Colors.teal200,
        //selectedTextColor: Colors.blue900,
        secondaryTextColor: Colors.blue900,
        //primary2Color: Colors.teal200,
        //accent1Color: Colors.teal200, 
        //primary: Colors.blue900,
        //secondary: Colors.teal200,
        //color: Colors.teal200,
        //canvasColor: Colors.teal200,
    },
    title: {
        cursor: 'pointer',
    },
    button: {
        textTransform: 'none',
    },
    tabs: {
        width: '100%',
        paddingLeft: 20,
        tab: {
            textTransform: 'none',
        },
    },
    bottomNavigation: {
        backgroundColor: Colors.teal200,
        unselectedColor: Colors.blue900,
        selectedColor: Colors.blue900,
        //height: 56,
        unselectedFontSize: 16,
        selectedFontSize: 16,
    },
  });
