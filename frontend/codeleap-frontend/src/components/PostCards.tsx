import React from 'react';
import { type PostData } from '../services/PostService';
import { useAppSelector } from '../store/hooks';

import getTimeAgo from '../services/TimeService';

import { SquarePen, Trash } from 'lucide-react';

interface PostCardProps {
  post: PostData;
  onDelete: (post: PostData) => void;
  onEdit: (post: PostData) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete, onEdit }) => {
  const currentUser = useAppSelector((state) => state.user.username);
  const isOwner = post.username === currentUser;

  return (
    <article className=" bg-white">
      <header className="bg-codeleap-blue border border-codeleap-blue rounded-t-2xl p-6 flex justify-between items-center">
        <h2 className="text-white text-xl font-bold truncate pr-4">
          {post.title}
        </h2>
        
        {isOwner && (
          <div className="flex gap-6 shrink-0">
            <button 
              onClick={() => onDelete(post)} 
              className="hover:opacity-70 transition-opacity"
            >
              <Trash color="white" size={30} strokeWidth={3} />
            </button>
            
            <button 
              onClick={() => onEdit(post)} 
              className="hover:opacity-70 transition-opacity"
            >
              <SquarePen color="white" size={30} strokeWidth={3} />
            </button>
          </div>
        )}
      </header>

      <div className="p-6 flex flex-col gap-4 border border-t-0 border-codeleap-border rounded-b-2xl">
        <div className="flex justify-between items-center">
          <span className="text-codeleap-dark-gray font-bold text-lg">@{post.username}</span>
          <span className="text-codeleap-dark-gray text-lg">
             {post.created_datetime ? getTimeAgo(post.created_datetime) : "just now"}
          </span>
        </div>
        
        <p className="text-black text-lg leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
      </div>
    </article>
  );
};

export default PostCard;