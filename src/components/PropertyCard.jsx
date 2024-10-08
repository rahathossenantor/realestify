/* eslint-disable react/prop-types */
import Bath from "../assets/images/property/Bath";
import Bed from "../assets/images/property/Bed";

const PropertyCard = ({title, price, beds, baths, image}) => {
    return (
        <div className="p-4 bg-white rounded-lg border border-gray-600/10">
            <img src={image} alt="property" className="w-full xl:h-[245px] lg:h-[190px] md:h-[200px] h-[250px] object-cover"/>
            <div className="p-6">
                <h4 className="text-2xl font-bold cursor-pointer">
                    {title}
                </h4>
                <div className="mt-2">
                    <span className="text-xl font-extrabold text-blue-600">
                        ${price}
                    </span>{" "}
                    /M
                </div>
            </div>
            <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                <div className="flex items-center">
                    <Bed />
                    <p>
                        <span className="font-bold text-gray-900">{beds}</span> Bedrooms
                    </p>
                </div>
                <div className="flex items-center">
                    <Bath />
                    <p>
                        <span className="font-bold text-gray-900">{baths}</span> Bathrooms
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
