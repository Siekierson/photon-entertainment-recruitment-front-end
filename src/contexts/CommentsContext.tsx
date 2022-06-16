import { createContext, useState, useContext, FC, ReactNode } from "react";

export const CommentsContext = createContext<any>(null);

interface Comment {
  filmId: string;
  message: string;
}
interface Props {
  children: ReactNode;
}
const CommentsProvider = ({ children }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
