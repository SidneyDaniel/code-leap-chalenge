import { useState, useCallback } from 'react';
import { postService, type PostData } from '../services/PostService';

export const usePosts = () => {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        try {
            const data = await postService.getAll();
            setPosts(data.results || data);
        } catch (error) {
            console.error("Erro ao buscar posts:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const addPost = async (username: string, title: string, content: string) => {
        try {
            await postService.create({ username, title, content });
            await fetchPosts(); 
        } catch (error) {
            alert("Erro ao criar post " + error);
        }
    };

    const editPost = async (id: number, title: string, content: string) => {
        try {
            await postService.update(id, { title, content });
            await fetchPosts();
        } catch (error) {
            alert("Erro ao editar post " + error);
        }
    };

    const removePost = async (id: number) => {
        try {
            await postService.delete(id);
            await fetchPosts();
        } catch (error) {
            alert("Erro ao deletar post " + error);
        }
    };

    return { posts, loading, fetchPosts, addPost, editPost, removePost };
};