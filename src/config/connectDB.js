const mysql = require("mysql");
const path = require("path");
const fs = require("fs");
let connectDB = async () => {
  try {
    // Create a connection pool
    const pool = mysql.createPool({
      connectionLimit: 10, // Adjust as needed
      host: "localhost",
      user: "root",
      password: "",
      database: "rubysquad", // Include your database name
    });

    // Get a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Unable to get a connection from the pool:", err);
        return;
      }
      const sqlFilePath = path.join(__dirname, "..", "database", "test.sql");

      console.log(sqlFilePath);
      const sqlFile = fs.readFileSync(sqlFilePath, "utf8");

      // Execute the SQL queries
      connection.query(sqlFile, (queryErr, results) => {
        // Release the connection back to the pool
        connection.release();

        if (queryErr) {
          console.error("Error executing SQL file:", queryErr);
        } else {
          console.log("SQL file executed successfully:", results);
        }
      });
    });
  } catch (error) {
    console.error("Error during SQL file import:", error);
  }
};
module.exports = connectDB;
