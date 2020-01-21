module.exports = {
  // Set MySQL connection config
      username: 'root',
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      host: process.env.MYSQL_HOST || '127.0.0.1',
      dialect: 'mysql',
      define: {
        timestamps: false  // I don't want timestamp fields by default
      },
  };