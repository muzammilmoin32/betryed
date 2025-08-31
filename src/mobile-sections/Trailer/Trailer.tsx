import { FC } from "react";
import { YOUTUBE_URL } from "src/config/constants";
import styles from "./styles.module.scss";

const youtubeRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/|youtu\.be\/)(watch\?v=|v\/|embed\/|user\/\S+\/|.*?[?&]v=)?([\w-]{11})/;

const extractId = (link: string) => {
  const match = link.match(youtubeRegex);
  if (match) {
    const videoId = match[5];
    return videoId;
  }
  return null;
};

interface Props {
  id?: string;
}

export const Trailer: FC<Props> = ({ id }) => {
  return (
    <div id={id} className={styles.root}>
      <p className={styles.heading}>Trump pepe agenda</p>
      <p className={styles.subHeading}>trailer</p>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${extractId(YOUTUBE_URL)}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
