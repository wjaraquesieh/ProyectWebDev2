import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DefaultLayout from '@/Layouts/DefaultLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {

    const designPage = () => {
        return(<>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {(auth.user?.id && "You're logged in!" )}
                            <h1 className="text-3xl font-bold mb-8">Welcome pets lovers.</h1>
                            <div className="grid grid-cols-2 gap-8">
                                <p>
                                    In this website you will find information about Veterianrians, Adoption Shelters and Dog's park in the city of Winnipeg.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-8">
                                <Link href={route('blogPost.index')} className="border border-gray-400 p-6 rounded-lg text-center hover:bg-gray-100">
                                BLOG
                                </Link>
                                <Link href={route('adoptionShelter.index')} className="border border-gray-400 p-6 rounded-lg text-center hover:bg-gray-100">
                                Shelters
                                </Link>
                                <Link href={route('veterinarian.index')} className="border border-gray-400 p-6 rounded-lg text-center hover:bg-gray-100">
                                Veterinarian
                                </Link>
                                <Link href={route('dogsPark.index')} className="border border-gray-400 p-6 rounded-lg text-center hover:bg-gray-100">
                                Dog's Park
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }

    return (
        (auth.user?.id ?
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
            >
                {designPage()}
            </AuthenticatedLayout>
            :
            <DefaultLayout>
                {designPage()}
            </DefaultLayout>
        )
    );
}
