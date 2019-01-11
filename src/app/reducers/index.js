import { combineReducers } from 'redux';
import counter from './counter';
import headerFooterVisibility from './headerFooterVisibility';

export default combineReducers({ counter, headerFooterVisibility });
