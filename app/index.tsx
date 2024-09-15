import { Redirect } from 'expo-router';
import { useEffect } from 'react';
import LoginScreen from './login/login';
import { LogBox } from 'react-native';
export default function HomeScreen() {
  LogBox.ignoreLogs(['[Layout children]: No route named "login" exists in nested children: ["+not-found", "index", "_sitemap", "(tabs)", "login/login"]']); // Ignore log notification by message
  return <Redirect href={'/login/login'}></Redirect>
}
//   const handleNavigation = () => {
//     router.replace('/login/login'); // Navega para a tela de configurações
//   };
//   useEffect(() => {
// handleNavigation();
//   }, []);
// }
