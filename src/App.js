import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar.js";
import { Cards } from "./components/Cards.js";
import { Filter } from "./components/Filter.js";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "./components/Spinner.js";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output.data);
    } catch (error) {
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <div>
          <Navbar />
        </div>

        <div>
          <Filter
            filterData={filterData}
            setCategory={setCategory}
            category={category}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center mih-h-[50h]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
