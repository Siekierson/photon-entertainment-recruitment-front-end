import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { VideosContext } from "../../contexts/VideosContext";
import { Video } from "../../../types";
const Comments = styled.div``;
const Wrapper = styled.div`
  width: 60%;
  padding: 20px;
`;
const Screen = styled.iframe`
  width: 768px;
  height: 432px;
`;
interface Props {
  id: string;
  actualVideo: Video;
}
const VideoPageLeft = ({ id, actualVideo }: Props) => {
  const { videos } = useContext(VideosContext);
  const { description } = actualVideo.attributes;

  return (
    <Wrapper>
      <Screen
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Screen>
      <br />
      <div>{description}</div>
      <h3>Autor</h3>
      <br />
      <Comments>
        <input type="text" />
        <div>comments</div>
      </Comments>
    </Wrapper>
  );
};
export default VideoPageLeft;
