import React from 'react';

import PostItem from "./PostItem";
import { IPost } from "../../../models/IPost";
import { postAPI } from "../../../services/PostService";

const Posts = () => {
  const {
    data: posts,
    error,
    isLoading,
    refetch // принудительно обновление
  } = postAPI.useFetchAllPostsQuery(100)
  
  const [createPost, {}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div className="posts_wrapper">
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}

        <div className='post__list'>
          {posts?.map(post =>
            <PostItem 
              key={post.id}
              post={post}
              remove={handleRemove} 
              update={handleUpdate} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export {Posts};
