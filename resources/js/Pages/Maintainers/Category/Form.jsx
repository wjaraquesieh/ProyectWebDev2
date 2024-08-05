import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from '@inertiajs/react';

export default function CategoryForm ({ category, className, setEditing }){
    const {data, setData, post, patch, reset, errors, processing } = useForm({
        name: category?.name,
    })

    function update(category){
        patch(route('category.update', category),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(category?.id){
            update(category.id)
            return
        }
        console.log(data.name);
        post(route('category.store'),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    return (
        <form action="" onSubmit={handleSubmit} className={className}>
            <textarea 
                placeholder="Insert a new category"
                className="block w-full rounded-md border-gray-300 bg-white shadow"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
            ></textarea>
            <InputError message={errors.message}/>
            <PrimaryButton disabled={processing} className="mt-2">{processing ? 'Sending...' : 'Save' }</PrimaryButton>
            {category?.id && (
                <SecondaryButton onClick={() => setEditing(false)} className="ml-2">Cancel</SecondaryButton>
            )}
            
        </form>
    );
}