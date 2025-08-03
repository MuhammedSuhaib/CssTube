interface VideoProps {
  title: string;
  views: string;
  time: string;
  thumbnail: string;
  author: string;
  avatar: string;
  link: string;
}

import "./AppStyles.css";

export default function VideoCard({ title, views, time, thumbnail, author, avatar, link }: VideoProps) {
  return (
    <div className="video-card">
      <a href={link} className="video-card-thumb-link">
        <img
          src={thumbnail}
          alt={title}
          className="video-card-thumb"
        />
      </a>
      <div className="video-card-info">
        <img src={avatar} alt={author} className="video-card-avatar" />
        <div className="video-card-meta">
          <a href={link} className="video-card-title">{title}</a>
          <p className="video-card-author">{author}</p>
          <p className="video-card-stats">{views} views • {time}</p>
        </div>
      </div>
    </div>
  );
}