import { createContext, useState, useContext, FC, ReactNode } from "react";
import {Comment} from '../../types'
export const CommentsContext = createContext<any>(null);


interface Props {
  children: ReactNode;
}
const CommentsProvider = ({ children }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);
  function addComment(id: string, message: string) {
    setComments([
      ...comments,
      {
        filmId: id,
        message: message,
        date: new Date(),
      },
    ]);
  }
  function getCommentsById(id: string) {
    const matchComments: Comment[] = [];
    comments.forEach((item) => {
      if (item.filmId === id) {
        matchComments.push(item);
      }
    });
    return matchComments;
  }
  return (
    <CommentsContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
