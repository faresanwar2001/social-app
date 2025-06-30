declare type User = {
  _id: string;
  name: string;
  photo: string;
};

declare type Comments = {
  _id: string;
  content: string;
  commentCreator: {
    _id: string;
    name: string;
    photo: string;
  };
  post: string;
};

declare type Posts = {
  _id: string;
  body: string;
  image: string;
  user: User;
  comments: Comments;
};
