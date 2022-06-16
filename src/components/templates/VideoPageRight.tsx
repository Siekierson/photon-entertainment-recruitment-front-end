import ListVideo from "../ListVideo";
import styled from "styled-components";
import MoreButton from "../MoreButton";
import { Video } from "../../../types";
interface VideoProps {
  videos: Video[];
}
const Wrapper = styled.div`
  width: 20%;
`;
const VideoPageRight = ({ videos }: VideoProps) => {
  return (
    <Wrapper>
      <ListVideo videos={videos} />
      <br />
      <MoreButton />
    </Wrapper>
  );
};
export default VideoPageRight;
