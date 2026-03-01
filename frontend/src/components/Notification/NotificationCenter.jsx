import React from "react";
import PropTypes from "prop-types";
import NotificationPanel from "./NotificationPanel";

import NotificationPopup from "./NotificationPopup";
import { Notifications, NotificationsActive } from "@mui/icons-material";
import { Badge, Tooltip, styled } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Button from "../CustomButtons/Button";
import NotificationItemPropTypes from "./NotificationItemPropTypes";
import linq from "linq";
import { getUnreadItems, getItemsForPopup } from "./helper";

const primaryColor = "#9c27b0";
const grayColor = "#999999";

const StyledButton = styled(Button)(({ theme, ownerstate }) => {
  const { badgeColor } = ownerstate;

  return {
    '& .button': {
      // Base button styles
    },
    '& .badge': {
      width: '20px',
      height: '20px',
      fontSize: theme.typography.pxToRem(10)
    },
    '& .colorSecondary': {
      backgroundColor: grayColor
    },
    '& .icon': {
      // Base icon styles
    },
    '& .iconActive': {
      color: primaryColor
    },
    '& .tooltip': {
      background: theme.palette.common.white,
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[1],
      fontSize: 11
    },
    '& .arrowPopper': {
      '&[x-placement*="bottom"] .arrowArrow': {
        top: 0,
        left: 0,
        marginTop: '-0.9em',
        width: '3em',
        height: '1em',
        '&::before': {
          borderWidth: '0 1em 1em 1em',
          borderColor: `transparent transparent ${theme.palette.common.white} transparent`
        }
      },
      '&[x-placement*="top"] .arrowArrow': {
        bottom: 0,
        left: 0,
        marginBottom: '-0.9em',
        width: '3em',
        height: '1em',
        '&::before': {
          borderWidth: '1em 1em 0 1em',
          borderColor: `${theme.palette.grey[700]} transparent transparent transparent`
        }
      },
      '&[x-placement*="right"] .arrowArrow': {
        left: 0,
        marginLeft: '-0.9em',
        height: '3em',
        width: '1em',
        '&::before': {
          borderWidth: '1em 1em 1em 0',
          borderColor: `transparent ${theme.palette.grey[700]} transparent transparent`
        }
      },
      '&[x-placement*="left"] .arrowArrow': {
        right: 0,
        marginRight: '-0.9em',
        height: '3em',
        width: '1em',
        '&::before': {
          borderWidth: '1em 0 1em 1em',
          borderColor: `transparent transparent transparent ${theme.palette.grey[700]}`
        }
      }
    },
    '& .arrowArrow': {
      position: 'absolute',
      fontSize: 7,
      width: '3em',
      height: '3em',
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid'
      }
    }
  };
});

function defaultButtonComponent({ onClick, items, classes, badgeColor, ...others }) {
  return (
    <StyledButton className="button" onClick={onClick} ownerState={{ badgeColor }} {...others}>
      {items.length > 0 && (
        <Badge
          badgeContent={items.length > 99 ? 99 : items.length}
          color={badgeColor}
          sx={{
            '& .MuiBadge-badge': {
              width: '20px',
              height: '20px',
              fontSize: '0.625rem'
            }
          }}
        >
          <NotificationsActive
            className="icon iconActive"
          />
        </Badge>
      )}
      {items.length <= 0 && <Notifications className="icon" />}
    </StyledButton>
  );
}

function defaultNotificationPanelComponent(props) {
  return <NotificationPanel {...props} />;
}

class NotificationCenter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { panelOpen: false, arrowRef: null };
  }

  onClick = () => {
    this.setState({ panelOpen: !this.state.panelOpen });
  };

  onPanelClose = items => {
    this.setState({ panelOpen: false });
    const finalItems = linq
      .from(items)
      .where(i => i.status !== 'READ')
      .select(i => ({
        id: i.id,
        status: 'READ'
      }))
      .toArray();
    this.updateStatus(finalItems);
  };

  onItemClose = items => {
    this.updateStatus(items.map(item => ({ id: item.id, status: 'DELETED' })));
    const { onDelete } = this.props;
    if (onDelete) onDelete(items);
  };

  onPopupClose = item => {
    this.updateStatus([{ id: item.id, status: 'NOTIFIED' }]);
  };

  updateStatus = items => {
    if (!items || items.length <= 0) return;

    const { onChange } = this.props;
    if (onChange) onChange(items);
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node
    });
  };

  render() {
    const {
      classes,
      ButtonComponent,
      ButtonProps,
      NotificationPanelComponent,
      NotificationPanelProps,
      items,
      title,
      badgeColor,
      unReadBadgeColor,
      displayIn,
      subsequentDelay,
      image
    } = this.props;

    const unReadItems = getUnreadItems(items);
    const popupItems = getItemsForPopup(items);

    return (
      <React.Fragment>
        <Tooltip
          title={
            <React.Fragment>
              {title}
              <span className="arrowArrow" ref={this.handleArrowRef} />
            </React.Fragment>
          }
          placement="bottom"
          PopperProps={{
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(this.state.arrowRef),
                  element: this.state.arrowRef
                }
              }
            }
          }}
        >
          <ButtonComponent
            {...ButtonProps}
            badgeColor={unReadItems.length > 0 ? unReadBadgeColor : badgeColor}
            items={unReadItems.length > 0 ? unReadItems : items}
            onClick={this.onClick}
          />
        </Tooltip>

        <NotificationPanelComponent
          {...NotificationPanelProps}
          image={image}
          items={items}
          title={title}
          open={this.state.panelOpen}
          onPanelClose={this.onPanelClose}
          onItemClose={this.onItemClose}
        />
        <NotificationPopup
          items={popupItems}
          displayIn={displayIn}
          subsequentDelay={subsequentDelay}
          onClose={this.onPopupClose}
        />
      </React.Fragment>
    );
  }
}

NotificationCenter.defaultProps = {
  ButtonComponent: defaultButtonComponent,
  NotificationPanelComponent: defaultNotificationPanelComponent,
  badgeColor: "secondary",
  unReadBadgeColor: "error",
  items: [],
  title: "Notification Center",
  ButtonProps: {},
  NotificationPanelProps: {},
  displayIn: 3000,
  subsequentDelay: 600
};

NotificationCenter.propTypes = {
  ButtonComponent: PropTypes.func,
  ButtonProps: PropTypes.object,
  NotificationPanelComponent: PropTypes.func,
  NotificationPanelProps: PropTypes.object,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(NotificationItemPropTypes)),
  displayIn: PropTypes.number,
  subsequentDelay: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  badgeColor: PropTypes.oneOf(["primary", "secondary", "error"]),
  unReadBadgeColor: PropTypes.oneOf(["primary", "secondary", "error"]),
  image: PropTypes.string
};

const NotificationCenterWithTheme = (props) => {
  const theme = useTheme();
  return <NotificationCenter {...props} theme={theme} />;
};

export default NotificationCenterWithTheme;
