import { FaDollarSign, FaStar } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()

    const service = data.find((service) => service.serviceId === Number(id))
    console.log(service);


    return (
        <div>
            <div className="hero bg-base-100 py-20">
                <div className="hero-content flex">
                    <img
                        src={service.image}
                        className="max-w-lg rounded-lg shadow-2xl"
                    />
                    <div className="flex flex-col gap-3 ml-5">
                        <h3 className="text-4xl font-bold">{service.serviceName}</h3>
                        <p className="py-6">{service.description}</p>
                        <p className="badge badge-neutral">{service.category}</p>
                        <p className="font-extralight mt-2 ">Provider : {service.providerName} ({service.providerEmail})</p>
                        <p className="mt-2">Available Slots : {service.slotsAvailable}</p>
                        <div className="flex justify-between font-bold text-xl flex-1">
                            <span className="flex gap-1 items-center"><FaStar /> {service.rating}</span>
                            <span className="flex gap-1 items-center"><FaDollarSign /> {service.price} </span>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form>
                                <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input" placeholder="Name" />
                                <button className="btn btn-primary mt-4">Book Now</button>
                            </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Grab this service right now!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;