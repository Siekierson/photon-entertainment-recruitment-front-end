import { useContext, useState } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import styled from "styled-components";
import { Comment } from "../../../types";
interface Props {
  id: string;
}
const CommentForm = styled.form`
height;70px;
display:flex;
justify-content:space-evenly;
`;
const Avatar = styled.div`
  height: 60px;
  width: 60px;
  background-color: #111;
  border: 2px solid #fff;
  border-radius: 30px;
`;
const Input = styled.input`
  width: 80%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  border-bottom: 2px solid #fff;
`;
const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
  border-top: 2px solid gray;
  padding-top: 10px;
`;
const CommentData = styled.div`
  width: 80%;
`;
const Comments = ({ id }: Props) => {
  const { addComment, getCommentsById } = useContext(CommentsContext);
  const [comments, setComments] = useState<Comment[]>([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <CommentForm
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue.length > 0) {
            addComment(id, inputValue);
            setComments([
              ...comments,
              {
                filmId: id,
                date: new Date(),
                message: inputValue,
              },
            ]);
            setInputValue("");
          }
        }}
      >
        <Avatar />
        <Input
          type="txt"
          placeholder="Twój komentarz"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </CommentForm>
      <div>
        {comments.length > 0 ? (
          <>
            {comments.map((item: Comment) => {
              const { filmId, date, message } = item;
              console.log(item);
              return (
                <>
                  {filmId === id ? (
                    <CommentWrapper key={`${Math.random()}`}>
                      <Avatar />
                      <CommentData>
                        <h4>
                          {date.toLocaleDateString("pl", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </h4>
                        <h2>{message}</h2>
                      </CommentData>
                    </CommentWrapper>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </>
        ) : (
          <h2>Brak komentarzy</h2>
        )}
      </div>
    </div>
  );
};
export default Comments;
