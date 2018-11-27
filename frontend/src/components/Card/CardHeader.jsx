import React from 'react';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import CardHeader from '@material-ui/core/CardHeader';

function CardHeaderDef(WrappedComponent) {
    return class extends React.Component {
      componentWillReceiveProps(nextProps) {
        console.log('Current props: ', this.props);
        console.log('Next props: ', nextProps);
      }
      render() {
        // Wraps the input component in a container, without mutating it. Good!
        return <WrappedComponent {...this.props} />;
      }
    }
  }

function CardHeader({ ...props }) {
    const { title } = props;
    const { сard } = props.theme.app;

    return (
        <MUCardHeader
            title = { title }
            titleTypographyProps = { сard.titleTypography }
            style = { сard.title }
        />
    );
}

CardHeader.propTypes = {
    //classes: PropTypes.object.isRequired,
    //className: PropTypes.string,
    title: PropTypes.string,
};
  
export default withTheme()(CardHeaderDef);
export { CardHeaderDef as CardHeader };
