import { lazy, Suspense } from "react";
const Posts = lazy(()=> import ("../posts/page" ))

export default function HomePage() {
  
  return (
    <Suspense fallback={"Loading"}>
      {/* Posts */}
    <Posts/>
</Suspense>
  )
}
