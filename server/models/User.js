import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("Users", 
    {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("candidat","admin", "evaluateur"),
    allowNull: false,
    defaultValue: "candidat",
  },},
  {
    tableName: "Users",
    timestamps: true,
  }
);

export default User;
