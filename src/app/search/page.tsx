import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostByTerm } from "@/db/queries/posts";

interface ComponentProps {
  searchParams: Promise<{
    term: string;
  }>;
}

export default async function SearchPage({ searchParams }: ComponentProps) {
  const { term } = await searchParams;

  if (!term) {
    redirect("/");
  }

  return <PostList fetchData={() => fetchPostByTerm(term)} />;
}
