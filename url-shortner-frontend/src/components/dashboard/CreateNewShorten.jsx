import React, {useState } from "react";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useForm } from "react-hook-form";
// import { TextField } from "@mui/material";
import TextField from "../textField/TextField";
import { Tooltip } from "@mui/material";
import { RxCross2 } from 'react-icons/rx';
import api from "../../api/api";
import toast from 'react-hot-toast'

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true)
    try {
        const {data: res} = await api.post('/api/urls/shorten', data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        const shortenUrl = `http://url.localhost:3000/${res.shortUrl}`
        navigator.clipboard.writeText(shortenUrl).then(() => {
            toast.success('Short url copied to clipboard.', {
                position: 'bottom-center',
                className: 'mb-5',
                duration: 5000
            });
        });
        // await refetch()
        reset()
        setOpen(false)
    } catch (error) {
        console.error(error)
        toast.error('Something went wrong, try again later.')
    }finally{
        setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center bg-white rounded-md">
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="sm:w-[450px] w-[360px] relative shadow-custom pt-8 pb-5 sm:px-8 px-4 rounded-lg text-slate-700"
      >
        <h1 className="sm:mt-0 mt-3 text-center font-bold sm:text-2xl text-[22px]">
        Shorten a long link

        </h1>
        <hr className="mt-2 sm:mt-55 mb-3 text-slate-800" />
        <h5>No credit card required.</h5>
        <div>
          <TextField
            label="Paste your long link here"
            required
            id="originalUrl"
            placeholder="https://example.com/my-long-url"
            type="url"
            message="A correct url is required"
            register={register}
            errors={errors}
          />
        </div>
        <button
          className="bg-red-500 font-semibold text-white w-48  py-2  transition-colors  rounded-md my-3"
          type="text"
        >
          {loading ? "Loading..." : "Get your link for free"}
        </button>
        {!loading && (
          <Tooltip title="Close">
            <button
              disabled={loading}
              onClick={() => setOpen(false)}
              className=" absolute right-2 top-2  "
            >
              <RxCross2 className="text-slate-800   text-3xl" />
            </button>
          </Tooltip>
        )}

      </form>
    </div>
  );
};

export default CreateNewShorten;
