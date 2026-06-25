#!/usr/bin/env node

const path = require("path");
const manifest = require("../examples/manifest.json");
const demos = require("../examples/index");

const [, , command, ...args] = process.argv;

const list = () => {
  console.log("Available demos:\n");
  for (const entry of manifest) {
    console.log(`  ${entry.name.padEnd(16)} ${entry.description}`);
  }
  console.log("\nUsage: npm run demo -- <name> [args...]");
};

if (!command || command === "list" || command === "--help" || command === "-h") {
  list();
  process.exit(0);
}

const entry = manifest.find((e) => e.name === command);

if (!entry) {
  console.error(`Unknown demo: ${command}\n`);
  list();
  process.exit(1);
}

if (entry.file) {
  require(path.join(__dirname, "..", "examples", entry.file));
} else if (demos[command]) {
  demos[command](...args);
} else {
  console.error(`Demo handler not found: ${command}`);
  process.exit(1);
}
