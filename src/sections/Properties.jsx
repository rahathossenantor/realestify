import PropertyCard from "../components/PropertyCard";

const propertiesData = [
    {
        id: 1,
        title: "Modern Design villa",
        price: "3000.00",
        beds: 4,
        baths: 2,
        image: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 2,
        title: "Willow Creek Estates",
        price: "4720.07",
        beds: 3,
        baths: 2,
        image: "https://www.common.com/_next/image?url=%2Fimages%2Fsplash-page.jpeg&w=3840&q=75",
    },
    {
        id: 3,
        title: "Maple Grove Retreat",
        price: "8216.40",
        beds: 7,
        baths: 4,
        image: "https://photos2.theblueground.com/736/pg19176-o-e8b47ada-2b63-fc8a-15bf-17d0840a56f7.jpg?quality=low",
    },
    {
        id: 4,
        title: "Sunnyvale Heights",
        price: "5116.46",
        beds: 3,
        baths: 1,
        image: "https://photos.spotahome.com/fsobscale_1600_900_nonverified_ur_15_50/6380d870c5d3545fa8834ee35b2b04f67367c022e3fbba64cc0355da.jpg",
    },
    {
        id: 5,
        title: "Majestic View Estate",
        price: "8216.40",
        beds: 5,
        baths: 3,
        image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-990519934755996479/original/507921dd-134b-45e8-91dc-9248e01cfdaf.jpeg?im_w=720",
    },
    {
        id: 6,
        title: "Majestic View Estate",
        price: "8216.40",
        beds: 6,
        baths: 5,
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-810828214882627925/original/8dfccf1d-8611-447d-b612-bb0464bebbb9.jpeg?im_w=720",
    },
];

const Properties = () => {
    return (
        <section>
            <div className="container">
                <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                    <span className="mb-2 block text-lg font-semibold text-primary">
                        Properties
                    </span>
                    <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                        Grab your Dream Property
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6">
                        There are many variations of passages of Lorem Ipsum available but the
                        majority have suffered alteration in some form.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        propertiesData.map(property => (
                            <PropertyCard
                                key={property.id}
                                title={property.title}
                                price={property.price}
                                beds={property.beds}
                                baths={property.baths}
                                image={property.image}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Properties;
