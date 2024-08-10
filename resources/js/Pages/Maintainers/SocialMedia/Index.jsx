
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';
import SocialMediaForm from "./Form";
import SocialMediaItem from "./Item";

export default function SocialMediaIndex ({ auth, socialMedia }) {
    return (
        <Authenticated user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">SocialMedia</h2>}
        >
            <Head title="Social Media" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           <SocialMediaForm />
                        </div>
                    </div>
                    <div className="mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg divide-y">
                        {
                            socialMedia.map((socialMedia) => (
                                <SocialMediaItem key={`socialMedia-${socialMedia.id}`} socialMedia={socialMedia} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}