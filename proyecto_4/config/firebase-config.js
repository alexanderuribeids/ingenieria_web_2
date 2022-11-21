import { initializeApp, getApp } from 'firebase/app';
import 'firebase/auth';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

export default function initFirebase(){
  // if a Firebase instance doesn't exist, create one
  let app;
  try {
    app = getApp("sample-oauth")
  } catch (error) {
    console.log("App no inicializada, llamando initializeApp")
  } 
  if (!app) {
    return initializeApp(FirebaseCredentials,"sample-oauth")
  }else{
    return app
  }
};