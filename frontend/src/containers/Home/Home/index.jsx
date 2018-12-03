import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const bvhLogo = '/static/images/water-glass-and-faucet.png';
const bvhVodozaborMashZal = '/static/images/vodozab1_mash.jpg';
const bvhOchstnye1 = '/static/images/ochist1.jpg';
const bvhOchstnye2 = '/static/images/ochist2.jpg';
const bvhOchstnyeLaba = '/static/images/ochist_lab.jpg';

const splashSteps = [
    {
        label: 'Водопровод',
        imgPath: bvhLogo,
    },
    {
        label: 'Водозабор, Насосный зал',
        imgPath: bvhVodozaborMashZal,
    },
    {
        label: 'Очистные, Аэротенк',
        imgPath: bvhOchstnye1,
    },
    {
        label: 'Очистные, Отстойник ',
        imgPath: bvhOchstnye2,
    },
    {
        label: 'Очистные, Лаборатория',
        imgPath: bvhOchstnyeLaba,
    },
];

const styles = theme => ({
    img: {
      height: 350,
      display: 'block',
      //maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
      margin: '0 auto',
      objectFit: 'contain',
    },
});
  
class HomeView extends Component {
    static propTypes = {
        statusText: PropTypes.string,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    static defaultProps = {
        statusText: '',
        userName: ''
    };

    state = {
        activeStep: 0,
    };

    /*eslint no-console: ["error", { allow: ["info", "warn", "error"] }] */
    componentDidCatch(error, info) {
        /* Example stack information:
           in ComponentThatThrows (created by App)
           in ErrorBoundary (created by App)
           in div (created by App)
           in App
        */
        console.log(info.componentStack);
    }

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };
    
    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };
    
    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };
        
    render() {
        const { card } = this.props.theme.app;
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = splashSteps.length;
    
        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Брюховецкий водоканал'
                    titleTypographyProps = { card.titleTypography }
                    style = { card.title }
                />
                <CardContent
                    style = { card.text }
                >
                    <AutoPlaySwipeableViews
                        axis = { theme.direction === 'rtl' ? 'x-reverse' : 'x' }
                        index = { activeStep }
                        onChangeIndex = { this.handleStepChange }
                        interval = { 10000 }
                        enableMouseEvents
                    >
                        {
                            splashSteps.map((step, index) => (
                            <div
                                key = { step.label }
                            >
                            {
                                Math.abs(activeStep - index) <= 2 ? (
                                    <img
                                        className = { classes.img }
                                        src = { step.imgPath }
                                        alt = { step.label }
                                    />
                                ) : null 
                            }
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps = { maxSteps }
                        position = 'static'
                        activeStep = { activeStep }
                        className = { classes.mobileStepper }
                        nextButton = {
                            <Button
                                size = 'small'
                                onClick = { this.handleNext }
                                disabled = { activeStep === maxSteps - 1 }
                            >
                                { theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight /> }
                            </Button>
                        }
                        backButton = {
                            <Button
                                size = 'small'
                                onClick = { this.handleBack }
                                disabled = { activeStep === 0 }
                            >
                                { theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft /> }
                            </Button>
                        }
                    />
                </CardContent>
            </Card>
        );
    }
}

/*
                <CardMedia
                    component = 'img'
                    image = { bvhLogo }
                    style= {{
                        width: '50%',
                        margin: '0 auto'
                    }}
                />
<CardTitle
                    title = 'ООО «Брюховецкое водопроводное хозяйство»'
                    subtitle = '352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196'
                />
                <CardActions>
                    {
                    <FlatButton label = '' ><span>Доступ к <b>личной информации</b>.</span></FlatButton>
                    }
                </CardActions>
*/

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default withStyles(styles, { name: 'muiHomeView', flip: false, withTheme: true })(connect(mapStateToProps)(HomeView));
//export { HomeView as HomeViewNotConnected };