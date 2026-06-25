import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

// Loader component for code splitting
const Loader = (loadComponent) => {
    return class LoaderComponent extends React.Component {
        static propTypes = {
            location: PropTypes.shape({
                pathname: PropTypes.string.isRequired
            })
        };

        constructor(props) {
            super(props);
            this.state = {
                Component: null
            };
        }

        async componentDidMount() {
            const { default: Component } = await loadComponent();
            this.setState({ Component });
        }

        async componentDidUpdate(prevProps) {
            // Reload component on location change if needed
            if (prevProps.location?.pathname !== this.props.location?.pathname) {
                const { default: Component } = await loadComponent();
                this.setState({ Component });
            }
        }

        render() {
            const { Component } = this.state;
            if (!Component) {
                return (
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '100vh' 
                    }}>
                        <CircularProgress />
                    </div>
                );
            }
            return <Component {...this.props} />;
        }
    };
};

export default Loader;
