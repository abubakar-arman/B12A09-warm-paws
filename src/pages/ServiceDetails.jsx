import toast from "react-hot-toast";
import { FaDollarSign, FaStar } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()

    const service = data.find((service) => service.serviceId === Number(id))

    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()    
        toast.success('Service booked successfully!')
    }

    return (
        <div>
            <div className="hero bg-base-100 lg:py-20">
                <div className="hero-content flex flex-col lg:flex-row">
                    <img
                        src={service.image}
                        className="lg:max-w-lg max-w-md rounded-lg shadow-2xl"
                    />
                    <div className="flex flex-col gap-3 mt-5 ml-5">
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
            <div className="hero bg-base-200 py-10 lg:py-20">
                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Grab this service right now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input beautify" placeholder="Email" />
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input beautify" placeholder="Name" />
                                <button className="btn btn-primary mt-4">Book Now</button>
                            </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;