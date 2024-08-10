import RoleForm from "./Form";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';
import RoleItem from "./Item";

export default function RoleIndex ({ auth, roles }) {
    return (
        <Authenticated user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Roles</h2>}
        >
            <Head title="Roles" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <RoleForm />
                        </div>
                    </div>
                    <div className="mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg divide-y">
                        {
                            roles.map((role) => (
                                <RoleItem key={`role-${role.id}`} role={role} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}