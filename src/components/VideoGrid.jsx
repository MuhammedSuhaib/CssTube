import VideoCard from './VideoCard';
import "./AppStyles.css";

export default function VideoGrid({ videos }) {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
}