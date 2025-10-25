import { FaDollarSign, FaStar } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { Link } from "react-router";

const ServiceCard = ({service}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={service.image}
                    alt="Shoes"
                    className="w-full h-70 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{service.serviceName}</h2>
                <div className="flex justify-between font-bold text-lg flex-1">
                    <span className="flex gap-1 items-center"><FaStar /> {service.rating}</span>
                    <span className="flex gap-1 items-center"><FaDollarSign /> {service.price} </span>
                </div>
                <div className="card-actions justify-end mt-2">
                    <Link to={'/service/' + service.serviceId} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;