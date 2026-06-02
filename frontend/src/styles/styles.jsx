import { createTheme } from '@mui/material/styles';
import { common, blue, grey, cyan, pink } from '@mui/material/colors';

export var muiTheme = createTheme({
    palette: {
        text: {
            primary: blue[900],
            secondary: common['black'],
            disabled: grey[500]
        },
        primary: {
            main: blue[900],
            contrastText: common['white']
        },
        secondary: {
            main: blue[900],
            contrastText: common['white']
        },
        background: {
            default: common['white'],
            paper: grey[100]
        },
        divider: grey[300]
    },
    typography: {
        fontFamily: ['pfbeausanspro-reg', 'sans-serif'].join(','),
        fontSize: 16,
        fontWeight: 500,
        htmlFontSize: 16,
        subtitle1: {
            fontSize: 22,
            fontWeight: 500
        },
        h3: {
            fontSize: 18,
            fontWeight: 500
        },
        h4: {
            fontSize: 20,
            fontWeight: 500
        },
        h5: {
            fontSize: 24,
            fontWeight: 500
        },
        h6: {
            fontSize: 30,
            fontWeight: 500
        },
        body1: {
            fontSize: 16,
            fontWeight: 500
        },
        body2: {
            fontSize: 14,
            fontWeight: 500
        }
    },
    global: {
        maxWidth: '78rem',
        minWidth: '63rem',
        minHeight: '38rem',
        margin: '0 auto'
    },
    app: {
        height: 'auto', //по высоте меню
        width: '80%',
        flexDirection: 'column',
        card: {
            margin: '0 auto',
            height: '100%',
            header: {
                objectFit: 'contain',
                height: 240
            },
            title: {
                paddingBottom: 0
            },
            titleTypography: {
                variant: 'h6',
                color: 'textPrimary'
            },
            subheaderTypography: {
                variant: 'h5',
                color: 'textPrimary'
            },
            headline: {
                variant: 'h5',
                color: 'textPrimary'
            },
            subheader: {
                variant: 'subtitle1',
                color: 'primary'
            },
            subtitle1: {
                variant: 'h4',
                color: 'primary'
            },
            subtitle2: {
                variant: 'body1',
                color: 'primary'
            },
            text: {
                variant: 'body1',
                fontSize: 16,
                color: 'primary'
            }
        },
        header: {
            appBar: {
                height: '5.4rem',
                width: '100%',
                toolbar: {
                    padding: '0 8px 8px 8px',
                    logo: {
                        width: 230,
                        height: 76,
                        cursor: 'pointer',
                        margin: '0.4rem auto auto -0.5rem',
                        picture: {
                            height: 'inherit',
                            width: 201,
                            objectFit: 'contain'
                        }
                    },
                    menu: {
                        width: '30rem',
                        height: 'inherit',
                        margin: '2rem 3rem 0px',
                        tab: {
                            fontSize: 18,
                            fontWeight: 500,
                            opacity: 1,
                            textTransform: 'none',
                            indicator: {
                                color: cyan[100],
                                backgroundColor: cyan[100]
                            }
                        }
                    }
                },
                titleStyle: {
                    width: 'auto'
                },
                login: {
                    height: 'inherit',
                    width: 'inherit',
                    backgroundColor: 'inherit',
                    fontSize: 14,
                    color: grey[50],
                    display: 'flex',
                    paddingTop: 5,
                    margin: '0rem 0rem 0rem 7rem',
                    badge: {
                        height: 'inherit',
                        backgroundColor: 'inherit',
                        fontFamily: '"PFBeauSansPro-Reg", "sans-serif"',
                        fontSize: 14,
                        width: '20rem',
                        margin: '0rem -6rem 0rem 0rem'
                    },
                    badgeLogon: {
                        height: 'inherit',
                        backgroundColor: 'inherit',
                        fontFamily: '"PFBeauSansPro-Reg", "sans-serif"',
                        fontSize: 14,
                        width: '20rem',
                        margin: '0rem -4.4rem 0rem 0rem'
                    },
                    button: {
                        margin: '1.7rem 1rem 0rem 0.5rem',
                        paddingTop: 8,
                        paddingRight: 0,
                        height: 36,
                        color: grey[50],
                        fontSize: 18,
                        fontWeight: 500,
                        textTransform: 'none',
                        justifyContent: 'flex-end',
                        label: {
                            fontSize: 18,
                            fontWeight: 500
                        },
                        icon: {
                            height: '1.25rem',
                            width: '1.25rem',
                            margin: 'auto auto auto 5px'
                        },
                        iconMenu: {
                            height: '1.25rem',
                            width: '1.25rem',
                            color: grey[50]
                        }
                    }
                }
            }
        },
        leftNav: {
            width: '20%'
        },
        footer: {
            backgroundColor: blue[900], //teal200,
            fontFamily: ['pfbeausanspro-reg', 'sans-serif'].join(','),
            bottomNavigation: {
                justifyContent: 'space-around',
                height: '4rem',
                backgroundColor: blue[900], //teal200,
                button: {
                    color: grey[50],
                    maxWidth: '24rem',
                    margin: '0 0 auto',
                    icon: {
                        height: 24,
                        width: '100%',
                        objectFit: 'contain'
                    }
                }
            },
            bottomText: {
                fontSize: 10,
                color: grey[50],
                textAlign: 'right',
                margin: '0 1rem auto auto',
                link: {
                    color: cyan[100]
                }
            }
        }
    },
    buttonLink: {
        padding: '6px 6px 6px 6px',
        iconFile: {
            width: 32,
            height: 38,
            objectFit: 'contain',
            margin: '0rem auto'
        },
        labelFile: {
            fontSize: 16,
            fontWeight: 500,
            minHeight: 'inherit',
            display: 'inline-flex',
            alignItems: 'center'
        }
    },
    ul: {
        margin: 'auto'
    },
    li: {
        padding: '0 0 0 25px',
        margin: '5px 0 5px 0',
        background: 'url(/static/images/check.svg) no-repeat 0px 2px',
        backgroundSize: 16,
        listStyleImage: 'none',
        listStyle: 'none'
    },
    siteMaps: {
        ul: {
            paddingLeft: '5rem',
            margin: 'auto'
        },
        li: {
            padding: 'auto auto 0.2rem auto'
        }
    },
    icon: {
        height: 24,
        width: '100%',
        objectFit: 'contain',
        color: 'primary'
    },
    subParagraf: {
        margin: '0.25rem auto 0.25rem 4rem'
    },
    textIdent: {
        textAlign: 'justify',
        textIndent: '1.5em',
        margin: '0.25rem auto 0.25rem'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                app: {
                    fontSize: '1rem'
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true // No more ripple, on the whole application 💣!
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: pink['A200']
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: '#fff', // Inactive tab text color
                    '&.Mui-selected': {
                        color: '#ff5722' // Active tab text color
                    }
                }
            }
        }
    }
});
