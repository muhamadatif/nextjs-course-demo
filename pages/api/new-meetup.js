import { MongoClient } from "mongodb";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://mohamedatif:uNihCyzvijoKMiwF@cluster0.efrktsx.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    console.log(db);
    const meetupsCollection = db.collection("meetups");
    console.log(meetupsCollection);

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({
      message: "Meetup inserted",
    });
  }
};

export default handler;
