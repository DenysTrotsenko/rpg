import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { FS_COLLECTION } from './models';

admin.initializeApp(functions.config().firebase);

/** Test function */
export const helloWorld = functions.https.onCall((data, context) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  return admin.auth.name;
});

export const onUserCreate = functions.auth.user().onCreate((user) => {
  return Promise
    .all([
      admin.firestore().collection(FS_COLLECTION.USERS).doc(user.uid).set({
        name: ''
      })
    ])
    .then(() => {
      functions.logger.info(`User ${user.uid} created!`, { structuredData: true });
    });
});

export const onUserDelete = functions.auth.user().onDelete((user) => {
  return Promise
    .all([
      admin.firestore().collection(FS_COLLECTION.USERS).doc(user.uid).delete()
    ])
    .then(() => {
      functions.logger.info(`User ${user.uid} deleted!`, { structuredData: true });
    });
});
