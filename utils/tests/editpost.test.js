const { jest, test, expect } = require('@jest/globals')
const { EditAPost } = require('../../services/EditPost');


test('EditAPost should send a PATCH request and return data', async () => {
  
 
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ postId: 1, name: 'Updated Post' }),
    })
  );

  const postTitle = 'Updated Post';
  const postContent = 'Updated Content';
  const author = 'abc';
  const postId = 1;

  const result = await EditAPost(postTitle, postContent, author, postId);

  expect(fetch).toHaveBeenCalledWith('http://127.0.0.1:8000/posts/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: postTitle,
      content: postContent,
      author: author,
      postId: postId,
    }),
  });

  expect(result).toEqual({ postId: 1, name: 'Updated Post' });
});

test('EditAPost should handle network errors', async () => {
  
  // eslint-disable-next-line no-undef
  global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

  const result = await EditAPost('Post', 'Content', 'abc', 1);

  expect(result).toBeUndefined(); 
});
