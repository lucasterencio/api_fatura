import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database.js";

export const Credor = sequelize.define("credor", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {tableName: "credores"})