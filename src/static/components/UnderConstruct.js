import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';

class UnderConstruct extends Component {
    render() {
        return (
            <div>
                <p>Раздел находится в раработке</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

UnderConstruct.muiName = 'UnderConstruct';

export default muiThemeable()(connect(mapStateToProps)(UnderConstruct));
