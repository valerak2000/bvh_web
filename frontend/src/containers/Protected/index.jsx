import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';

import * as actionCreators from '../../actions/data';
import UnderConstruct from '../../components/UnderConstruct/UnderConstruct';

class ProtectedView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.string,
        token: PropTypes.string.isRequired,
        actions: PropTypes.shape({
            dataFetchProtectedData: PropTypes.func.isRequired
        }).isRequired
    };

    static defaultProps = {
        data: ''
    };

    // Note: have to use componentWillMount, if I add this in constructor will get error:
    // Warning: setState(...): Cannot update during an existing state transition (such as within `render`).
    // Render methods should be a pure function of props and state.
    componentDidMount() {
        const token = this.props.token;
        this.props.actions.dataFetchProtectedData(token);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Личная информация</h2>
                    { 
                        this.props.isFetching === true ?
                            <p>Загрузка данных...</p>
                            :
                            <UnderConstruct />
                    }
                </div>
            </div>
        );
    }
}
//
const mapStateToProps = (state) => {
    return {
        data: state.data.data,
        isFetching: state.data.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default withTheme()(connect(mapStateToProps, mapDispatchToProps)(ProtectedView));
export { ProtectedView as ProtectedViewNotConnected };
