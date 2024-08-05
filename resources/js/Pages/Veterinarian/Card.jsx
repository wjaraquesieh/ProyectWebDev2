export default function VeterinarianCard ({ veterinarian }) {
    return (
        <div className="border border-gray-300 p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-2xl font-bold mb-4">{veterinarian.name}</h2>
        <div className="mb-2">
          <strong className="font-semibold">Address: </strong>
          <span>{veterinarian.address || "Placeholder"}</span>
        </div>
        <div className="mb-2">
          <strong className="font-semibold">Email: </strong>
          <span>{veterinarian.email || "Placeholder"}</span>
        </div>
        <div className="mb-2">
          <strong className="font-semibold">Phone: </strong>
          <span>{veterinarian.phone || "Placeholder"}</span>
        </div>
        <div className="mb-2">
          <strong className="font-semibold">Days Open: </strong>
          <span>{veterinarian.daysOpen || "Placeholder"}</span>
        </div>
        <div>
          <strong className="font-semibold">Opening Hours: </strong>
          <span>{veterinarian.openingHours || "Placeholder"}</span>
        </div>
      </div>  
    );
}