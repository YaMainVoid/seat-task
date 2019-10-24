import { combineReducers } from 'redux';
import componentsStore from './componentsStore';
import orderStore from './orderStore';
import serverCommunication from './serverCommunication';

export default combineReducers({
    componentsStore,
    orderStore,
    serverCommunication
})