import React, { useEffect, useState } from "react";
import "./Details.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactnToastify.css";

const Details = ({ cart }) => {
  const [cnt, setBreak] = useState(0);

  // const notify = () => toast("Wow so easy!");

  useEffect(() => {
    const localData = localStorage.getItem("time");
    if (localData) {
      setBreak(localData);
    } else {
      setBreak(0);
    }
  }, []);

  let total = 0;
  let quantity = 0;
  for (const exercise of cart) {
    quantity = quantity + exercise.quantity;
    total = parseFloat(total + exercise.time * exercise.quantity);
  }

  return (
    <div className="details">
      <div>
        <h2>Nayeem Haque</h2>
        <span>Dhaka, Bangladesh</span>
        <br />
        <br />
        <div className="personal">
          <button>
            Weight 75kg
          </button>
          <button>
            Height 5.9
          </button>
          <button>
            Age 25yrs
          </button>
        </div>
        <br/>
        <h3> Add a break{" "}  </h3> <br/>
        <div className="break">
          <button
            onClick={() => {
              localStorage.setItem("time", cnt);
              setBreak(10);
            }}
          >
            10s
          </button>
          <button
            onClick={() => {
              localStorage.setItem("time", cnt);
              setBreak(20);
            }}
          >
            20s
          </button>
          <button
            onClick={() => {
              localStorage.setItem("time", cnt);
              setBreak(30);
            }}
          >
            30s
          </button>
          <button
            onClick={() => {
              localStorage.setItem("time", cnt);
              setBreak(40);
            }}
          >
            40s
          </button>
        </div>
      </div><br />
      <h2>Exercise Details</h2><br />
      <h4>Exercise Time: {total}s</h4><br />
      <h4>Break Time: {cnt}s</h4><br />
      <button>Activity Completed</button>
      <br />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Details;
