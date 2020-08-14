import admin from "firebase-admin";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY
        }),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
    });
}

let auth: admin.auth.Auth | null;
let firestore: FirebaseFirestore.Firestore | null;

try {
    auth = admin.auth();
    firestore = admin.firestore();
} catch (e) {
    auth = null;
    firestore = null;
    console.error(e);
}

export { auth, firestore };
