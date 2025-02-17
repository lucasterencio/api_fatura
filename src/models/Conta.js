import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database.js";

export const Conta = sequelize.define("conta", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },

    estabelecimento: {
        type: DataTypes.STRING,
        allowNull: false
    },

    data_compra: {
        type: DataTypes.STRING,
        allowNull: false
    },

    parcelas: {
        type: DataTypes.STRING,
        allowNull: false
    },

    valor: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },

    status: {
        type: DataTypes.ENUM("Pendente", "Pago"),
        defaultValue: "Pendente",
        allowNull: false
    },

    user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
}, {tableName: "contas"})