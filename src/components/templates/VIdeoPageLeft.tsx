import styled from "styled-components";
const Comments = styled.div``;
const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
`;
const Screen = styled.iframe`
  width: 768px;
  height: 432px;
`;
interface Props {
  id: string;
}
const VideoPageLeft = ({ id }: Props) => {
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
      <h2>opis</h2>
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
