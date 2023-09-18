import React from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function Home(props) {
  const { isLoggedIn, setIsLoggedIn } = props;

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-4"
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/56/92/68/569268763bbba778f2260c844dba7eed.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-white text-left">
        <h1 className="text-6xl font-bold mb-4">Book your Ride</h1>
        <p className="text-lg">Study, Chill, Repeat - The College Way</p>
        <ul className="mt-4 space-y-2">
          <li className="flex space-x-2">
            {!isLoggedIn && (
              <>
                <Link to="/login">
                  <button className="bg-transparent border border-white px-4 py-3 rounded-lg">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-transparent border border-white px-4 py-3 rounded-lg">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </li>
          <li className="flex space-x-2">
            {isLoggedIn && (
              <>
                <Link to="/">
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      toast.success('Logged Out');
                    }}
                    className="bg-richblack-800 py-3 px-4 rounded-lg border border-white"
                  >
                    Log Out
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button className="bg-transparent border border-white px-4 py-3 rounded-lg">
                    Dashboard
                  </button>
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
