import { Sequelize } from 'sequelize'

const dbOptions = {
    //DB variables 
    username: process.env.SERVER_DB_USER || "",
    password: process.env.SERVER_DB_PASSWORD || "",
    database: process.env.SERVER_DB_NAME || "nutrilifdb",
    host: process.env.SERVER_HOST || 'localhost',
    port: Number(process.env.SERVER_PORT) || 3000,
    dialect: process.env.SERVER_DB_DIALECT || 'sqlite'
};

const db = new Sequelize(dbOptions.database, dbOptions.username, dbOptions.password, {
    host: dbOptions.host,
    dialect: 'sqlite', //dbOptions.dialect
    dialectOptions: {
        // useUTC: false,
        timezone: "local",
        bigNumberStrings: true,
        dateStrings: true,
        typeCast: true,
    },
    timezone: 'America/Managua'
});

export default db