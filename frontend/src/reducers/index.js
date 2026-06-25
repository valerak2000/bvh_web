import { combineReducers } from 'redux';
import authReducer from './auth';
import dataReducer from './data';
import MessageBoxReducer from '../actions/MessageBox/MessageBoxReducer';
import NotificationReducer from '../actions/Notifications/NotificationReducer';

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    messageBox: MessageBoxReducer,
    notifications: NotificationReducer,
});
