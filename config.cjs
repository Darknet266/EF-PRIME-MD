// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNkOWRMSlNzanV5cXRSQmNNZGFEZXZIaVovS1R4bm11ZlV5UnZ3TWhVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWhBRzdBcDFHMkl6NFZ1UUxkbGNoR0JEdTVOMi9RVVdKL2NSYWhhQlZuQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSGQ4TjhNUC96UTFxMkFtakpBVy9mTEdDTG1IREd4RTFGN1pTcHhXUEZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXd2wxeHFmSlZFQkNHWEtpcGxDNGk2R1ZxZVB0ZktYNnZBUVpGcWtuaTJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHU2tIZjUycm5RSnkzOXB1Zm45c1J3S1orVWVqOFh3eFFiYnVWWlRtWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFjMXg3THkzMWYyVzRKOE9xSEVtZEtzM3pncmwveUNkUjJyMkVja0t5bUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0FLNll4UXl1QXI4YUUwajR5d2tCankvblFpdDlGWkhmUzY1dzlaczRWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE1hZWRHQ1dtWU1COExicTVOT21zb0FlTFNTN0gyQ1Q3MWZvc2psNDZ5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktzQWpwSTYxaDRWUWpYWGZHT0wwWTl3TlkyRWdVTjRNZ29Talk1NmVyWXhoQ3IzS1BxRDR6dVFjK2JYWDQ0TXYwZkFBZlhXWXZIcmJ6ejRtSm1uMER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiI0WU9IRmlZZDF3VkNEcXd1N20zb1pzYlR4dHZCbGxYcUptK3ZhNjFNQjlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQSnRsTjZJWlROeVlvcnNZQ2F2WDRBIiwicGhvbmVJZCI6IjZhZGQ1NGQ1LWIwZjUtNGQzMy04ZTQzLTkyOTIwYjEyYTI0NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvWUN2YWZ0WkNYb1BvUU9LVDMrTVFEUFIxc009In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcrMVRPNUFScGJzQzFtVWlxV0EvN0hqZjVRZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xhZW51c0RFTTJ0bXN3R0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBwMHE3dVppYnoySFFGViszT20xYjV1NGhqQU9JMVNkVWdsZ0k1VitCZ289IiwiYWNjb3VudFNpZ25hdHVyZSI6IlA2QkZNVlI0S3FONks4aXR3bXFpdWIzbCtqUzBzS3pOU1grUXhJRFJRMjNaRWdWOGdRWXR5bk40OTh4bFVOcEJSZlNYdXBTcUlSS3hIQUF1U3d1SWl3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwQ21hN01zMFBwMFdUUVJBWTJ3WENnRWpzYTFGTkpCajMyMFI0LzMvTHV6dTU3dVhTeW5sWEtYd1F3ODIwVHZGM1gvamRjRmhYenNGOExOL0ZwamNCZz09In0sIm1lIjp7ImlkIjoiMjM0ODAyOTI2NDc2NjozM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJXaWxsaW5ndG9uIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMjkyNjQ3NjY6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWFkS3U3bVltODloMEJWZnR6cHRXK2J1SVl3RGlOVW5WSUpZQ09WZmdZSyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MDQyODEyMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLUWwifQ==",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'false' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'false' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'false' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'false' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'false' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "private",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "Frank kaumba",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348029264766",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
