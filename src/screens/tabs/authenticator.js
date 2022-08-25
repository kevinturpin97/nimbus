import { getItemAsync, setItemAsync } from "expo-secure-store";

export const USER_KEY = "auth-demo-key";

export const onSignIn = () => setItemAsync(USER_KEY, "true");

export const onSignOut = () => setItemAsync(USER_KEY, "false");

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    getItemAsync(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};