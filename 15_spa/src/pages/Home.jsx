import { useSearchParams } from "react-router";
import Course from "../components/Home/Course.jsx";
import courses from "../data/courses.js";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setSearchParams({
      page: 20,
      search: "لپتاپ",
    });

    // کاربرد سرچ پارامز در پیدا کردن محصول مورد نظر
    // const search = searchParams.get("search");
    // const filteredProducts = products.filter((product) => {
    //   product.title.include(search);
    //   setProducts([filteredProducts]);
    // });
  }, []);
  return (
    <div
      id="root"
      className="grid my-40 grid-cols-4 max-w-300 mx-auto gap-5 relative z-50"
    >
      {courses.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  );
};

export default Home;
