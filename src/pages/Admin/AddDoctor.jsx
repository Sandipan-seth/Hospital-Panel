import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets_admin/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../../context/AdminContext";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 yr");
  const [fees, setFees] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [education, setEducation] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [about, setAbout] = useState("");
  const [available, setAvailable] = useState(true);

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!docImg) {
      return toast.error("Please upload Doctor Image");
    }


    try {
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("speciality", speciality);
      formData.append("degree", education);
      formData.append("about", about);
      formData.append("available", available);
      formData.append(
        "address",
        JSON.stringify({
          line1: address1,
          line2: address2,
        })
      );

      console.log("Submitting form data...");
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        {
          headers: {
            // atoken: aToken,
            aToken
          },
        }
      );
      console.log("Token being sent:", aToken);

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message || "An error occurred");
      }
    } catch (err) {
      // console.error(err);
      toast.error("An error occurred. Please try again.");
    }
  };


  return (
    <form
      action=""
      className="max-w-4xl mx-auto p-6 bg-white m-5 shadow-md rounded-lg "
      onSubmit={onSubmitHandler}
    >
      <p className="text-2xl font-bold mb-4 text-center">Add Doctor</p>
      <div className="space-y-6">
        {/* Upload Doctor Picture */}
        <div className="text-center">
          <label htmlFor="doc-img" className="cursor-pointer">
            <img
              // src={assets.upload_area}
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Upload"
              className="w-32 h-32 mx-auto rounded-full border-2 border-dashed border-gray-400"
            />
          </label>
          <input
            type="file"
            id="doc-img"
            onChange={(e) => {
              setDocImg(e.target.files[0]);
            }}
            hidden
          />
          <p className="mt-2 text-sm text-gray-600">Upload Doctor Picture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="space-y-4">
            <div>
              <p className="font-medium">Doctor Name</p>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none border-gray-400"
              />
            </div>
            <div>
              <p className="font-medium">Doctor Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none border-gray-400"
              />
            </div>
            <div>
              <p className="font-medium">Doctor Password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none border-gray-400"
              />
            </div>
            <div>
              <p className="font-medium">Doctor Experience</p>
              <select
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none border-gray-400"
                value={experience}
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
              >
                <option value="1 yr">1 yr</option>
                <option value="2 yrs">2 yrs</option>
                <option value="3 yrs">3 yrs</option>
                <option value="4 yrs">4 yrs</option>
                <option value="5 yrs">5 yrs</option>
                <option value="6 yrs">6 yrs</option>
              </select>
            </div>
            <div>
              <p className="font-medium">Doctor Fees</p>
              <input
                type="number"
                value={fees}
                onChange={(e) => {
                  setFees(e.target.value);
                }}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none border-gray-400"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <div>
              <p className="font-medium">Doctor Speciality</p>
              <select
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none border-gray-400"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
              >
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div>
              <p className="font-medium">Education</p>
              <input
                type="text"
                required
                value={education}
                onChange={(e) => {
                  setEducation(e.target.value);
                }}
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none border-gray-400"
              />
            </div>
            <div>
              <p className="font-medium">Doctor Address</p>
              <input
                type="text"
                required
                value={address1}
                onChange={(e) => {
                  setAddress1(e.target.value);
                }}
                placeholder="Address Line 1"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none mb-2 border-gray-400"
              />
              <input
                type="text"
                required
                value={address2}
                onChange={(e) => {
                  setAddress2(e.target.value);
                }}
                placeholder="Address Line 2"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none mb-2 border-gray-400"
              />
            </div>
            <div>
              <p className="font-medium">About Doctor</p>
              <textarea
                value={about}
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                cols="30"
                rows="5"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none border-gray-400"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
