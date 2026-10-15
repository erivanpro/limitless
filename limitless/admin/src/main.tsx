// Importe StrictMode de React (aide à détecter les problèmes en développement)
import { StrictMode } from "react";
// Permet de créer la racine React (React 18+)
import { createRoot } from "react-dom/client";
// Fichier CSS global
import "./index.css";
// Composant principal de l’application
import App from "./App.tsx";
// Providers globaux (context, thème, auth, etc.)
import { Providers } from "./providers/index.tsx";
// Router pour la navigation côté client
import { BrowserRouter } from "react-router";
// Crée la racine React à partir de l’élément #root dans index.html
createRoot(document.getElementById("root")!).render(
  // Englobe toute l’app pour activer le routing
  <BrowserRouter>
    {/* Active des vérifications supplémentaires en mode développement */}
    <StrictMode>
      {/* Fournit les contextes globaux à toute l’application */}
      <Providers>
        {/* Composant principal */}
        <App />
      </Providers>
    </StrictMode>
  </BrowserRouter>,
);