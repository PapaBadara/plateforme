import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import cors from "cors";  //
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Autoriser les requêtes depuis le frontend 
app.use(
  cors({
    origin: "http://localhost:5176", 
    credentials: true, 
  })
);
// Middleware pour parser les requêtes JSON
app.use(express.json());

app.use("/api/auth", authRoutes);

// Démarrer le serveur après vérification de la connexion à la BD
async function startServer() {
  try {
    await sequelize.authenticate();
    
    // await sequelize.sync({ alter: true });
    // await sequelize.sync({ force: true });


    console.log("Connexion à la base de données réussie.");

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erreur de connexion à la base de données :", error.message);
  }
}
startServer();
