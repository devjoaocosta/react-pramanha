import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import Header from "./components/Header"

const App = () => (
  <AuthProvider>
    <Header />
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;
