import * as firebase from 'firebase';
import {config} from '../../../config/fireBaseConfig'

export const firebaseApp = firebase.initializeApp(config);
