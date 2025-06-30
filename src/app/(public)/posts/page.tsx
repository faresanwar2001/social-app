import { GetPosts } from "@/components/apis/posts";
import type { AppDispatch, RootState } from "@/redux/redux-store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadingPosts from "./_components/heading-posts";
import { Forward, MessageCircle, ThumbsUp } from "lucide-react";

export default function Posts() {
    // Variables
    const iconsLink=[
        {icon:<ThumbsUp/>, title:"Like"},
        {icon:<MessageCircle/>, title:"Comment"},
        {icon:<Forward/>, title:"Share"},
    ]

  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);

  // Effect
  useEffect(() => {
    dispatch(GetPosts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 gap-5">
      {posts?.map((item) => (
        <div key={item._id} className="shadow-md rounded-md p-5 flex flex-col gap-2 w-250 mx-auto">
          {/* Heading */}
          <HeadingPosts image={item.user.photo} name={item.user.name}/>

          {/* Body */}
          <p>{item.body}</p>

          {/* Building image */}
          <img src={item.image} alt="body image"/>

          <div className="flex justify-between items-center mt-5 px-4">
            {iconsLink.map(({icon, title})=><div className="flex items-center gap-1 cursor-pointer">
                {/* icon */}
                <p>{icon}</p>

                {/* Title */}
                <p>{title}</p>

            </div>)}
          </div>
        </div>
      ))}
    </div>
  );
}
