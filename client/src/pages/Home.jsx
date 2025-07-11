import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/post/getposts`);
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="flex flex-col gap-28 px-6 py-10 lg:px-32 max-w-7xl mx-auto font-sans text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col gap-6">
        <h1 className="font-serif text-4xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-200">
          Building the Future,
          <br /> One Line at a Time
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg max-w-2xl leading-relaxed">
          Here you'll find a variety of articles and posts about everything I
          learn—technologies, software engineering, programming languages, and
          more. This is my digital lab notebook where I reflect, refine, and
          share.
        </p>
      </section>

      {/* Fresh posts */}
      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Fresh from the Terminal
        </h2>
        <ul className="flex flex-col gap-5">
          {[
            {
              title: "Understanding Asynchronous Programming in JavaScript",
              desc: "A practical breakdown of callbacks, promises, and async/await.",
            },
            {
              title: "Why I Switched to Rust for Systems Work",
              desc: "Exploring safety, performance, and why it’s worth learning.",
            },
          ].map((post, i) => (
            <li
              key={i}
              className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border rounded-xl p-5"
            >
              <h3 className="font-semibold text-lg text-gray-800">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{post.desc}</p>
            </li>
          ))}
        </ul>
        <Link to={'/search'}>
        <button className="self-start text-blue-600 text-sm font-medium mt-2 hover:underline transition">
          View All Posts →
        </button>
        </Link>
      </section>

      {/* Recent posts */}
      <section className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Recent Posts
            </h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {posts.map((post) => (
                <div className="min-w-[300px] flex-shrink-0" key={post._id}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        )}
        <Link to={'/search'}>
        <button className="self-start text-blue-600 text-sm font-medium mt-2 hover:underline transition">
          View All Posts →
        </button>
        </Link>
      </section>

      {/* Projects */}
      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "DevNote",
              desc: "A developer’s journaling tool built with Next.js and local storage.",
            },
            {
              name: "StackTrack",
              desc: "Visualize and track your evolving tech stack over time.",
            },
          ].map((proj, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {proj.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{proj.desc}</p>
            </div>
          ))}
        </div>
        <button className="self-start text-blue-600 text-sm font-medium mt-2 hover:underline transition">
          Explore My Work →
        </button>
      </section>

      {/* Interests */}
      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-gray-900">What I’m Into</h2>
        <p className="text-base text-gray-600 max-w-2xl leading-relaxed"></p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "🛠️ Systems Programming",
            "🌐 Web Development",
            "☁️ Cloud & DevOps",
            "💻 C, C++, Python",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-gray-100 transition rounded-xl py-4 px-2 text-sm font-medium border"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center py-16 border-t">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Let’s Connect
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Working on something interesting or just want to chat? Drop a line.
        </p>
        <a
          href="mailto:niranjanv@duck.com"
          className="text-blue-600 text-sm mt-2 inline-block hover:underline transition"
        >
          📧 niranjanv@duck.com
        </a>
      </section>
    </div>
  );
}
