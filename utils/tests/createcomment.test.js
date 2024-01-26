/* eslint-disable no-undef */

const { handleCreateComment } = require('../../services/createComment.js');
const { it, describe, expect, beforeEach } = require('@jest/globals');
const { fetchUser } = require('../../services/fetchUser');


jest.mock('../../services/fetchUser', () => ({
    fetchUser: jest.fn((userId) => Promise.resolve({ id: userId, name: 'Test User', email: 'test@example.com' })),
}));

describe('handleCreateComment', () => {
    beforeEach(() => {
        jest.clearAllMocks();
      
    });

    it('should create a comment and return comment data', async () => {
        const loggedInUserId = '1';
        const loggedInUserData = { id: 'user123' };
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce({ commentId: 'comment123' }),
        });

        fetchUser.mockResolvedValueOnce(loggedInUserData);

        const postId = 'post123';
        const commentContent = 'This is a test comment';

        const result = await handleCreateComment(postId, commentContent, loggedInUserId);

        expect(result.commentId).toBe('comment123');

    });

    it('should handle fetchUser errors and throw an error', async () => {
        const loggedInUserId = '1';
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: false,
            json: jest.fn().mockResolvedValueOnce({ error: 'Failed to create a comment' }),
        });

        fetchUser.mockResolvedValueOnce({ id: 'user123' });

        const postId = 'post123';
        const commentContent = 'This is a test comment';

        await expect(handleCreateComment(postId, commentContent, loggedInUserId)).rejects.toThrow('Failed to fetch user data for the logged-in user');
    });

    it('should handle fetchUser error and throw an error', async () => {

        fetchUser.mockResolvedValueOnce(new Error('Network error'));

        const postId = 'post123';
        const commentContent = 'This is a test comment';
        const loggedInUserId = '1';

        await expect(handleCreateComment(postId, commentContent, loggedInUserId)).rejects.toThrow('Failed to fetch user data for the logged-in user');
    });
});

    it('should handle fetchUser error and throw an error', async () => {
        
        fetchUser.mockRejectedValueOnce(new Error('Network error'));

        const postId = 'post123';
        const commentContent = 'This is a test comment';
        const loggedInUserId = '1';

        await expect(handleCreateComment(postId, commentContent, loggedInUserId)).rejects.toThrow('Failed to fetch user data for the logged-in user');
    });


