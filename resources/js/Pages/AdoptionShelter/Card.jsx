import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import AdoptionShelterForm from "./Form";
import GeneralModal from "../../Components/GeneralModal";

export default function AdoptionShelterCard ({ adoptionShelter, auth }) {
  const [adoptionShelters, setAdoptionShelters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateNew = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  const handleFormSubmit = (newVeterinarian) => {
      setAdoptionShelters([...adoptionShelters, newVeterinarian]);
      setIsModalOpen(false);
  };

    return (
      <div className="border border-gray-300 flex space-x-2 p-4 rounded-lg shadow-lg mb-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">{adoptionShelter.name}</h2>
          <div className="mb-2">
            <strong className="font-semibold">Address: </strong>
            <span>{adoptionShelter.address || "Placeholder"}</span>
          </div>
          <div className="mb-2">
            <strong className="font-semibold">Email: </strong>
            <span>{adoptionShelter.email || "No information"}</span>
          </div>
          <div className="mb-2">
            <strong className="font-semibold">Phone: </strong>
            <span>{adoptionShelter.phone || "Placeholder"}</span>
          </div>
          <div className="mb-2">
            <strong className="font-semibold">Link: </strong>
            <span>{adoptionShelter.link || "No information"}</span>
          </div>
          <div className="mb-2">
            <strong className="font-semibold">Days Open: </strong>
            <span>{adoptionShelter.days_open || "Placeholder"}</span>
          </div>
          <div>
            <strong className="font-semibold">Opening Hours: </strong>
            <span>{adoptionShelter.opening_hours || "Placeholder"}</span>
          </div>
        </div> 
      
      {(auth.user?.id && 
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
                <Dropdown.Link as="button" href={route('adoptionShelter.destroy', adoptionShelter)} method="delete"> Delete</Dropdown.Link>
            </Dropdown.Content>
          </Dropdown>
        )}

        <GeneralModal isOpen={isModalOpen} onClose={handleCloseModal}>
          <AdoptionShelterForm onSubmit={handleFormSubmit} />
        </GeneralModal>

      </div> 
    );
}