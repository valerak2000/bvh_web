import * as React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import withTheme from '@material-ui/core/styles/withTheme';
//import useTheme from '@material-ui/core/styles/useTheme';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CircularProgress } from '@material-ui/core';
import { css } from '@emotion/react';
//import LinearProgress from '@material-ui/core/LinearProgress';

/*const CustomInput = ({children, value, onChange}: CustomInputProps) => {
    return 
      <div>
        <label htmlFor="search">{children}</label>
        <input id="search" type="text" value={value} onChange={onChange} />
      </div>
  }*/

//const loading = () => <LinearProgress style = {{ color: '#4caf50' }} />;
//export default loading;

export const Loader = compose(
    withTheme(),
)(props => {
    const styles = {
        root: css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: white;
        `,
        circularProgress: css`
          @keyframes changeColor {
            12.5% {
              color: #FF0000;
            }
            25% {
              color: #FFA500;
            }
            37.5% {
              color: #FFFF00;
            }
            50% {
              color: #7FFF00;
            }
            62.5% {
              color: #00FFFF;
            }
            75% {
              color: #0000FF;
            }
            87.5% {
              color: #9932CC;
            }
            100% {
              color: #FF1493;
            }
          }
          animation: MuiCircularProgress-keyframes-circular-rotate 1.4s linear infinite, changeColor 2s linear infinite;
        `,
      };
    
      //const theme = useTheme();
      const isMobile = false; //useMediaQuery(theme.breakpoints.down('sm'));
/*
        <div css={styles.root}>
            <CircularProgress thickness={5} size={isMobile ? 75 : 100} disableShrink
                            css={styles.circularProgress}/>
        </div>
*/
    return (
        <div>
            <CircularProgress thickness={5} size={isMobile ? 75 : 100} disableShrink
            />
        </div>
    );
});

export default Loader;
