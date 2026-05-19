console.log("🔥 THIS INDEX.JS IS RUNNING 🔥");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(
  "mongodb+srv://bloomuser:38395960@bloom-cluster.nlaw7zr.mongodb.net/bloom?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.log("MongoDB Connection Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend + MongoDB is working!");
});

// Contact form route
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.json({
      success: true,
      message: "Message saved to database!"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving message"
    });
  }
});


// Newsletter route
app.post("/subscribe", (req, res) => {
  const { email } = req.body;
  console.log("New Subscriber:", email);
  res.json({ success: true, message: "Subscribed successfully!" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
