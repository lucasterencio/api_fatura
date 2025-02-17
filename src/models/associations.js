import { Credor } from "./Credor.js";
import { Conta } from "./Conta.js";

Credor.hasMany(Conta, {foreignKey: "credor_id"})
Conta.belongsTo(Credor, {foreignKey: "credor_id"})