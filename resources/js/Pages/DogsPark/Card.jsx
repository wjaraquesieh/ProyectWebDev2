import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import GeneralModal from "../../Components/GeneralModal";
import DogsParkForm from "./Form";

export default function DogsParkCard ({ dogsPark, auth }) {
  const [dogsParks, setDogsParks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateNew = () => {
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  const handleFormSubmit = (newdogsParks) => {
      setDogsParks([...dogsParks, newdogsParks]);
      setIsModalOpen(false);
  };

    return (
      <div className="border border-gray-300 flex space-x-2 p-4 rounded-lg shadow-lg mb-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">{dogsPark.name}</h2>
          <div className="mb-2">
            <strong className="font-semibold">Address: </strong>
            <span>{dogsPark.address || ""}</span>
          </div>
          <div>
            <strong className="font-semibold">Opening Hours: </strong>
            <span>{dogsPark.opening_hours || ""}</span>
          </div>
          <div className="mb-2">
            <strong className="font-semibold">Has Water Fountain?: </strong>
            <span>{dogsPark.has_water_fountain ? "Yes" : "No"}</span>
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
                <Dropdown.Link as="button" href={route('dogsPark.destroy', dogsPark)} method="delete"> Delete</Dropdown.Link>
            </Dropdown.Content>
          </Dropdown>
        )}

        <GeneralModal isOpen={isModalOpen} onClose={handleCloseModal}>
            <DogsParkForm dogsPark={dogsPark} onSubmit={handleFormSubmit} />
        </GeneralModal> 
      </div>  
    );
}