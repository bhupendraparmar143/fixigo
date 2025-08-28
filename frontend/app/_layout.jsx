import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Set the animation options. This is optional.
SplashScreen.preventAutoHideAsync(); // Keep splash screen visible

export default function App() {
  useEffect(() => {
    async function prepare() {
      // Do any async tasks (API calls, DB, etc.)
      await new Promise(resolve => setTimeout(resolve, 2000)); // example delay

      SplashScreen.hideAsync(); // Hide splash when ready
    }
    prepare();
  }, []);

  return <Stack />;
}
