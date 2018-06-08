import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

//import './style.scss';
import bvhLogo from '../../../images/water-glass-and-faucet.png';

class HomeView extends Component {
    static propTypes = {
        statusText: PropTypes.string,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
        statusText: '',
        userName: ''
    };

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };

    render() {
        return (
            <Card
                style= {{
                    width: '100%',
                    margin: '0 auto'
                }}
            >
                <CardMedia
                    style= {{
                        width: '50%',
                        margin: '0 auto'
                    }}
                >
                    <img
                        src = { bvhLogo }
                        alt = ''
                    />
                </CardMedia>
                {/*
                <CardTitle
                    title = 'ООО «Брюховецкое водопроводное хозяйство»'
                    subtitle = '352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196'
                />
                */}
                <CardText>
                    <p><strong>ООО «Брюховецкое водопроводное хозяйство» занимается водоснабжением и водоотведением ст.Брюховецой на основе договора долгосрочной аренды с 2006 года.</strong></p>
                    Предприятие было образовано 1 февраля 2006 года
                </CardText>
                <CardActions>
                    {/*
                    <FlatButton label = '' ><span>Доступ к <b>личной информации</b>.</span></FlatButton>
                    */}
                </CardActions>
            </Card>
        );
    }
}

/*
     <Card style={{width: '50%', margin: '0 auto'}}>
      <CardMedia><img src="http://www.material-ui.com/images/get-started.svg" alt=""/></CardMedia>
     </Card>
*/
const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default muiThemeable()(connect(mapStateToProps)(HomeView));
export { HomeView as HomeViewNotConnected };
