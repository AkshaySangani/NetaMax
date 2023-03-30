import { getAnalytics, Analytics } from "firebase/analytics";
import { initializeApp, FirebaseOptions } from "firebase/app";
import { getPerformance, FirebasePerformance } from "firebase/performance";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP,
};

const firebaseApp = initializeApp(firebaseConfig);
let analytics: Analytics;
let performance: FirebasePerformance;

if (typeof window !== "undefined") {
  analytics = getAnalytics(firebaseApp);
  performance = getPerformance(firebaseApp);
}

export { analytics, performance };
