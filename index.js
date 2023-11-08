const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.gnm5d1v.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const jobsCollection = client.db("jobDB").collection("jobs");
    const bidsCollection = client.db("jobDB").collection("bids");

    // job post
    app.post("/jobs", async (req, res) => {
      try {
        const job = req.body;
        const result = await jobsCollection.insertOne(job);
        res.send(result);
      } catch (error) {
        console.log(error);
      }
    });

    // job get
    app.get("/jobs", async (req, res) => {
      try {
        const result = await jobsCollection.find().toArray();
        res.send(result);
      } catch (error) {
        console.log(error);
      }
    });
    // get single jobs
    app.get("/jobs/:id", async (req, res) => {
      try {
        const id = req.params.id;
        console.log(id);
        const query = { _id: new ObjectId(id) };
        const result = await jobsCollection.findOne(query);
        res.send(result);
      } catch (err) {
        console.log(err);
      }
    });

    // delete my post jobs
    app.delete("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await jobsCollection.deleteOne(query);
      res.send(result);
    });

    // update jobs
    app.put("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const jobs = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateJobs = {
        $set: {
          email: jobs.email,
          title: jobs.title,
          jobCategory: jobs.jobCategory,
          salleryStart: jobs.salleryStart,
          salleryEnd: jobs.salleryEnd,
          description: jobs.description,
          deadline: jobs.deadline,
        },
      };
      const result = await jobsCollection.updateOne(
        filter,
        updateJobs,
        options
      );
      res.send(result);
    });

    //      single job apply
    app.post("/bids", async (req, res) => {
      try {
        const appliedJob = req.body;
        const result = await bidsCollection.insertOne(appliedJob);
        res.send(result);
      } catch (error) {
        console.log(error);
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Crud is running...");
});

app.listen(port, () => {
  console.log(`Simple Crud is Running on port ${port}`);
});
