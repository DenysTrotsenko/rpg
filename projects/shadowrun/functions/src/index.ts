/* eslint-disable */
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { DEFAULT_USER, FS_COLLECTION } from './models';

admin.initializeApp(functions.config().firebase);

// const CHARACTER_COLLECTION = admin.firestore().collection(FS_COLLECTION.CHARACTERS);
const USER_COLLECTION = admin.firestore().collection(FS_COLLECTION.USERS);

export const onUserCreate = functions.region('europe-west3').auth.user().onCreate((user) => {
  return Promise
    .all([
      USER_COLLECTION.doc(user.uid).set(DEFAULT_USER)
    ])
    .then(() => {
      functions.logger.info(`User ${user.uid} created!`, { structuredData: true });
    });
});

export const onUserDelete = functions.region('europe-west3').auth.user().onDelete((user) => {
  return Promise
    .all([
      USER_COLLECTION.doc(user.uid).delete()
    ])
    .then(() => {
      functions.logger.info(`User ${user.uid} deleted!`, { structuredData: true });
    });
});

export const onCharacterCreate = functions.region('europe-west3').firestore.document('characters/{id}').onCreate((snapshot, context) => {
  // const document = snapshot.exists ? snapshot.data() : null;
  // const ref = snapshot.exists ? snapshot.ref : null;
  return true;
});

export const onCharacterUpdate = functions.region('europe-west3').firestore.document('characters/{id}').onUpdate((change, context) => {
  // const document = change.after.exists ? change.after.data() : null;
  // const ref = change.after.exists ? change.after.ref : null;
  return true;
});

export const onCharacterDelete = functions.region('europe-west3').firestore.document('characters/{id}').onDelete((snapshot, context) => {
  // const document = snapshot.exists ? snapshot.data() : null;
  // const ref = snapshot.exists ? snapshot.ref : null;
  return true;
});
