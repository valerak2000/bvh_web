import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//import Typography from 'material-ui/Typography';

import './style.scss';
import bvhLogo from '../../images/logo_bvh.png';

class HomeView extends React.Component {
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
/*
            <Paper className={container}>

		<Typography variant="title" color="inherit">
		            Title
	        </Typography>
            <Paper style={style} zDepth={2}>
                <div className="margin-top-medium text-center">
                    <img className="page-logo margin-bottom-medium"
                        src={bvhLogo}
                        alt="ReactJs"
                    />
                </div>
                <Divider />
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <div className="text-left">
                    <div id="name-and-slogan">
                      <div id="site-name" style={{
                            fontSize: "24px",
                            lineHeight: 0.7,
                            width: "400px",
                            height: "auto",
                            padding: "20px 0 0",
                            margin: 0,
                            position: "relative"
                        }}>
                            <strong style={{
                                fontWeight: "bold",
                                fontFamily: "arial"
                                }}>
                                <span>ООО «Брюховецкое водопроводное хозяйство»</span>
                            </strong>
                      </div>
                      <small>
                          <div id="site-slogan">
                            352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196
                          </div>
                      </small>
                    </div>
                    <h4>Привет, {this.props.userName || 'guest'}.</h4>
                </div>
                <div className="margin-top-medium text-center">
                    <p>Доступ к <a onClick={this.goToProtected}><i className="fa fa-lock" /> <b>Личной информации</b></a>.</p>
                </div>
                <div className="margin-top-medium">
                    {this.props.statusText ?
                        <div className="alert alert-info">
                            {this.props.statusText}
                        </div>
                        :
                        null
                    }
                </div>
            </Paper>
*/

    render() {
        const style = {
          height: '100%',
          width: '99%',
          margin: 10,
          textAlign: 'center',
          display: 'inline-block',
        };

        return (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default connect(mapStateToProps)(HomeView);
export { HomeView as HomeViewNotConnected };
