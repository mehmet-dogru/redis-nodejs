const redis = require("redis");
const client = redis.createClient();

client.on("error", (error) => {
  console.error(error);
});

client.publish("mehmet", "gönderilen mesaj", (err, number) => {
  if (err) {
    return console.log("Error", err);
  }

  console.log(`Mesaj ${number} kişiye gönderildi.`);
});
