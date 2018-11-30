import React from 'react';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import CardHeader from '@material-ui/core/CardHeader';

const CardHeaderDef = ({ title: title, ...props }) => {
    const { card } = props.theme.app;

    return (
        <CardHeader>
            title = { title }
            titleTypographyProps = { card.titleTypography }
            style = { card.title }
        </CardHeader>
    );
};

CardHeaderDef.propTypes = {
    //classes: PropTypes.object.isRequired,
    //className: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default withTheme()(CardHeaderDef);
//export { CardHeaderDef as CardHeader };

/*
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
    const { card } = props.theme.app;

    return (
        <MUCardHeader
            title = { title }
            titleTypographyProps = { card.titleTypography }
            style = { card.title }
        />
    );
}

*/