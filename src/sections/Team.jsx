import team1 from "../assets/images/team/team-01.png";
import TeamMember from "../components/TeamMember";

const membersData = [
    {
        id: 1,
        name: "Melissa Tatcher",
        designation: "Digital Marketer",
        image: team1,
    },
    {
        id: 2,
        name: "Stuard Ferrel",
        designation: "Marketing Expert",
        image: "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png",
    },
    {
        id: 3,
        name: "Eva Hudson",
        designation: "Creative Designer",
        image: "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png",
    },
    {
        id: 4,
        name: "Jackie Sanders",
        designation: "Founder of Facebook",
        image: "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png",
    },
];

const Team = () => {
    return (
        <section
            id="team"
            className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
        >
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Our Team Members
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                Our Clients
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available but
                                the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap justify-center">
                    {
                        membersData.map((member) => (
                            <TeamMember
                                key={member.id}
                                image={member.image}
                                name={member.name}
                                designation={member.designation}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;
