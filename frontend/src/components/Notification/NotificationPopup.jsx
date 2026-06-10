import React from 'react';
import PropTypes from 'prop-types';
import NotificationPopupItem from './NotificationPopupItem';

function defaultPopupItemComponent(props) {
    return <NotificationPopupItem {...props} />;
}

//Render the Popup of the list NotificationPopupItem
export default function NotificationPopup({
    PopupItemComponent = defaultPopupItemComponent,
    items = [],
    displayIn = 3000,
    subsequentDelay = 1000,
    onClose,
    ...others
}) {
    let count = items.length - 1;

    return (
        <>
            {items.map((p, i) => {
                return (
                    <PopupItemComponent
                        {...others}
                        key={p.id || i}
                        {...p}
                        onClose={(e) => {
                            if (p.onClose) p.onClose(e);
                            if (onClose) onClose(e);
                        }}
                        displayIn={displayIn + count-- * subsequentDelay}
                        autoClose={i === 0}
                    />
                );
            })}
        </>
    );
}

NotificationPopup.propTypes = {
    //This property allow to customize the NotificationPopupItem.
    PopupItemComponent: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape(NotificationPopupItem.propTypes)),
    displayIn: PropTypes.number,
    subsequentDelay: PropTypes.number,
    onClose: PropTypes.func
};
