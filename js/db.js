const { MongoClient } = require("mongodb");

 

// Replace the following with your Atlas connection string

const uri =  

  "mongodb+srv://declannherrington:AVuK27P5G2TihD6L@declannherrington.gdmkteb.mongodb.net/?retryWrites=true&w=majority&appName=DeclannDreams";

const client = new MongoClient(uri);

                      

 async function run() {

    try {

        // Connect to the Atlas cluster

         await client.connect();

         // Get the database and collection on which to run the operation

         const db = client.db("DeclannDreams");

         const col = db.collection("GatheringPlaces");


         const document = await col.find().toArray(function (err, docs) {
  // docs is an Array of documents here
});

         // Print results

         console.log("Document found:\n" + JSON.stringify(document));

        } catch (err) {

         console.log(err.stack);

     }

 

     finally {

        await client.close();

    }

}

run().catch(console.dir);

