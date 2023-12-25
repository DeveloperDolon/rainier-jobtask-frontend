import { useEffect, useState } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";

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
            hello world
        </div>
    );
};

export default CoursesPage;