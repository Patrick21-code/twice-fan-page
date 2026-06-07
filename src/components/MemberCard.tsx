import Image from 'next/image'

type MemberProps = {
    name: string;
    role: string;
    image: string;
}

export default function MemberCard({ name, role, image }: MemberProps) {
    return (
        <div className="rounded-xl shadow-md border border-pink-100 hover:shadow-lg transition bg-white">
            
            <Image
                src={image}
                alt={name}
                width={300}
                height={300}
                className="w-full h-72 object-cover"
            />

            <div className="p-4">    
                <h2 className="text-xl font-bold">
                    {name}
                </h2>

                <p className="text-gray-500">
                    {role}
                </p>
            </div>
        </div>
    )
}