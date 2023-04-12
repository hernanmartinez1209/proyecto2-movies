require('dotenv')
const config = {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || "dev", //? dev, prod, test
    db: {
      dev: {
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        database: "Movies_Pro",
        username: "postgres",
        password: "node12",
        //Extra configs
        define: {
          timestamps: true,
          underscored: true,
        },
      },
      prod: {
        dialect: "postgres",
        host: process.env.DB_PROT_HOST,
        port: process.envDB_PROT_PORT,
        database: process.env.DB_PROT_NAME,
        username: process.env.DN_PROT_USER,
        password: process.env.DB_PROT_PASS,
        //Extra configs
        define: {
          timestamps: true,
          underscored: true,
        },
        //Esta configuracion es para produccion
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      },
      test: {
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        database: "Movies_Pro",
        username: "postgres",
        password: "root",
        //Extra configs
        define: {
          timestamps: true,
          underscored: true,
        },
      },
    },
  };
  
  module.exports = config