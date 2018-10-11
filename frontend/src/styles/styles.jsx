import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import common from '@material-ui/core/colors/common';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import cyan from '@material-ui/core/colors/cyan';

export var muiTheme = createMuiTheme({
    palette: {
        textColor: { main: blue[900] },
        alternateTextColor: { main: blue[900] },
        text: {
            primary: blue[800],
            secondary: blue[800] //blue[800] common['white']
        }, //teal300 lightGreen50 lightBlue900
        primary: {
            main: blue[800],
            contrastText: common['white']
        }, //teal300 lightGreen50 lightBlue900
        secondary: {
            main: blue[800],
            //contrastText: common['white']
        },
        secondaryTextColor: {
            main: blue[900]
        },
        //primary2Color: Colors.white,
        //accent1Color: Colors.white,
        accent2Color: { main: common['white'] },
        //backgroundColor: Colors.teal200,
        //selectedTextColor: Colors.blue900,
        //primary2Color: Colors.teal200,
        //primary: Colors.blue900,
        //color: Colors.teal200,
        //canvasColor: Colors.teal200,
    },
    typography: {
        fontFamily: [
            'pfbeausanspro-reg',
            'sans-serif',
        ].join(','),
        fontSize: 16,
        fontWeight: 500,
        htmlFontSize: 16,
    },
    global: {
        maxWidth: '78rem',//62 126,
        minWidth: '78rem',
        minHeight: '58rem',
        margin: '0 auto',
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
                height: '5.4rem',
                width: '100%',
                iconStyleLeft: {
                    width: '75rem',
                    //margin: '1.5rem 0 0rem 0',
                },
                logo: {
                    //2,646370023419204
                    width: 230,
                    height: 76,
                    cursor: 'pointer',
                    margin: '0.4rem 0 auto -0.5rem',
                    picture: {
                        height: 'inherit',
                        width: 201,
                        objectFit: 'contain',
                    },
                },
                menu: {
                    width: '30rem',
                    height: 'inherit',
                    margin: '2rem 1rem -8px',
                    tab: {
                        fontSize: 18,
                        fontWeight: 500,
                        opacity: 1,
                        textTransform: 'none',
                    }
                },
                titleStyle: {
                    width: 'auto',
                },
                login: {
                    height: 'inherit',
                    width: 'inherit',
                    backgroundColor: 'inherit',
                    fontSize: 14,
                    color: grey[50],
                    display: 'flex',
                    margin: '0.5rem 0rem 0rem 12rem',
                    badge: {
                        height: 'inherit',
                        backgroundColor: 'inherit',
                        fontFamily: '"PFBeauSansPro-Reg", "sans-serif"',
                        fontSize: 14,
                        width: '19rem',
                        margin: '0rem -6rem 0rem 0rem',
                    },
                    button: {
                        margin: '2rem 0rem 0rem 0rem',
                        paddingTop: 10,
                        height: 39,
                        color: grey[50],
                        fontSize: 18,
                        fontWeight: 500,
                        label: {
                            fontSize: 18,
                            fontWeight: 500,
                        },
                        icon: {
                            height: '1.25rem',
                            width: '1.25rem',
                            margin: 'auto auto auto 5px',
                        },
                        iconMenu: {
                            height: '1.25rem',
                            width: '1.25rem',
                            color: grey[50],
                        },
                    },
                },
            },
        },
        leftNav: {
            width: '28%',
            //maxWidth: '28rem',
        },
        footer: {
            backgroundColor: blue[800], //teal200,
            bottomNavigation: {
                position: 'space-around',
                height: '4rem',
                backgroundColor: blue[800], //teal200,
                button: {
                    fontSize: 16,
                    color: grey[50],
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
                color: grey[50],
                textAlign: 'right',
                margin: '0 1rem auto auto',
                link: {
                    color: cyan[100],
                },
            }
        },
    },
    /*title: {
        cursor: 'pointer',
    },
    button: {
        textTransform: 'none',
    },
    tabs: {
        width: '100%',
        paddingLeft: 20,
        selectedTextColor: grey[50],
        textColor: grey[50],
        tab: {
            textTransform: 'none',
        },
    },
    badge: {
        textColor: grey[50],
    },
    bottomNavigation: {
        backgroundColor: blue[800], //teal200,
        unselectedColor: grey[50], //blue900,
        selectedColor: grey[50], //blue900,
        //height: 56,
        unselectedFontSize: 16,
        selectedFontSize: 16,
    },*/
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
});
