import { useContext } from "react";
import { VideosContext } from "../src/contexts/VideosContext";
import type { NextPage } from "next";
import Layout from "../src/components/layout";
import { ApiUrl } from "../src/helpers/ApiConfig";
import ListVideo from "../src/components/ListVideo";
import { Video } from "./../types";
import MoreButton from "../src/components/MoreButton";

const VideoList = () => {
  const { videos } = useContext(VideosContext);

  return (
    <Layout>
      <ListVideo videos={videos} />
      <MoreButton />
    </Layout>
  );
};

export default VideoList;
