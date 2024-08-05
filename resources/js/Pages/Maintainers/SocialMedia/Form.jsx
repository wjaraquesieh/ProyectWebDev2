import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from '@inertiajs/react';

export default function SocialMediaForm ({ socialMedia, className, setEditing }){
    const {data, setData, post, patch, reset, errors, processing } = useForm({
        name: socialMedia?.name,
    })

    function update(socialMedia){
        patch(route('socialMedia.update', socialMedia),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(socialMedia?.id){
            update(socialMedia.id)
            return
        }
        console.log(data.name);
        post(route('socialMedia.store'),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    return (
        <form action="" onSubmit={handleSubmit} className={className}>
            <textarea 
                placeholder="Insert a new social media"
                className="block w-full rounded-md border-gray-300 bg-white shadow"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
            ></textarea>
            <InputError message={errors.message}/>
            <PrimaryButton disabled={processing} className="mt-2">{processing ? 'Sending...' : 'Save' }</PrimaryButton>
            {socialMedia?.id && (
                <SecondaryButton onClick={() => setEditing(false)} className="ml-2">Cancel</SecondaryButton>
            )}
            
        </form>
    );
}