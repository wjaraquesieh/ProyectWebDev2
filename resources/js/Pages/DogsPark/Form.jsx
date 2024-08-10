import { useForm } from '@inertiajs/react';

export default function DogsParkForm ({ dogsPark }) {
    const {data, setData, post, patch, reset, errors, processing } = useForm({
        name: dogsPark?.name,
        address: dogsPark?.address,
        opening_hours: dogsPark?.opening_hours,
        has_water_fountain: dogsPark?.has_water_fountain,
    })

    function update(dogsPark){
        patch(route('dogsPark.update', dogsPark),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (dogsPark?.id){
            update(dogsPark.id);
            return
        }

        post(route('dogsPark.store'),{
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
                placeholder="dogs Park Name"
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
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Has water fountain?</label>
                <div className="flex items-center">
                <label className="mr-4">
                    <input
                    type="radio"
                    value={true}
                    checked={data.has_water_fountain === true}
                    onChange={(e) => setData('has_water_fountain', true)}
                    className="mr-2"
                    />
                    Yes
                </label>
                <label>
                    <input
                    type="radio"
                    value={false}
                    checked={data.has_water_fountain === false}
                    onChange={() => setData('has_water_fountain', false)}
                    className="mr-2"
                    />
                    No
                </label>
                </div>
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