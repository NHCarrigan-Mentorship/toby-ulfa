const app = require("./app");
const db = require("./models"); // this loads models + associations

const PORT = process.env.PORT || 3000;

db.sequelize
  .sync({ alter: true }) // alter keeps schema updated without dropping
  .then(() => {
    console.log("✅ Database Connected & Synced");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to sync database:", err);
  });
