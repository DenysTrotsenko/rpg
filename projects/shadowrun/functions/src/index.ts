/* eslint-disable */
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as cors from 'cors';
import { FS_COLLECTION } from './models';

admin.initializeApp(functions.config().firebase);

// const corsHandler = cors({ origin: true });

/** Test function */
// export const helloWorld = functions.https.onRequest((request, response) => {
//   corsHandler(request, response, () => {
//     functions.logger.info('Hello logs!', { structuredData: true });
//     response.send('Hello from Firebase!');
//   });
// });

export const onUserCreate = functions.auth.user().onCreate((user) => {
  return Promise
    .all([
      admin.firestore().collection(FS_COLLECTION.USERS).doc(user.uid).set({
        avatar: '',
        permissions: [],
        username: ''
      }),
      // admin.firestore().collection(FS_COLLECTION.CHARACTERS).doc(user.uid).set({}),
    ])
    .then(() => {
      functions.logger.info(`User ${user.uid} created!`, { structuredData: true });
    });
});

export const onUserDelete = functions.auth.user().onDelete((user) => {
  return Promise
    .all([
      admin.firestore().collection(FS_COLLECTION.USERS).doc(user.uid).delete(),
      admin.firestore().collection(FS_COLLECTION.CHARACTERS).doc(user.uid).delete(),
    ])
    .then(() => {
      functions.logger.info(`User ${user.uid} deleted!`, { structuredData: true });
    });
});
