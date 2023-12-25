import { useForm } from "react-hook-form";

const AddCourse = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <div>
            <h1 className="md:text-5xl text-3xl font-bold text-center py-10">Add Course</h1>

            <section className="p-6 ">
                <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Course Information</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Course Name</label>
                                <input {...register("name", { required: true })} id="name" type="text" placeholder="Course Name" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                                {errors.name && <span className="text-red-500 md:text-sm text-xs pt-1">This field is required</span>}
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="price" className="text-sm">Price (BDT)</label>
                                    <input {...register("price", { required: true })} id="price" type="text" placeholder="Course Price" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                                    {errors.price && <span className="text-red-500 md:text-sm text-xs pt-1">This field is required</span>}
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Bio</label>
                                <input id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 "></input>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">City</label>
                                <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">State / Province</label>
                                <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="username" className="text-sm">Username</label>
                                    <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="website" className="text-sm">Website</label>
                                    <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddCourse;