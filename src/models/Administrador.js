import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database.js";

export const Administrador = sequelize.define("administrador", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {tableName: "administradores"})