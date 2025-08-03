import Navbar from "@/components/Header";
import { Minibar } from "@/components/Sidebar";
import VideoGrid from "@/components/VideoGrid";
import { getVideos } from "../lib/youtube";
import Image from "next/image";
import "./HomePage.css"; // Import your CSS file

type Video = {
  id: string;
  title: string;
  views: string;
  time: string;
  thumbnail: string;
  author: string;
  avatar: string;
  link: string;
};

export default async function HomePage() {
  let videos: Video[] = [];
  let offline = false;

  try {
    videos = await getVideos();
  } catch {
    offline = true;
  }

  return (
    <div className="homepage-root">
      <Navbar />
      <div className="homepage-flex">
        <Minibar />
        <main className="homepage-main">
          {offline ? (
            <div className="offline-container">
              <Image
                src="/images/nowifi.jpg"
                width={150}
                height={150}
                alt="No WiFi Astronaut Connection "
                className="offline-image"
              />
              <h3 className="offline-title">Connect to the internet</h3>
              <p className="offline-message">You&apos;re offline. Check your connection.</p>
              <button className="offline-retry">
                Retry
              </button>
              Or
              <span className="offline-download">
                <a
                  href="https://www.youtube.com/feed/downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View your downloaded videos on YouTube 
                </a>
              </span>
            </div>
          ) : (
            <VideoGrid videos={videos} />
          )}
        </main>
      </div>
    </div>
  );
}