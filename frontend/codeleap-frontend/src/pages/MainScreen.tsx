import React, { useEffect,useState } from 'react';
// import { useAppSelector } from '../store/hooks';
import { getPosts, type Post } from '../services/api';


const MainScreen: React.FC = () => {
//   const username = useAppSelector((state) => state.user.username);
  const [posts, setPosts] = useState<Post[]>([]);


  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data.results || response.data);
        
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };

    loadPosts();  
  },[]);

  return (
    <div className="min-h-screen bg-codeleap-light-gray flex flex-col items-center">
      <header className="w-full max-w-200 bg-codeleap-blue h-20 flex items-center px-9 shrink-0">
        <h1 className="text-white text-2xl font-bold">CodeLeap Network</h1>
      </header>

      <main className="w-full max-w-200 bg-white min-h-[calc(100vh-80px)] p-6 flex flex-col gap-6">
        <section className="border border-codeleap-gray p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6 text-black">
            What’s on your mind?
          </h2>
          <div className="flex flex-col gap-4">
            <form action="">
               
            </form>
          </div>
        </section>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-codeleap-gray rounded-2xl overflow-hidden"
            >
              <header className="bg-codeleap-blue p-4 flex justify-between items-center">
                <h3 className="text-white font-bold truncate">{post.title}</h3>
              </header>
              <div className="p-6">
                <div className="flex justify-between mb-4 text-codeleap-dark-gray text-sm">
                  <span className="font-bold">@{post.username}</span>
                  <span>
                    {new Date(post.created_datetime).toLocaleString()}
                  </span>
                </div>
                <p className="text-black whitespace-pre-wrap">{post.content}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );

  
};

export default MainScreen;