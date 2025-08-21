import React from 'react'
import { useParams } from 'react-router-dom';

const GetGit = () => {
    const {userid} = useParams();
  return (
    <div className="flex bg-purple-500 min-h-screen w-full">
      <div className="p-3 text-white">UserId: {userid}</div>
    </div>
  );
}

export default GetGit
