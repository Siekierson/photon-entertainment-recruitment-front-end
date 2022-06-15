import { useState } from "react";
import type { NextPage } from "next";
import Layout from "../src/components/layout";
import { ApiUrl } from "../src/helpers/ApiConfig";
import ListVideo from "../src/components/ListVideo";
import { Video } from "./../types";
interface Props {
  initialData: Video[];
}
const VideoList = ({ initialData }: Props) => {
  const [videos, setVideos] = useState(initialData);
  return (
    <Layout>
      <ListVideo videos={videos} />
    </Layout>
  );
};

VideoList.getInitialProps = async () => {
  const req = await fetch(`${ApiUrl}/videos?pagination[pageSize]=10`);
  const data = await req.json();
  return { initialData: data.data };
};

export default VideoList;
