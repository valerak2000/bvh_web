import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import * as Colors from '@material-ui/core/colors';

export var muiTheme = createMuiTheme({
    fontFamily: '"pfbeausanspro-reg", "sans-serif"',
    global: {
        maxWidth: '78rem',//62 126,
        minWidth: '78rem',
        minHeight: '58rem',
        margin: '0 auto',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'pfbeausanspro-reg, sans-serif',
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
                    //margin: '0.1rem 0 -1rem 0',
                    display: 'flex',
                    iconStyleLeft: {
                        width: '75rem',
                        //margin: '1.5rem 0 0rem 0',
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
                            margin: '0rem auto auto -0.5rem',
                            //margin: '-2.5rem auto auto -1rem',
                        },
                    },
                    menu: {
                        width: '30rem',
                        height: 'inherit',
                        margin: '2rem 1rem auto',
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
                    width: 'auto',
                    height: 'inherit',
                    margin: '0 auto',
                    iconStyleRight: {
                        width: 'auto',
                        //margin: '1.5rem 0 0rem 0',
                        //margin: '0rem auto',
                    },
                    login: {
                        //margin: '0rem 3rem 0',
                        //top: '0rem',
                        //right: '3rem',
                        height: 'inherit',
                        width: 'inherit',
                        backgroundColor: 'inherit',
                        fontSize: 14,
                        color: Colors.grey50,
                        //width: '100%',
                        //height: 'inherit',
                        //margin: 'auto',
                        badge: {
                            top: '0rem',
                            right: '1rem',
                            height: 'inherit',
                            width: '19rem',
                            backgroundColor: 'inherit',
                            fontFamily: '"PFBeauSansPro-Reg", "sans-serif"',
                            fontSize: 14,
                        },
                        button: {
                            margin: '0.2rem -1rem 0', //'1rem 1rem 0',
                            paddingTop: 10,
                            height: 39,
                            color: Colors.grey50,
                            hoverColor: Colors.blue800,
                            '&:hover': {
                                backgroundColor: '#0069d9',
                                borderColor: '#0062cc',
                            },
                            label: {
                                fontSize: 18,
                                fontWeight: 500,
                            },
                            icon: {
                                height: '1.25rem',
                                width: '1.25rem',
                            },
                            iconMenu: {
                                height: '1.25rem',
                                width: '1.25rem',
                                color: Colors.grey50,
                            },
                        },
                    }
                },
                flexWrap: 'wrap',
            },
        },
        leftNav: {
            width: '28%',
            //maxWidth: '28rem',
        },
        footer: {
            backgroundColor: Colors.blue800, //teal200,
            bottomNavigation: {
                position: 'space-around',
                height: '4rem',
                //display: 'block',
                button: {
                    //minWidth: '31rem',
                    //maxWidth: 'none',
                    maxWidth: '24rem',
                    margin: '0 0 auto',
                    icon: {
                        height: 24,
                        width: '100%',
                        objectFit: 'contain',
                    },
                },
            },
            bottomText: {
                fontSize: 14,
                color: Colors.grey50,
                textAlign: 'right',
                margin: '0 1rem auto auto',
                link: {
                    color: Colors.cyan100,
                },
            }
        },
    },
    palette: {
        textColor: Colors.blue900,
        alternateTextColor: Colors.blue900,
        primary1Color: Colors.blue800, //teal300 lightGreen50 lightBlue900
        //primary2Color: Colors.white,
        //accent1Color: Colors.white,
        accent2Color: Colors.white,
        //backgroundColor: Colors.teal200,
        //selectedTextColor: Colors.blue900,
        secondaryTextColor: Colors.blue900,
        //primary2Color: Colors.teal200,
        //primary: Colors.blue900,
        secondary: Colors.white,
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
        selectedTextColor: Colors.grey50,
        textColor: Colors.grey50,
        tab: {
            textTransform: 'none',
        },
    },
    badge: {
        textColor: Colors.grey50,
    },
    bottomNavigation: {
        backgroundColor: Colors.blue800, //teal200,
        unselectedColor: Colors.grey50, //blue900,
        selectedColor: Colors.grey50, //blue900,
        //height: 56,
        unselectedFontSize: 16,
        selectedFontSize: 16,
    },
    iconPdf: {
        width: 32,
        height: 38,
        //display: 'block',
        //background: `url(${iconPdf}) no-repeat 0px 0px`,
        objectFit: 'contain',
        margin: '0rem auto',
    },
    labelPdf: {
        fontSize: 16,
        fontWeight: 500,
    },
    icon: {
        height: 24,
        width: '100%',
        objectFit: 'contain',
    },
    typography: {
        fontFamily: [
            'pfbeausanspro-reg',
            'sans-serif',
        ].join(','),
        fontSize: 16,
        fontWeight: 500,
    },
});
