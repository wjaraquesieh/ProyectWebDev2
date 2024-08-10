import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import GeneralModal from "../../Components/GeneralModal";
import BlogPostForm from "./Form";
import AddCommentModal from "../Comment/Form";
import CommentIndex from "../Comment/Index";
import { comment } from "postcss";


export default function BlogPostCard ({ blogPost, auth, categories }) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAddCommentModal, setShowAddCommentModal] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const handleCreateNew = () => {
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  const handleFormSubmit = (newBlogPost) => {
    setBlogPost([...bpost, newBlogPost]);
    setIsModalOpen(false);
  };

  const handleComments = () => {
    listCommentsById();
    setShowComments(!showComments);
  }

  const handleCommentSubmit = () => {
    listCommentsById();
  }

  const listCommentsById = () => {
    
    axios
    .get(`/comment/${blogPost.id}`)
    .then(response => {
        setComments(response.data); 
    })
    .catch(error => {
        console.error('Error al obtener los comentarios:', error);
    });
  }

  useEffect(() => {
    listCommentsById();
  }, [comments]);


    return (
        <div className="border border-gray-300 flex space-x-2 p-4 rounded-lg shadow-lg mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{blogPost.title}</h2>
            <div className="mb-2">
              <div className="flex items-center justify-between">
                  <div>
                      <span className="text-gray-800 dark:text-gray-200">
                        {blogPost.is_anonymous ? "User Anonymous" : blogPost.user_name}
                      </span>
                      <small className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                          {blogPost.created_at}
                      </small>
                      { blogPost.edited &&
                          <small className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                              &middot; edited
                          </small>
                      }
                  </div>
              </div>
            </div>
            <div className="mb-2">
              <span><strong>Category:</strong> {blogPost.category_name}</span>
            </div>
            <div className="mb-10">
              <span>{blogPost.content}</span>
            </div>  

            { blogPost.pathImage && 
              <div className="mb-2">
                <img src={`/${blogPost.pathImage}`} alt="Post Image" />
              </div>
            }
            
            <div className="flex justify-between items-center mb-4">
                {(auth.user?.id &&
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                        onClick={() => setShowAddCommentModal(true)}
                    >
                        Add Comment
                    </button>
                )}
                {comments.length > 0 &&
                    <button
                      className="text-blue-500 hover:underline mt-4 px-4 py-2 rounded shadow"
                      onClick={handleComments}
                    >
                      {showComments ? 'Hide Comments' : 'Show Comments'}
                    </button>
                }
                
            </div>

            {showComments && comments.length > 0 && (
              <>
                {comments.map((comment) => (
                  <CommentIndex key={`comment-${comment.id}`} comment={comment} />
                ))}
              </>
            )}
            
          </div>

          {blogPost.user_id === auth.id && (
              <Dropdown>
                  <Dropdown.Trigger>
                      <button>
                          <svg xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-400"
                              viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M12 5a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                      </button>
                  </Dropdown.Trigger>
                  <Dropdown.Content>
                      <Dropdown.Button onClick={handleCreateNew}>Edit</Dropdown.Button>
                      <Dropdown.Link as="button" href={route('blogPost.destroy', blogPost)} method="delete"> Delete</Dropdown.Link>
                  </Dropdown.Content>
              </Dropdown>
          )}

          {showAddCommentModal && (
            <AddCommentModal blogPostId={blogPost.id} onSubmit={handleCommentSubmit} onClose={() => setShowAddCommentModal(false)} />
          )}

          

          <GeneralModal isOpen={isModalOpen} onClose={handleCloseModal}>
              <BlogPostForm blogPost={blogPost} categories={categories} onSubmit={handleFormSubmit} />
          </GeneralModal>
      </div>  
    );
}