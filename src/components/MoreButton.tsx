import { useContext } from "react";
import styled from "styled-components";
import { VideosContext } from "../contexts/VideosContext";
const Button = styled.button`
  display: block;
  background-color: transparent;
  font-size: 30px;
  width: 50%;
  color: gray;
  margin: auto;
  border: 2px solid gray;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;
  :hover {
    background-color: lightgray;
  }
`;
const MoreButton = () => {
  const { loadMoreVideos } = useContext(VideosContext);
  return <Button onClick={() => loadMoreVideos()}>Więcej</Button>;
};
export default MoreButton;
