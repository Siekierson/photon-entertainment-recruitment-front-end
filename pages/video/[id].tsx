import { useState, useContext, useEffect } from "react";
import { VideosContext } from "../../src/contexts/VideosContext";
import { useRouter } from "next/router";
import Layout from "../../src/components/layout";
import { ApiUrl } from "../../src/helpers/ApiConfig";
import VideoPageLeft from "../../src/components/templates/VIdeoPageLeft";
import VideoPageRight from "../../src/components/templates/VideoPageRight";
import styled from "styled-components";
import { Video } from "../../types";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const VideoPage = () => {
  const [actualVideo, setActualVideo] = useState<Video>({
    id: 0,
    attributes: {},
  });
  const { videos } = useContext(VideosContext);
  const router = useRouter();
  const { id }: any = router.query;
  useEffect(() => {
    const actual = videos.find(
      (item: Video) => (item.attributes.youTubeVideoId = id)
    );
    setActualVideo(actual);
  }, [setActualVideo]);
  return (
    <Layout>
      <Flex>
        <VideoPageLeft id={id} actualVideo={actualVideo}></VideoPageLeft>
        <VideoPageRight videos={videos} />
      </Flex>
    </Layout>
  );
};
export default VideoPage;
