import api from "./api";

export interface PostData {
    id?: number;
    username: string;
    title: string;
    content: string;
    created_datetime?: string;
}

class PostService {
    private readonly endpoint = 'carrers/';

    async getAll() {
        const response = await api.get(`/${this.endpoint}`);
        return response.data.results || response.data;
    }

    async create(data: PostData) {
        return await api.post(this.endpoint, data);
    }

    async update(id: number, data: Partial<PostData>) {
        return await api.patch(`${this.endpoint}${id}/`, data);
    }

    async delete(id: number) {
        return await api.delete(`${this.endpoint}${id}/`);
    }
}

export const postService = new PostService();