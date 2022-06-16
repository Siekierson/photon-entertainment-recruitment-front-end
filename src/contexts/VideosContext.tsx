import {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
  useEffect,
} from "react";
import { ApiUrl } from "../helpers/ApiConfig";
import { Video } from "../../types";
export const VideosContext = createContext<any>(null);

interface Props {
  children: ReactNode;
}
const VideosProvider = ({ children }: Props) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [pageId, setPageId] = useState<number>(1);
  async function loadMoreVideos() {
    const req = await fetch(
      `${ApiUrl}/videos?pagination[pageSize]=10&pagination[page]=${pageId + 1}`
    );
    const data = await req.json();
    const newVideos = [...videos, ...data.data];
    setVideos(newVideos);
    setPageId(pageId + 1);
  }
  async function getVideos() {
    const req = await fetch(
      `${ApiUrl}/videos?pagination[pageSize]=10&pagination[page]=1`
    );
    const data = await req.json();
    setVideos(data.data);
  }
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <VideosContext.Provider value={{ videos, loadMoreVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideosProvider;
