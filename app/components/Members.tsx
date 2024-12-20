
const members = [
    { name: 'Nathan', role: 'Captain', bio: "Nathan is a junior in high school and is the team captain and design lead.", mentor: false },
    { name: 'Hudson', role: 'Software + Design', bio: "Hudson is a sophomore in high school and is the software lead as well as being on the design team.", mentor: false },
    { name: 'Sebastian', role: 'Design + Build', bio: "Sebastian is in 7th grade and is on the design and build teams.", mentor: false },
    { name: 'Emelia', role: 'Portfolio + Software', bio: "Emelia is a sophomore in high school and is the portfolio lead as well as being on the software team.", mentor: false },
    { name: 'Stephan', role: 'Portfolio', bio: "Stephan is a sophomore in high school and is on the portfolio team.", mentor: false },
    { name: 'Jayden', role: 'Portfolio + Build', bio: "Jayden is a sophomore in high school and is on the portfolio and build teams.", mentor: false },
    { name: 'Raymond', role: 'Design + Mechanical', bio: "Raymond is a sophomore in high school and is on the design and build teams.", mentor: false },
    { name: 'Joe Ricker', role: 'Mentor + Coach', bio: "Mr. Joe is the team mentor and coach", mentor: true },
    { name: 'Alison Ricker', role: 'Team Admin', bio: "Ms. Alison is the assistant coach and team administrator", mentor: true },
];

const Members = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-0 items-center">
            {members.map((member, index) => (
                <div key={index} className="w-full aspect-[3/1] border-2 p-4">
                    <div className="flex flex-row gap-4">
                        <h1 className="text-xl">{member.name}</h1>
                        <h1 className={`text-lg text-zinc-900 px-2 ${member.mentor ? 'bg-blue-500' : 'bg-white'}`}>{member.role}</h1>
                    </div>
                    <p>{member.bio}</p>
                </div>
            ))}
        </div>
    );
};

export default Members;