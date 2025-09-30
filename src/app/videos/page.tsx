import { Metadata } from "next";
import VideosClient from "./VideosClient";

export const metadata: Metadata = {
  title: "Videos",
};

export default function VideosPage() {
  return <VideosClient />;
}
