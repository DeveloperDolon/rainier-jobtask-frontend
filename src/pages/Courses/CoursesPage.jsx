import { useEffect, useState } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ title, subtitle, Icon, href }) => {
    return (
        <Link
            to={`/course/${href}`}
            className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
                {title}
            </h3>
            <p className="text-slate-500 font-semibold group-hover:text-violet-200 relative z-10 duration-300">
                {subtitle} BDT 
            </p>
        </Link>
    );
};

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axiosPublic.get("/api/courses")
            .then(res => setCourses(res?.data))
            .catch(err => console.error(err))
    }, []);
    console.log(courses);
    return (
        <div className="container mx-auto">
            <h1 className="md:text-5xl text-3xl font-bold text-center py-7">Out All Courses</h1>

            <div className="p-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        courses?.length > 0 ?
                        courses?.map(item => <Card key={item._id}
                        title={item?.name}
                        subtitle={item?.price}
                        href={item?._id}
                        Icon={FiCreditCard}
                        ></Card>)
                        : <h1 className="md:text-xl text-lg font-semibold text-center md:col-span-2">There is no course available!</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;