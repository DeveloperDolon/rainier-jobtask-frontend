import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const {id} = useParams();
    const [courseData, setCourseData] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/api/courses/${id}`, {
            method: "GET", // or "POST" or any other HTTP method
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then(res => res.json())
        .then(data => setCourseData(data))
        .catch(err => console.error(err))
    }, [id]);

    return (
        <div className='container mx-auto mb-24'>
            <h1 className='md:text-4xl text-2xl font-semibold py-7'>{courseData?.name}</h1>

            <p>{courseData?.description}</p>

            <h3 className='md:text-xl text-lg font-medium pt-5'>Price : {courseData?.price} BDT</h3>
            <p className='md:text-lg text-base font-semibold pt-3'>Duration : {courseData?.duration}</p>
            <p className='md:text-lg text-base font-semibold pt-3'>Level : {courseData?.level}</p>
            <p className='md:text-lg text-base font-semibold pt-3'>Topics : {courseData?.topics?.map((item, idx) => item + (courseData?.topics.length === (idx+1) ? "."  : ", "))}</p>
            
            <p className='md:text-lg text-base font-semibold pt-3 text-lime-500'>Starting date : {courseData?.schedule?.startDate}</p>
            <p className='md:text-lg text-base font-semibold pt-3 text-red-500'>End date : {courseData?.schedule?.endDate}</p>
            
            <p className='md:text-lg text-base font-semibold pt-3'>Class days : {courseData?.schedule?.classDays?.map((item, idx) => item + (courseData?.schedule?.classDays?.length === (idx+1) ? "."  : ", "))}</p>

            <p className='md:text-lg text-base font-semibold pt-3'>Class Time : {courseData?.schedule?.classTime}</p>
            <div className='mt-6'>
                <button className='btn btn-info'>Enroll Now</button>
            </div>
        </div>
    );
};

export default CourseDetails;