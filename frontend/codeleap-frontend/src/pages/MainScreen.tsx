import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../store/hooks';
import { usePosts } from '../hooks/usePost';

import Field from '../components/Field';
import Button from '../components/Button';
import PostCard from '../components/PostCards';

import { logout } from '../store/userSlice';

const MainScreen: React.FC = () => {
  const username = useAppSelector((state) => state.user.username);
  
  const { posts, loading, fetchPosts, addPost, removePost } = usePosts();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => { fetchPosts() }, [fetchPosts]);

  const handleCreate = async () => {
    if (title && content) {
      await addPost(username, title, content);
      setTitle(""); 
      setContent(""); 
    }
  };

  const dispatch = useDispatch()

  const isButtonDisabled = !title.trim() || !content.trim() || loading;

  return (
    <div className="min-h-screen bg-codeleap-light-gray flex flex-col items-center">
      <header className="w-full max-w-200 bg-codeleap-blue h-20 flex items-center justify-between px-9 shrink-0">
        <h1 className="text-white font-bold">CodeLeap Network</h1>

        <Button 
              label={"Sair"} 
              onClick={()=> dispatch(logout())} 
              disabled={false} 
            />
      
      </header>

      <main className="w-full max-w-200 bg-white p-6 space-y-6 min-h-[calc(100vh-80px)] shadow-lg">
        
        <section className="border border-codeleap-border p-6 rounded-2xl flex flex-col gap-6">
          <h2 className="font-bold text-codeleap-black">What’s on your mind?</h2>
          
          <Field 
            id="title" 
            label="Title" 
            placeholder="Hello world" 
            value={title} 
            onChange={setTitle} 
          />

          <Field 
            id="content" 
            label="Content" 
            type="textarea" 
            placeholder="Content here" 
            value={content} 
            onChange={setContent} 
          />

          <div className="flex justify-end">
            <Button 
              label={loading ? "Creating..." : "Create"} 
              onClick={handleCreate} 
              disabled={isButtonDisabled} 
            />
          </div>
        </section>

        <div className="flex flex-col gap-6 pb-10">
          {posts.map((post) => (
            <PostCard 
              key={post.id} 
              post={post} 
              onDelete={removePost}
              onEdit={(p) => console.log("Editar post:", p)}
            />
          ))}

          {posts.length === 0 && !loading && (
            <p className="text-center text-codeleap-dark-gray">No posts yet. Be the first to post!</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default MainScreen;