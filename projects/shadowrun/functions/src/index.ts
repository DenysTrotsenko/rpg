/* eslint-disable */
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import { FS_COLLECTION } from './models';

admin.initializeApp(functions.config().firebase);

// import * as cors from 'cors';
// const corsHandler = cors({ origin: true });
// export const helloWorld = functions.https.onRequest((request, response) => {
//   corsHandler(request, response, () => {
//     // functions.logger.info('Hello logs!', { structuredData: true });
//     console.log(request);
//     response.send({ data: 'Hello from Firebase!' });
//   });
// });

// export const onUserCreate = functions.auth.user().onCreate((user) => {
//   return Promise
//     .all([
//       admin.firestore().collection(FS_COLLECTION.USERS).doc(user.uid).set({
//         avatar: '',
//         permissions: [],
//         username: ''
//       }),
//       admin.firestore().collection(FS_COLLECTION.CHARACTERS).doc(user.uid).set({}),
//     ])
//     .then(() => {
//       functions.logger.info(`User ${user.uid} created!`, { structuredData: true });
//     });
// });

// export const onUserDelete = functions.auth.user().onDelete((user) => {
//   return Promise
//     .all([
//       admin.firestore().collection(FS_COLLECTION.USERS).doc(user.uid).delete(),
//       admin.firestore().collection(FS_COLLECTION.CHARACTERS).doc(user.uid).delete(),
//     ])
//     .then(() => {
//       functions.logger.info(`User ${user.uid} deleted!`, { structuredData: true });
//     });
// });

export const getCharacters = functions.https.onCall((data, context) => {
  const uid = context?.auth?.uid;

  if (!uid) { return []; }
  return [];
});
