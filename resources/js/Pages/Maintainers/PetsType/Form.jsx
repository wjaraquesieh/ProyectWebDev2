import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from '@inertiajs/react';

export default function PetsTypeForm ({ petsType, className, setEditing }){
    const {data, setData, post, patch, reset, errors, processing } = useForm({
        name: petsType?.name,
    })

    function update(petsType){
        patch(route('petsType.update', petsType),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(petsType?.id){
            update(petsType.id)
            return
        }
        console.log(data.name);
        post(route('petsType.store'),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    return (
        <form action="" onSubmit={handleSubmit} className={className}>
            <textarea 
                placeholder="Insert a new pets type"
                className="block w-full rounded-md border-gray-300 bg-white shadow"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
            ></textarea>
            <InputError message={errors.message}/>
            <PrimaryButton disabled={processing} className="mt-2">{processing ? 'Sending...' : 'Save' }</PrimaryButton>
            {petsType?.id && (
                <SecondaryButton onClick={() => setEditing(false)} className="ml-2">Cancel</SecondaryButton>
            )}
            
        </form>
    );
}