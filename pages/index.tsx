import { useState } from "react";
import type { NextPage } from "next";

import Layout from "../src/components/layout";
import { ApiUrl } from "../src/helpers/ApiConfig";
import MainListWrapper from "../src/components/MainViewWrapper";
import VideoTile from "../src/components/VideoTile";
interface ListType {
  id: string;
  attributes: object;
}
const VideoList: NextPage = ({ initialData }: any) => {
  const [videos, setVideos] = useState(initialData);
  return (
    <Layout>
      <MainListWrapper>
        {videos.map((item: ListType) => {
          const { id, attributes } = item;
          return <VideoTile key={id} props={attributes} />;
        })}
      </MainListWrapper>
    </Layout>
  );
};

VideoList.getInitialProps = async () => {
  const req = await fetch(`${ApiUrl}/videos?pagination[pageSize]=10`);
  const data = await req.json();
  return { initialData: data.data };
};

export default VideoList;
