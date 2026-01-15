import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../store/hooks';
import { usePosts } from '../hooks/usePost';

import Field from '../components/Field';
import Button from '../components/Button';
import PostCard from '../components/PostCards';
import Modal from '../components/Modal';

import { logout } from '../store/userSlice';
import type { PostData } from '../services/PostService';
import { LogOut } from 'lucide-react';

const MainScreen: React.FC = () => {
  const username = useAppSelector((state) => state.user.username);
  
  const { posts, loading, fetchPosts, addPost, removePost, editPost } = usePosts();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const [activeModal, setActiveModal] = useState<'edit' | 'delete' | null>(null);
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);

  useEffect(() => { fetchPosts() }, [fetchPosts]);

  const handleCreate = async () => {
    if (title && content) {
      await addPost(username, title, content);
      setTitle(""); 
      setContent(""); 
    }
  };

  const handleEditRequest = (post: PostData) => {
    setSelectedPost(post);
    setEditTitle(post.title);
    setEditContent(post.content);
    setActiveModal("edit");
  };


  const handleDeleteRequest = (post: PostData) => {
    setSelectedPost(post);
    setActiveModal("delete");
  };

  const handleConfirmUpdate = async () => {
    if (selectedPost && selectedPost.id !== undefined) {
      await editPost(selectedPost.id, editTitle, editContent);
      setActiveModal(null);
    }
  };

  const handleConfirmDelete = async () => {
    if (selectedPost && selectedPost.id !== undefined) {
      await removePost(selectedPost.id);
      setActiveModal(null);
    }
  };

  const dispatch = useDispatch()

  const isButtonDisabled = !title.trim() || !content.trim() || loading;

  return (
    <div className="min-h-screen my-2 max-[490px]:my-0 flex flex-col items-center">
      <header className="w-full max-w-200 rounded-t-lg bg-codeleap-blue h-20 flex items-center justify-between px-9 shrink-0">
        <h1 className="text-white font-bold">CodeLeap Network</h1>

        <Button
          onClick={() => dispatch(logout())}
          disabled={false}
          width='20px'
        >
           <LogOut color="white" size={22} strokeWidth={3} />
        </Button>
      </header>

      <main className="w-full max-w-200 rounded-b-lg border border-gray-200 bg-white p-6 max-[490px]:p-3 space-y-6 min-h-[calc(100vh-80px)] shadow-lg">
        <section className="border border-codeleap-border p-6 rounded-2xl flex flex-col gap-6">
          <h2 className="font-bold text-codeleap-black">
            What’s on your mind?
          </h2>

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
              onDelete={() => handleDeleteRequest(post)}
              onEdit={() => handleEditRequest(post)}
            />
          ))}

          <Modal
            isOpen={activeModal !== null}
            onClose={() => setActiveModal(null)}
            title={
              activeModal === "edit"
                ? "Edit item"
                : "Are you sure you want to delete this item?"
            }
          >
            {activeModal === "edit" ? (
              <div
                className="flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <Field
                  id="title"
                  label="Title"
                  value={editTitle}
                  onChange={setEditTitle}
                  placeholder="Edit title"
                />
                <Field
                  id="content"
                  label="Content"
                  type="textarea"
                  value={editContent}
                  onChange={setEditContent}
                  placeholder="Edit content"
                />
                <div className="flex justify-end gap-4 mt-4">
                  <Button
                    label="Cancel"
                    variant="outline"
                    onClick={() => setActiveModal(null)}
                    disabled={false}
                  />
                  <Button
                    label="Save"
                    variant='success'
                    onClick={handleConfirmUpdate}
                    disabled={!editTitle || !editContent}
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-end gap-4 mt-8">
                <Button
                  label="Cancel"
                  variant='outline'
                  onClick={() => setActiveModal(null)}
                  disabled={false}
                />
                <Button
                  label="Delete"
                  variant='danger'
                  onClick={handleConfirmDelete}
                  disabled={false}
                />
              </div>
            )}
          </Modal>

          {posts.length === 0 && !loading && (
            <p className="text-center text-codeleap-dark-gray">
              No posts yet. Be the first to post!
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default MainScreen;