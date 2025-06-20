import { Table } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function DashPosts() {
  const {currentUser} = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  console.log(userPosts);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        
        const data = await res.json();
        if(res.ok) {
          setUserPosts(data.posts);
        }

      } catch (error) {
          console.log(error.message);
      }
    };
    if(currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);
  return <div>
    {currentUser.isAdmin && userPosts.length > 0 ? (
      <>
      <Table hoverable className='shadow-md'>
        <Table.Head>
          <Table.HeadCell>
            Date updated
          </Table.HeadCell>
        </Table.Head>
      </Table>
      </>
    ) : (
      <p>You have no posts yet</p>
    )}
  </div>;
}
