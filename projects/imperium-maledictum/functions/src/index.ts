import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { FS_COLLECTION } from '../../../std/src/lib/enums';

admin.initializeApp(functions.config().firebase);

export const getSettings = functions.https.onCall((data, context) => {
  return new Promise((resolve) => {
    admin.firestore().collection(FS_COLLECTION.SETTINGS).get().then(snapshot => {
      resolve(snapshot.docs.map(doc => doc.data()));
    });
  });
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
