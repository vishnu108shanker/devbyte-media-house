/**
 * MongoDB Atlas Seeder for DevByte Media House
 * Inserts 3 realistic sample publications matching the schema in architecture.md
 * Run with: node scripts/seed-mongo.js
 */

const { MongoClient } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

const samplePublications = [
  {
    video_id: "vid_20260924_01",
    title: "NVIDIA to Acquire Hugging Face — Open-Source AI Inflection",
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
    platforms: {
      youtube: {
        status: "success",
        url: "https://www.youtube.com/shorts/sample1_nv_hf",
      },
      instagram: {
        status: "success",
        url: "https://www.instagram.com/reel/sample1_nv_hf/",
      },
      facebook: {
        status: "success",
        url: "https://www.facebook.com/watch/?v=sample1_nv_hf",
      },
      devbyte_wiki: {
        status: null,
        url: null,
      },
    },
    performance: {
      gemini_script_s: 6.2,
      validator_s: 0.2,
      tts_s: 4.1,
      render_s: 58.4,
      s3_upload_s: 4.3,
      yt_upload_s: 18.2,
      fb_upload_s: 24.1,
      ig_upload_s: 26.5,
      total_s: 142.0,
    },
  },
  {
    video_id: "vid_20260924_02",
    title: "OpenAI Announces Strawberry (o1) Reasoning Breakthrough",
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
    platforms: {
      youtube: {
        status: "success",
        url: "https://www.youtube.com/shorts/sample2_o1_reason",
      },
      instagram: {
        status: "success",
        url: "https://www.instagram.com/reel/sample2_o1_reason/",
      },
      facebook: {
        status: "success",
        url: "https://www.facebook.com/watch/?v=sample2_o1_reason",
      },
      devbyte_wiki: {
        status: null,
        url: null,
      },
    },
    performance: {
      gemini_script_s: 5.8,
      validator_s: 0.3,
      tts_s: 3.9,
      render_s: 54.1,
      s3_upload_s: 4.0,
      yt_upload_s: 16.5,
      fb_upload_s: 22.8,
      ig_upload_s: 25.1,
      total_s: 132.5,
    },
  },
  {
    video_id: "vid_20260923_01",
    title: "Meta Llama 3.3 70B Released — Rivaling Frontier Models",
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString(), // 28 hours ago
    platforms: {
      youtube: {
        status: "success",
        url: "https://www.youtube.com/shorts/sample3_llama33",
      },
      instagram: {
        status: "failed",
        url: null,
      },
      facebook: {
        status: "success",
        url: "https://www.facebook.com/watch/?v=sample3_llama33",
      },
      devbyte_wiki: {
        status: null,
        url: null,
      },
    },
    performance: {
      gemini_script_s: 6.5,
      validator_s: 0.2,
      tts_s: 4.4,
      render_s: 61.2,
      s3_upload_s: 4.5,
      yt_upload_s: 19.1,
      fb_upload_s: 25.0,
      ig_upload_s: 0.0,
      total_s: 120.9,
    },
  },
];

async function seed() {
  const baseUri = process.env.MONGODB_URI;
  if (!baseUri) {
    console.error("MONGODB_URI not found in .env.local");
    process.exit(1);
  }

  const uri = baseUri.includes("?")
    ? baseUri
    : `${baseUri}/devbyte?retryWrites=true&w=majority`;

  console.log("Connecting to MongoDB Atlas...");
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas.");

    const db = client.db("devbyte");
    const collection = db.collection("publications");

    // Clear existing sample documents or insert if empty
    const count = await collection.countDocuments();
    console.log(`Current documents in 'publications': ${count}`);

    if (count === 0) {
      const result = await collection.insertMany(samplePublications);
      console.log(`Inserted ${result.insertedCount} sample publications!`);
    } else {
      console.log("Collection already contains documents. Updating/Upserting sample records...");
      for (const pub of samplePublications) {
        await collection.updateOne(
          { video_id: pub.video_id },
          { $set: pub },
          { upsert: true }
        );
      }
      console.log("Upserted 3 sample records successfully.");
    }
  } catch (err) {
    console.error("MongoDB Seeder Error:", err.message);
  } finally {
    await client.close();
  }
}

seed();
