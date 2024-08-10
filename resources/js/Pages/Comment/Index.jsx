import Dropdown from "@/Components/Dropdown";
import { formatDistanceToNow } from 'date-fns';

export default function CommentIndex({ comment }) {
    console.log(comment);
    return(
        <div className="border border-gray-300 flex space-x-2 p-4 rounded-lg shadow-lg mb-4">
            <div className="flex-1">
                <div className="mb-2">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-gray-800 dark:text-gray-200">
                                {comment.user.name}
                            </span>
                            <small className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                {formatDistanceToNow(new Date(comment.created_at))}
                            </small>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <span>{comment.comment}</span>
                </div> 
            </div> 
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
                    <Dropdown.Link as="button" href={route('comment.destroy', comment.id)} method="delete"> Delete</Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
}