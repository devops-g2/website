import { fetchCommentsByPostId } from '../../services/fetchComments.js';
import { it, describe, expect, jest } from '@jest/globals'


global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, content: 'Test comment' }]),
  })
);

describe('fetchCommentsByPostId', () => {
  it('fetches comments successfully for a valid post ID', async () => {
    const postId = 'post123'; 
    const commentsData = await fetchCommentsByPostId(postId);

    expect(fetch).toHaveBeenCalledWith(`http://127.0.0.1:8000/comments?post_id=${postId}`);
    expect(commentsData).toEqual([{ id: 1, content: 'Test comment' }]);
  });

  it('throws an error when fetching comments fails', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Internal Server Error',
      })
    );

    const postId = 'post123'; 
    await expect(fetchCommentsByPostId(postId)).rejects.toThrow('Failed to fetch comments data');
  });
});
