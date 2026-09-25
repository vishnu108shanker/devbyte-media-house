// Shared TypeScript types for DevByte Media House.
// Mongo field names are snake_case — matching the schema in architecture.md exactly.
// Map to display names at the component level, never rename in transit.

export type PlatformStatus = "success" | "failed" | null;

export interface PlatformEntry {
  status: PlatformStatus;
  url: string | null;
}

export interface Publication {
  /** MongoDB document _id (serialised as string) */
  _id: string;
  video_id: string;
  title: string;
  published_at: string; // ISO datetime
  platforms: {
    youtube: PlatformEntry;
    instagram: PlatformEntry;
    facebook: PlatformEntry;
    devbyte_wiki: PlatformEntry;
  };
  performance: {
    gemini_script_s: number;
    validator_s: number;
    tts_s: number;
    render_s: number;
    s3_upload_s: number;
    yt_upload_s: number;
    fb_upload_s: number;
    ig_upload_s: number;
    total_s: number;
  };
}
