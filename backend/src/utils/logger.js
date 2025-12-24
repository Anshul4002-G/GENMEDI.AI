const fs = require("fs");
const path = require("path");

class Logger {
  constructor() {
    this.logDir = path.join(__dirname, "../../logs");
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(level, message, data = {}) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message} ${JSON.stringify(
      data
    )}`;

    console.log(logMessage);

    const logFile = path.join(this.logDir, `${level.toLowerCase()}.log`);
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  info(message, data) {
    this.log("INFO", message, data);
  }

  error(message, data) {
    this.log("ERROR", message, data);
  }

  warn(message, data) {
    this.log("WARN", message, data);
  }
}

module.exports = new Logger();
