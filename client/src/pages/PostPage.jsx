import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Spinner } from "flowbite-react";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";
import MarkdownIt from 'markdown-it';

const mdParser = new MarkdownIt();

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setError(null);
          setLoading(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen dark:bg-gray-900">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-7xl mx-auto min-h-screen dark:bg-gray-900">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-4xl mx-auto lg:text-5xl dark:text-white">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" size="xs" pill className="dark:bg-gray-700 dark:text-white dark:border-gray-600">
          {post && post.category}
        </Button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-10 p-3 max-h-[600px] w-full object-cover rounded-lg"
      />
      <div className="flex justify-between p-3 border-b border-slate-300 dark:border-gray-700 mx-auto w-full max-w-4xl text-sm dark:text-gray-300">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div className="p-3 w-full max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <article 
          className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-none"
          dangerouslySetInnerHTML={{ __html: post && mdParser.render(post.content) }}
        ></article>
      </div>
      <CommentSection postId={post._id} />
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-2xl mt-10 font-semibold dark:text-white">Recent articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center w-full max-w-6xl">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}