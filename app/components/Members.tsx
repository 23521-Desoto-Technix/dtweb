
const members = [
    { name: 'Nathan', role: 'Captain', bio: "Lorem ipsum doler sait" },
    { name: 'Hudson', role: 'Software + CAD', bio: "Lorem ipsum doler sait" },
    { name: 'Nathan', role: 'Captain', bio: "Lorem ipsum doler sait" },
    { name: 'Hudson', role: 'Software + CAD', bio: "Lorem ipsum doler sait" },
];

const Members = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-6 md:pr-0 items-center">
            {members.map((member, index) => (
                <div key={index} className="w-full aspect-video border-2 p-4">
                    <div className="flex flex-row gap-4">
                        <h1 className="text-xl">{member.name}</h1>
                        <h1 className="text-lg text-zinc-900 bg-white px-2">{member.role}</h1>
                    </div>
                    <p>{member.bio}</p>
                </div>
            ))}
        </div>
    );
};

export default Members;
