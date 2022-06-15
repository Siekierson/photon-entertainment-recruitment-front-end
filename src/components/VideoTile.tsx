import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
const Container = styled.a`
  display: block;
  width: 240px;
  > h2 {
    font-size: 20px;
  }
  > h3 {
    font-size: 10px;
  }
`;
const ThumbNail = styled(Image)`
  display: block;
`;
const VideoTile = ({ props }: any) => {
  const { title, viewCount, youTubeVideoId } = props;
  return (
    <Link href={`/video/${youTubeVideoId}`}>
      <Container>
        <ThumbNail
          src={`https://img.youtube.com/vi/${youTubeVideoId}/hqdefault.jpg`}
          alt={title}
          height={192}
          width={240}
        />
        <h2>{title}</h2>
        <h4>{viewCount} wyświetleń</h4>
      </Container>
    </Link>
  );
};
export default VideoTile;
