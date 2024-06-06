import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AdminPage from './components/AdminPage';
export const SIGNIN = "/admin-sign-in";
const App = () => {
  return (
    <Router>
      <Switch>
      <Route
          path={links.SIGNIN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Rota para a página de login */}
        <Route exact path="/adm/login" component={HomePage} />

        {/* Rota para a área de administração */}
        <Route exact path="/adm" component={AdminPage} />

        {/* Outras rotas públicas ou privadas podem ser adicionadas aqui */}
      </Switch>
    </Router>
  );
};

export default App;
