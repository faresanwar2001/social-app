import { GetPosts } from "@/components/apis/posts";
import type { AppDispatch, RootState } from "@/redux/redux-store"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function HomePage() {

  const dispatch=useDispatch<AppDispatch>()
  const posts =useSelector((state: RootState)=>state.posts.posts)

  useEffect(()=>{
    dispatch(GetPosts())
  },[dispatch])
  
  return (
    <div>
    {posts?.map((item)=><div key={item._id}>
      <p>{item.body}</p>
    </div>)}
</div>
  )
}
