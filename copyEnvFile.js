/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable require-jsdoc */

/**
 * Generate a `.env.production` file depending on the value from TARGET_ENV environment variable
 * created with ❤️ by Tona González (@martiuh)
 */
const fs = require("fs");

/**
 * @description copies the given `.env.base.${TARGET_ENV}` file to a `.env.production` file.
 */

const env = {
  production: "production",
  ppe: "ppe",
  qa: "qa",
};

function copyEnvFile() {
  const target = env[process.argv[2]] || env.development;
  const dotenvPath = process.cwd() + `/.env.${target}`;
  const fileStats = fs.statSync(dotenvPath);

  if (!fileStats.isFile()) {
    console.error(`[copyEnvFile] ${dotenvPath} is not a valid file`);
  }

  const prodDotEnv = ".env.production";
  try {
    fs.copyFileSync(dotenvPath, `${process.cwd()}/${prodDotEnv}`);
    console.log(`${prodDotEnv} successfully copied with TARGET_ENV=${target}`);
  } catch (error) {
    console.error(`[copyEnvFile] there was an error copying ${prodDotEnv} file`);
    console.error(error);
    process.exit(1);
  }
  return;
}

copyEnvFile();
