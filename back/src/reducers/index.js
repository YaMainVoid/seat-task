import { combineReducers } from 'redux';
import componentsStore from './componentsStore';
import currentDragComponent from './currentDragComponent';
import inputsStore from './inputsStore';
import serverCommunication from './serverCommunication';
import resultModalWindowMainpulator from './resultModalWindowMainpulator';

export default combineReducers({
  componentsStore,
  currentDragComponent,
  inputsStore,
  serverCommunication,
  resultModalWindowMainpulator
})