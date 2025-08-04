import { getVideoData } from "@/lib/fetch";
import Navbar from "@/components/Header";
import "./VideoDetail.css";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="video-page-root">
      <Navbar />
      <VideoDetail id={params.id} />
    </div>
  );
}

async function VideoDetail({ id }: { id: string }) {
  const { snippet, channelAvatar } = await getVideoData(id);

  return (
    <>
      <div className="video-fullscreen-wrapper">
        <iframe
          title={snippet.title}
          src={`https://www.youtube.com/embed/${id}?rel=0`}
          className="video-detail-iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
      <main className="video-detail-root">
        <h1 className="video-detail-title">{snippet.title}</h1>
        <div className="video-detail-date">
          {new Date(snippet.publishedAt).toDateString()}
        </div>

        <div className="video-detail-channel-row">
          <div className="video-detail-channel-info">
            <img
              src={channelAvatar || "/default-avatar.png"}
              alt="Channel Avatar"
              width={40}
              height={40}
              className="video-detail-avatar"
            />

            <div>
              <p className="video-detail-channel-name">
                {snippet.channelTitle}
              </p>
              <p className="video-detail-subscribers">1.2M subscribers</p>
            </div>
          </div>
          <button className="button-33" role="button">
            Subscribe
          </button>
        </div>
        <p className="video-detail-description">{snippet.description}</p>
      </main>
    </>
  );
}
