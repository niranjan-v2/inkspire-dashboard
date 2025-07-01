import React, { useEffect } from 'react'

export default function Comment({comment}) {
    useEffect(() => {
        const getUser = async() => {
            try {

            } catch(error) {
                console.log(error);
            }
        }
        getUser();
    },[comment]);
  return (
    <div>Comment</div>
  )
}
