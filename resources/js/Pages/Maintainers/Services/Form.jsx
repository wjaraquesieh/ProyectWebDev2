import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from '@inertiajs/react';

export default function ServiceForm ({ service, className, setEditing }){
    const {data, setData, post, patch, reset, errors, processing } = useForm({
        name: service?.name,
    })

    function update(service){
        patch(route('service.update', service),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(service?.id){
            update(service.id)
            return
        }
        console.log(data.name);
        post(route('service.store'),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    return (
        <form action="" onSubmit={handleSubmit} className={className}>
            <textarea 
                placeholder="Insert a new service"
                className="block w-full rounded-md border-gray-300 bg-white shadow"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
            ></textarea>
            <InputError message={errors.message}/>
            <PrimaryButton disabled={processing} className="mt-2">{processing ? 'Sending...' : 'Save' }</PrimaryButton>
            {service?.id && (
                <SecondaryButton onClick={() => setEditing(false)} className="ml-2">Cancel</SecondaryButton>
            )}
            
        </form>
    );
}