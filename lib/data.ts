import { getMongoClient } from "@/lib/mongodb";
import { Publication } from "@/lib/types";

export const SAMPLE_PUBLICATIONS: Publication[] = [
  {
    _id: "sample_01",
    video_id: "vid_20260924_01",
    title: "NVIDIA to Acquire Hugging Face — Open-Source AI Inflection",
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
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
    _id: "sample_02",
    video_id: "vid_20260924_02",
    title: "OpenAI Announces Strawberry (o1) Reasoning Breakthrough",
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
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
    _id: "sample_03",
    video_id: "vid_20260923_01",
    title: "Meta Llama 3.3 70B Released — Rivaling Frontier Models",
    published_at: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString(),
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

/**
 * Server Component data fetcher — reads from MongoDB Atlas 'publications' collection.
 * Gracefully uses sample data if the cluster is unreachable or empty.
 */
export async function getPublications(): Promise<Publication[]> {
  try {
    const client = await getMongoClient();
    const db = client.db("devbyte");
    const docs = await db
      .collection("publications")
      .find({})
      .sort({ published_at: -1 })
      .toArray();

    if (docs && docs.length > 0) {
      return docs.map((doc) => ({
        _id: doc._id ? doc._id.toString() : doc.video_id,
        video_id: doc.video_id,
        title: doc.title || "Untitled Publication",
        published_at: doc.published_at || new Date().toISOString(),
        platforms: {
          youtube: doc.platforms?.youtube || { status: null, url: null },
          instagram: doc.platforms?.instagram || { status: null, url: null },
          facebook: doc.platforms?.facebook || { status: null, url: null },
          devbyte_wiki: doc.platforms?.devbyte_wiki || { status: null, url: null },
        },
        performance: doc.performance || {
          gemini_script_s: 0,
          validator_s: 0,
          tts_s: 0,
          render_s: 0,
          s3_upload_s: 0,
          yt_upload_s: 0,
          fb_upload_s: 0,
          ig_upload_s: 0,
          total_s: 0,
        },
      })) as Publication[];
    }
  } catch (err) {
    console.error("MongoDB fetch error, falling back to sample data:", (err as Error).message);
  }

  return SAMPLE_PUBLICATIONS;
}

export interface OverviewStats {
  totalPublications: number;
  todayCount: number;
  youtubeSuccess: number;
  instagramSuccess: number;
  facebookSuccess: number;
  avgRenderSeconds: number;
  avgPipelineSeconds: number;
  lastPublishedAt: string | null;
}

export async function getOverviewStats(): Promise<OverviewStats> {
  const publications = await getPublications();

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  let todayCount = 0;
  let ytSuccess = 0;
  let igSuccess = 0;
  let fbSuccess = 0;
  let totalRender = 0;
  let totalPipeline = 0;

  for (const pub of publications) {
    const pubTime = new Date(pub.published_at).getTime();
    if (pubTime >= startOfToday) {
      todayCount++;
    }

    if (pub.platforms.youtube?.status === "success") ytSuccess++;
    if (pub.platforms.instagram?.status === "success") igSuccess++;
    if (pub.platforms.facebook?.status === "success") fbSuccess++;

    totalRender += pub.performance?.render_s || 0;
    totalPipeline += pub.performance?.total_s || 0;
  }

  const count = publications.length || 1;

  return {
    totalPublications: publications.length,
    todayCount,
    youtubeSuccess: ytSuccess,
    instagramSuccess: igSuccess,
    facebookSuccess: fbSuccess,
    avgRenderSeconds: Math.round((totalRender / count) * 10) / 10,
    avgPipelineSeconds: Math.round((totalPipeline / count) * 10) / 10,
    lastPublishedAt: publications[0]?.published_at || null,
  };
}
