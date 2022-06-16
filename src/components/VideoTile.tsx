import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
const Container = styled.a`
  padding: 4px;
  display: block;
  width: 270px;
  transition: 0.3s;
  border: 3px solid transparent;
  border-radius: 5px;
  :hover {
    border: 3px solid #666;
  }
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
          height={200}
          width={270}
        />
        <h2>{title.length < 46 ? title : `${title.substring(0, 40)}...`}</h2>
        <h4>{viewCount} wyświetleń</h4>
      </Container>
    </Link>
  );
};
export default VideoTile;
