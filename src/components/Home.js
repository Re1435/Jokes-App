import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URL =
  "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigate();

  const fetchJokesData = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.log("Data Not Found");
      }
      const responseData = await response.json();
      setData(responseData.jokes);
      setLoading(false);
    } catch (error) {
      throw new error("Server is error");
    }
  };

  useEffect(() => {
    fetchJokesData(URL);
  }, []);

  const logOut = () => {
    navigation("/login");
  };

  return (
    <div className='m-3'>
      {loading === true ? (
        <div className='text-center m-5'>
          <button className='btn btn-primary' disabled>
            <span
              className='spinner-border spinner-border-sm'
              aria-hidden='true'
            ></span>
            <span>Loading...</span>
          </button>
        </div>
      ) : (
        <div>
          <table className='table table-hover table-info p-5 caption-top table-responsive-sm table-responsive-md table-responsive-lg'>
            <caption className='text-center display-4'>List of Jokes</caption>
            <thead className='table-dark'>
              <tr>
                <th scope='col'>Category</th>
                <th scope='col'>Joke</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              {data.map(({ joke, category, id }) => (
                <tr key={id}>
                  <td>{category}</td>
                  <td>{joke}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='text-center'>
            <button onClick={logOut} className='btn btn-outline-primary'>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
