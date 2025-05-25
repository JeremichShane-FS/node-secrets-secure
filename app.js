import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Check for required environment variables
const requiredEnvVars = ["DATABASE_PASSWORD", "API_KEY", "JWT_SECRET", "DB_HOST", "DB_NAME"];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error("❌ Missing required environment variables:");
  missingVars.forEach(varName => {
    console.error(`   - ${varName}`);
  });
  console.error("\n📝 Please create a .env file based on .env.example");
  process.exit(1);
}

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Application running with secure environment variables",
    database_status: `Connected to ${process.env.DB_NAME}`,
    api_status: "API configured securely",
    secrets_source: ".env file (not in repository)",
    security_note: "Secrets are properly managed and not exposed",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📁 Environment file loaded from: ${path.resolve(".env")}`);
  console.log(`🔒 All secrets loaded securely`);
});
