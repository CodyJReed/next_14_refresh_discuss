import Link from "next/link";
import { Suspense } from "react";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";
import PostShowLoading from "@/components/posts/post-show-loading";

interface PostShowPageProps {
  params: Promise<{
    slug: string;
    id: string;
  }>;
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, id } = await params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow id={id} />
      </Suspense>
      <CommentCreateForm postId={id} startOpen />
      <CommentList postId={id} />
    </div>
  );
}
