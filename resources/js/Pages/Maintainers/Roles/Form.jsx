import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from '@inertiajs/react';

export default function RoleForm ({ role, className, setEditing }){
    const {data, setData, post, patch, reset, errors, processing } = useForm({
        name: role?.name,
    })

    function update(role){
        patch(route('roles.update', role),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(role?.id){
            update(role.id)
            return
        }
        console.log(data.name);
        post(route('roles.store'),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    return (
        <form action="" onSubmit={handleSubmit} className={className}>
            <textarea 
                placeholder="Insert a new role"
                className="block w-full rounded-md border-gray-300 bg-white shadow"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
            ></textarea>
            <InputError message={errors.message}/>
            <PrimaryButton disabled={processing} className="mt-2">{processing ? 'Sending...' : 'Save' }</PrimaryButton>
            {role?.id && (
                <SecondaryButton onClick={() => setEditing(false)} className="ml-2">Cancel</SecondaryButton>
            )}
            
        </form>
    );
}