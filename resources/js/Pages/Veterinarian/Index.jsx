import Authenticated from "@/Layouts/AuthenticatedLayout";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from '@inertiajs/react';
import VeterinarianCard from './Card';
import { useState } from "react";
import CreateVeterinarianForm from './Form';
import GeneralModal from "../../Components/GeneralModal";

export default function VeterinarianIndex ({ auth, vets }) {
    const [veterinarians, setVeterinarians] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateNew = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleFormSubmit = (newVeterinarian) => {
        setVeterinarians([...veterinarians, newVeterinarian]);
        setIsModalOpen(false);
    };


    const designPage = () => {
        return (<>
        <Head title="Veterinarian" />
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <div className="container mx-auto p-4">
                            <div className="flex justify-between items-center mb-4">
                                {(auth.user?.id &&
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                                        onClick={handleCreateNew}
                                    >
                                        New Veterinarian
                                    </button>
                                )}
                            </div>
                            {(auth.user?.id &&
                                <GeneralModal isOpen={isModalOpen} onClose={handleCloseModal}>
                                    <CreateVeterinarianForm onSubmit={handleFormSubmit} />
                                </GeneralModal>
                            )}
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                                {vets.map((vet) => (
                                    <VeterinarianCard key={`veterinarian-${vet.id}`} veterinarian={vet} auth={auth} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>);
    }

    return (
        
        (auth.user?.id ?
            <Authenticated user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Veterinarian</h2>}
            >
                {designPage()}
            </Authenticated>
            :
            <DefaultLayout header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Veterinarian</h2>}>
                {designPage()}
            </DefaultLayout>
        )
    )
}