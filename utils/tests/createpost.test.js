
const { jest, it, describe, expect } = require('@jest/globals')
const { handleAddPost } = require('../../services/createPost');


describe('handleAddPost', () => {
    it('should add a post and return the postId', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ id: 1 }),
            })
        );
        const postTitle = 'Test Title';
        const postContent = 'Test Content';
        const author = 'Test Author';

        const postId = await handleAddPost(postTitle, postContent, author);

        expect(postId).toBe(1);
    });
    
    it('should handle errors and return null', async () => {
        global.fetch = jest.fn(() => Promise.reject('Mocked Error'));

        const postTitle = 'Test Title';
        const postContent = 'Test Content';
        const author = 'Test Author';

        const postId = await handleAddPost(postTitle, postContent, author);

        expect(postId).toBeNull();
    });
});