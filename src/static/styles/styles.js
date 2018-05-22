import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

var muiTheme = exports.muiTheme = getMuiTheme({
    fontFamily: 'pfbeausanspro-reg, sans-serif',
    global: {
        maxWidth: '126rem',
        minWidth: '126rem',
        minHeight: '58rem',
        margin: '0 auto',
        fontSize: '16px',
        fontWeight: 500,
    },
    app: {
        margin: '0 auto auto',
        height: 'auto', //по высоте меню 
        width: '100%',
        сard: {
            margin: '0 auto',
            title: {
                fontSize: '30px',
            },
            header: {
                fontSize: '24px',
            },
            header1: {
                fontSize: '20px',
            },
            text: {
                fontSize: '16px',
            },
        },
        header: {
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
                        /*phoneHeader: {
                            //width: '100%',
                            //whiteSpace: 'nowrap',
                            //display: 'flex',
        
                            //margin: '0px 5px 0 0',
                            //float: 'unset',
                            //padding: '0 0 0 40px',
                            fontSize: 14,
                            fontWeight: 100,
                            fontFamily: 'pfbeausanspro-reg, sans-serif',
                        },
                        phone: {
                            fontSize: 14,
                            fontWeight: 700,
                            //width: 340,
                            //margin: '0 0 10px',
                            textDecoration: 'blink',
                            fontFamily: 'pfbeausanspro-bold, sans-serif',
                        },*/
                    }
                },
                flexWrap: 'wrap',
            },
        },
    },
    palette: {
        textColor: Colors.blue900,
        alternateTextColor: Colors.blue900,
        primary1Color: Colors.teal200, //Colors.lightGreen50,
        //backgroundColor: Colors.teal200,
        //selectedTextColor: Colors.blue900,
        //secondaryTextColor: Colors.blue900,
        //primary2Color: Colors.teal200,
        //accent1Color: Colors.teal200, 
        //primary: Colors.blue900,
        //secondary: Colors.teal200,
        //color: Colors.teal200,
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
});
