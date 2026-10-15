// Composants nécessaires pour gérer les routes et redirections
import { Routes, Route, Navigate } from "react-router";
// Hook pour lire les cookies côté client
import { useCookies } from "react-cookie";
// Page de connexion
import Login from "./views/auth";
// Provider du contexte d’authentification
import { AuthProvider } from "./context/auth/provider";
// Page listant les utilisateurs
import Users from "./views/users";
// Page détail d’un utilisateur
import UserDetails from "./views/users/details";

function App() {
  // Récupère le cookie "access_token"
  const [cookies] = useCookies(["access_token"]);
  // Vérifie si l’utilisateur est authentifié
  const isAuthenticated = cookies.access_token;
  return (
    // Fournit le contexte d’authentification à toute l’application
    <AuthProvider>
      {/* Déclaration des routes */}
      <Routes>
        {/* Route racine */}
        <Route
          path="/"
          // Si connecté → redirection vers /users, sinon → page Login
          element={isAuthenticated ? <Navigate to="/users" /> : <Login />}
        />
        {/* Routes protégées */}
        {isAuthenticated ? (
          <>
            {/* Liste des utilisateurs */}
            <Route path="/users" element={<Users />} />

            {/* Détail d’un utilisateur via l’ID */}
            <Route path="/users/:id" element={<UserDetails />} />
          </>
        ) : (
          // Toute autre route redirige vers la page de login
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </AuthProvider>
  );
}

export default App;