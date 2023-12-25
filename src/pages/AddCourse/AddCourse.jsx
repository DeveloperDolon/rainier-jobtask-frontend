import { useState } from "react";
import { useForm } from "react-hook-form";

const AddCourse = () => {
    const [topics, setTopics] = useState([]);
    const [days, setDays] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleAddTopic = () => {
        const topic = document.querySelector("#topic").value;
        document.querySelector("#topic").value = "";
        setTopics([...topics, topic]);
    }

    const handleRemoveTopics = (idx) => {
       topics.splice(idx, 1);
       setTopics([...topics]);
    }
    
    const handleRemoveDay = (idx) => {
       days.splice(idx, 1);
       setDays([...days]);
    }
    
    const handleAddDays = () => {
        const day = document.querySelector("#day").value;
        document.querySelector("#day").value = "";
        setDays([...days, day]);
    }

    return (
        <div>
            <h1 className="md:text-5xl text-3xl font-bold text-center py-10">Add Course</h1>

            <section className="p-6 ">
                <form onSubmit={handleSubmit()} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
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

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="price" className="text-sm">Price (BDT)</label>
                                <input {...register("price", { required: true })} id="price" type="text" placeholder="Course Price" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                                {errors.price && <span className="text-red-500 md:text-sm text-xs pt-1">This field is required</span>}
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Description</label>
                                <textarea {...register("description", { required: true })} id="description" placeholder="Course Description" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 "></textarea>
                                {errors.description && <span className="text-red-500 md:text-sm text-xs pt-1">This field is required</span>}
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="duration" className="text-sm">Duration (Weeks)</label>
                                <input {...register("duration", { required: true })} id="duration" type="number" placeholder="Course duration" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                                {errors.duration && <span className="text-red-500 md:text-sm text-xs pt-1">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="level" className="text-sm">Level</label>
                                <select {...register("level", { required: true })} className="select select-bordered w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 ">
                                    <option disabled selected>Choose Level</option>
                                    <option value={"Beginner"}>Beginner</option>
                                    <option value={"Mid Level"}>Mid Level</option>
                                    <option value={"Expertise"}>Expertise</option>
                                </select>
                                {errors.level && <span className="text-red-500 md:text-sm text-xs pt-1">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="class-time" className="text-sm">Class Time</label>
                                <input {...register("class_time", { required: true })} id="class-time" type="text" placeholder="Course class time" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                                {errors.class_time && <span className="text-red-500 md:text-sm text-xs pt-1">This field is required</span>}
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="topic" className="text-sm">Topics</label>
                                <textarea id="topic" type="text" placeholder="Course Name" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200 p-5 flex items-start h-24" />
                                <span onClick={handleAddTopic} className="md:btn-sm mt-4 btn btn-xs md:btn-primary btn-primary md:text-sm text-xs">Add Topic</span>
                            </div>
                            <div className="col-span-full sm:col-span-3 md:pt-5">
                                {
                                    topics?.length > 0 ? <div className="flex md:gap-5 gap-3 flex-wrap">
                                        <h1>{topics?.length}</h1>
                                            {
                                                topics?.map((item, idx) => <div className="bg-gray-500 p-2 pl-5 pr-8 rounded-lg relative text-white" key={idx}>
                                                    <h1 className="md:text-base text-sm font-semibold">
                                                        {item}
                                                    </h1>
                                                    <span onClick={() => handleRemoveTopics(idx)} className="btn btn-xs btn-error absolute top-0 right-0">x</span>
                                                </div>)
                                            }
                                    </div> : 
                                    <h5 className="md:text-sm text-xs text-red-500">No topics available</h5>
                                }
                            </div>

                            <h2 className="md:text-xl text-lg font-bold col-span-full pt-5">Schedule Information</h2>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="start-date" className="text-sm">Start Date</label>
                                <input {...register("start_date", { required: true })} id="duration" type="date" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                                {errors.start_date && <span className="text-red-500 md:text-sm text-xs pt-1">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="end-date" className="text-sm">End Date</label>
                                <input {...register("end_date", { required: true })} id="duration" type="date" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                                {errors.end_date && <span className="text-red-500 md:text-sm text-xs pt-1">This field is required</span>}
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="class-time" className="text-sm">Class Time</label>
                                <input {...register("class_time", { required: true })} id="class-time" type="text" placeholder="Course class time" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200  p-3 " />
                                {errors.class_time && <span className="text-red-500 md:text-sm text-xs pt-1">This field is required</span>}
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="day" className="text-sm">Class Days</label>
                                <textarea id="day" type="text" placeholder="Add Class Days" className="w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200 p-5 flex items-start h-24" />
                                <span onClick={handleAddDays} className="md:btn-sm mt-4 btn btn-xs md:btn-primary btn-primary md:text-sm text-xs">Add Day</span>
                            </div>
                            <div className="col-span-full sm:col-span-3 md:pt-5">
                                {
                                    days?.length > 0 ? <div className="flex md:gap-5 gap-3 flex-wrap">
                                        <h1>{days?.length}</h1>
                                            {
                                                days?.map((item, idx) => <div className="bg-gray-500 p-2 pl-5 pr-8 rounded-lg relative text-white" key={idx}>
                                                    <h1 className="md:text-base text-sm font-semibold">
                                                        {item}
                                                    </h1>
                                                    <span onClick={() => handleRemoveDay(idx)} className="btn btn-xs btn-error absolute top-0 right-0">x</span>
                                                </div>)
                                            }
                                    </div> : 
                                    <h5 className="md:text-sm text-xs text-red-500">No Days available</h5>
                                }
                            </div>
                        </div>
                    </fieldset>
                    <div>
                        <button type="submit">Add Course</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddCourse;