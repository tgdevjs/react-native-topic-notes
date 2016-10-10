import * as firebase from 'firebase';
import {config} from '../../../config/firebaseConfig'

export const firebaseApp = firebase.initializeApp(config);
export const topicsRef = firebase.database().ref();
