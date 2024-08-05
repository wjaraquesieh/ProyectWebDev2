import { useForm } from '@inertiajs/react';

export default function VeterinarianForm ({ veterinarian }) {
    const {data, setData, post, patch, reset, errors, processing } = useForm({
        name: veterinarian?.name,
        address: veterinarian?.address,
        email: veterinarian?.email,
        phone: veterinarian?.phone,
        days_open: veterinarian?.days_open,
        opening_hours: veterinarian?.opening_hours,
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('veterinarian.store'),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                <input
                type="text"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                placeholder="Veterinarian Name"
                className="w-full border border-gray-300 p-2 rounded"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Address:</label>
                <input
                type="text"
                value={data.address}
                onChange={(e) => setData('address', e.target.value)}
                placeholder="Address"
                className="w-full border border-gray-300 p-2 rounded"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input
                type="text"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                placeholder="Email"
                className="w-full border border-gray-300 p-2 rounded"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Phone:</label>
                <input
                type="text"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
                placeholder="Phone"
                className="w-full border border-gray-300 p-2 rounded"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Days Open:</label>
                <input
                type="text"
                value={data.days_open}
                onChange={(e) => setData('days_open', e.target.value)}
                placeholder="All week / Week / Weekday / Weekend"
                className="w-full border border-gray-300 p-2 rounded"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-g ray-700 font-semibold mb-2">Opening Hours:</label>
                <input
                type="text"
                value={data.opening_hours}
                onChange={(e) => setData('opening_hours', e.target.value)}
                placeholder="9AM-8PM or 24 hrs"
                className="w-full border border-gray-300 p-2 rounded"
                required
                />
            </div>
            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
            >
                Save
            </button>
        </form>
    );
}