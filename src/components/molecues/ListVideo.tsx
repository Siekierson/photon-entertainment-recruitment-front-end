import VideoTile from "../atoms/VideoTile";
import styled from "styled-components";
import { Video } from "../../../types";
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;
interface Props {
  videos: Video[];
}
const ListVideo = ({ videos }: Props) => {
  return (
    <ListWrapper>
      {videos.map((item: Video) => {
        const { id, attributes } = item;
        return <VideoTile key={`${Math.random()}`} attributes={attributes} />;
      })}
    </ListWrapper>
  );
};
export default ListVideo;
