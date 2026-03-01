import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actionCreators from '../../actions/data';
import UnderConstruct from '../../components/UnderConstruct/UnderConstruct';

function ProtectedView(props) {
    const { token, actions, isFetching } = props;

    React.useEffect(() => {
        actions.dataFetchProtectedData(token);
    }, [token, actions]);

    return (
        <div>
            <div>
                <h2>Личная информация</h2>
                {
                    isFetching === true ?
                        <p>Загрузка данных...</p>
                        :
                        <UnderConstruct />
                }
            </div>
        </div>
    );
}

ProtectedView.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.string,
    token: PropTypes.string.isRequired,
    actions: PropTypes.shape({
        dataFetchProtectedData: PropTypes.func.isRequired
    }).isRequired
};

ProtectedView.defaultProps = {
    data: ''
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedView);
