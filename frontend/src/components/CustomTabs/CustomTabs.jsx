// core components
import Card from '../Card/Card.jsx';
import CardBody from '../Card/CardBody.jsx';
import CardHeader from '../Card/CardHeader.jsx';
import LinearProgress from '@material-ui/core/LinearProgress';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
// nodejs library that concatenates classes
import classNames from 'classnames';
import customTabsStyle from './customTabsStyle.jsx';
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';

class CustomTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      classes,
      headerColor,
      plainTabs,
      tabs,
      title,
      rtlActive,
      loading
    } = this.props;
    const cardTitle = classNames({
      [classes.cardTitle]: true,
      [classes.cardTitleRTL]: rtlActive
    });
    return (
      <Card plain={plainTabs}>
        <CardHeader color={headerColor} plain={plainTabs}>
          {title !== undefined ? (
            <div className={cardTitle}>{title}</div>
          ) : null}
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.displayNone
            }}
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabs.map((prop, key) => {
              let icon = {};
              if (prop.tabIcon) {
                icon = {
                  icon: <prop.tabIcon />
                };
              }
              return (
                <Tab
                  classes={{
                    root: classes.tabRootButton,
                    labelContainer: classes.tabLabelContainer,
                    label: classes.tabLabel,
                    selected: classes.tabSelected,
                    wrapper: classes.tabWrapper
                  }}
                  key={key}
                  label={prop.tabName}
                  {...icon}
                />
              );
            })}
          </Tabs>
          {loading && <LinearProgress color="secondary" />}
        </CardHeader>
        <CardBody>
          {tabs.map((prop, key) => {
            if (key === this.state.value) {
              return <div key={key}>{prop.tabContent}</div>;
            }
            return null;
          })}
        </CardBody>
      </Card>
    );
  }
}

CustomTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'secondary'
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node.isRequired
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
};

export default withStyles(customTabsStyle)(CustomTabs);
