import { useState } from "react";
import { usePage } from "@inertiajs/react";
import ServiceForm from "./Form";
import Dropdown from "@/Components/Dropdown";

export default function ServiceItem ({ service }){
    
    const [editing, setEditing] = useState(false)

    return (
        <div className="flex space-x-2 p-6">
            <svg className="h-6 w-6 -scale-x-100 text-gray-600 dark:text-gray-400"
                fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round" strokeLinejoin="round"
                    d="m7.5 8.25h9m-9 3H12m-9.75 1.15c0 1.6 1.123 2.994 2.707 3.227"
                ></path>
            </svg>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <div>
                        <small className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            {service.created_at}
                        </small>
                        { service.edited &&
                            <small className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                                &middot; edited
                            </small>
                        }
                    </div>
                </div>
                { editing ? (
                    <ServiceForm service={service} className="mt-2" setEditing={setEditing}/>
                ) : (
                    <p className="mt-4 text-lg text-gray-900 dark:text-gray-100">
                        {service.name}
                    </p>                            
                )}
                
            </div>
            <Dropdown>
                <Dropdown.Trigger>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400"
                            viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0"
                                ></path>
                            </svg>
                    </button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <Dropdown.Button onClick={() => setEditing(true)}>Edit</Dropdown.Button>
                    <Dropdown.Link as="button" href={route('service.destroy', service)} method="delete"> Delete</Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </div>
    )
}