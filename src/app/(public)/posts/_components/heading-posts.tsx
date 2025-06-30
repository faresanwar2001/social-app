import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Ellipsis, X } from "lucide-react";

type HeadingPostsProps = {
  image: string;
  name: string;
};

export default function HeadingPosts({ image, name }: HeadingPostsProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <Avatar>
          <AvatarFallback />
          <AvatarImage src={image} />
        </Avatar>

        {/* Name */}
        <p className="font-semibold">{name}</p>
      </div>

      <div className="flex items-center gap-3">
        {/* icons */}
        <Ellipsis />

        <X />
      </div>
    </div>
  );
}
