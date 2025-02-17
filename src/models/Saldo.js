import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database.js";

export const Credor = sequelize.define("saldo", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },

    valor: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0
    },


}, {tableName: "saldo", timestamps: false})