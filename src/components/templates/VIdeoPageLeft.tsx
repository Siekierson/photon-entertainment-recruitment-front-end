import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { VideosContext } from "../../contexts/VideosContext";
import { Video, Attributes } from "../../../types";
import { AiFillLike, AiFillDislike } from "react-icons/Ai";
import Comments from "./../Comments";
const Wrapper = styled.div`
  width: 65%;
  padding: 20px;
  min-height: 100vh;
  
`;
const Screen = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const LikePanel = styled.div`
  width: 35%;
  font-size: 30px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-evenly;
  > div {
    display: flex;
    flex-wrap: wrap;
    > svg,
    h3 {
      display: block;
      margin: auto;
    }
  }
`;
const Title = styled.div`
  width: 60%;
`;
const Author = styled.div`
  display: flex;
  height: 80px;
  > * {
    margin: auto 5px;
  }
  > #avatar {
    background-color: #111;
    border: 2px solid white;
    height: 60px;
    width: 60px;
    border-radius: 30px;
  }
  > #authorName {
    display: flex;
    > * {
      margin-left: 15px;
    }
  }
`;
interface Props {
  id: string;
  actualVideoAttributes: Attributes;
}
const VideoPageLeft = ({ id, actualVideoAttributes }: Props) => {
  const { videos } = useContext(VideosContext);
  const {
    title,
    viewCount,
    publishedDate,
    description,
    likeCount,
    dislikeCount,
  } = actualVideoAttributes;
  const published = new Date(publishedDate).toLocaleDateString("pl", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Wrapper>
      <Screen>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width="100%"
          height="100%"
        ></iframe>
      </Screen>
      <br />
      <Flex>
        <Title>
          <h1>{title}</h1>
          <h3>{viewCount} wyświetleń</h3>
          <h4>{published}</h4>
        </Title>
        <LikePanel>
          <div>
            <AiFillLike />
            <h3>{likeCount}</h3>
          </div>
          <div>
            <AiFillDislike />
            <h3>{dislikeCount}</h3>
          </div>
        </LikePanel>
      </Flex>

      <div dangerouslySetInnerHTML={{ __html: description }} />
      <Author>
        <div id="avatar"></div>
        <div id="authorName">
          <h2>Autor</h2>
          <h4>-- subskrybcji</h4>
        </div>
      </Author>
      <br />
      <Comments id={id} />
    </Wrapper>
  );
};
export default VideoPageLeft;
