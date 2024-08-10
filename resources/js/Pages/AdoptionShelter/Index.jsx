import Authenticated from "@/Layouts/AuthenticatedLayout";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from '@inertiajs/react';
import { useState } from "react";
import AdoptionShelterForm from "./Form";
import AdoptionShelterCard from "./Card";
import GeneralModal from "@/Components/GeneralModal";

export default function AdoptionShelterIndex ({ auth, adoptionShelters }) {
    const [shelters, setShelters] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateNew = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleFormSubmit = (newShelters) => {
        // Aquí puedes hacer la lógica para enviar los datos a la API
        setShelters([...shelters, newShelters]);
        setIsModalOpen(false);
    };

    const designPage = () => {
        return(<>
            <Head title="Adption Shelters" />

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
                                        New Adption Shelter
                                        </button>
                                    )}
                                </div>
                                {(auth.user?.id &&
                                    <GeneralModal isOpen={isModalOpen} onClose={handleCloseModal}>
                                        <AdoptionShelterForm onSubmit={handleFormSubmit} />
                                    </GeneralModal>
                                )}
                                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                                    {adoptionShelters.map((adoptionShelter) => (
                                        <AdoptionShelterCard key={`adoptionShelter-${adoptionShelter.id}`} adoptionShelter={adoptionShelter} auth={auth} />
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
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Adption Shelters</h2>}
            >
                {designPage()}
            </Authenticated>
            :
            <DefaultLayout header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Adption Shelters</h2>}>
                {designPage()}
            </DefaultLayout>
        )
        

    );
}