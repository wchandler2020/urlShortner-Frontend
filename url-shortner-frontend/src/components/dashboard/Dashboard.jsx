import React, { useContext, useState } from "react";
import Graph from "../chart/Graph";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useFetchTotalClicks } from "../hooks/useQuery";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, FormControl, TextField } from "@mui/material";
import ShortenPopUp from "./ShortenPopUp";

const Dashboard = () => {
  const refetch = false;
  const { token } = useStoreContext();
  const [shortenPopUp, setShortenPopUp] = useState(false);

  const onError = () => console.error("ERROR");
  const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(
    token,
    onError
  );

  const handleClose = () => setShortenPopUp(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      {loader ? (
        <p>Loading...</p>
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">
          <div className=" h-96 relative ">
            {totalClicks === 0 && (
              <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                  No Data For This Time Period
                </h1>
                <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600 ">
                  Share your short link to view where your engagements are
                  coming from
                </h3>
              </div>
            )}
            <Graph graphData={totalClicks} />
          </div>
          <div className="py-5 sm:text-end text-center">
            <button
              className="bg-custom-gradient px-4 py-2 rounded-md text-white"
              onClick={() => setShortenPopUp(true)}
            >
              Create a New Short URL
            </button>
          </div>
        </div>
      )}
      <ShortenPopUp open={shortenPopUp} setOpen={setShortenPopUp} refetch={refetch}/>
    </div>
  );
};

export default Dashboard;
