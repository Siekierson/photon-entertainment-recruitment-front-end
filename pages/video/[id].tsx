import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../src/components/layout";
import { ApiUrl } from "../../src/helpers/ApiConfig";
import VideoPageLeft from "../../src/components/templates/VIdeoPageLeft";
import VideoPageRight from "../../src/components/templates/VideoPageRight";
import styled from "styled-components";
import { Video } from "../../types";
interface Props {
  initialData: Video[];
}
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const VideoPage = ({ initialData }: Props) => {
  const [videos, setVideos] = useState(initialData);
  const router = useRouter();
  const { id }: any = router.query;
  return (
    <Layout>
      <Flex>
        <VideoPageLeft id={id}></VideoPageLeft>
        <VideoPageRight videos={videos} />
      </Flex>
    </Layout>
  );
};
VideoPage.getInitialProps = async () => {
  const req = await fetch(`${ApiUrl}/videos?pagination[pageSize]=10`);
  const data = await req.json();
  return { initialData: data.data };
};
export default VideoPage;
