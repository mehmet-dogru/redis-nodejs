const redis = require("redis");
const client = redis.createClient();

client.on("error", (error) => {
  console.error(error);
});

// SET
client.set("user_name", "Mehmet", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});

// GET
client.get("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});

// GET
client.get("last_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});

// GET
client.get("age", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});

//DEL
client.del("last_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Delete?", message);
});

//EXISTS
client.exists("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Exists", message);
});

//APPEND
client.append("last_name", "Dogru", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Append", message);
});

//PUB - SUB
//publish channelName "message"

client.subscribe("mehmet");

client.on("message", (channel, message) => {
  console.log(`${channel} isimli kanala ${message} içeriği geldi.`);
});
