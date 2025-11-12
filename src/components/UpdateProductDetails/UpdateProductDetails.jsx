import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { AuthContext } from "./../../contexts/AuthContext";

const UpdateProductDetails = () => {
  const axiosInstance = useAxios();
  const [product, setProduct] = useState();
  const { id } = useParams();
  console.log("id", id);
  const { user } = use(AuthContext);
  console.log(user);
  useEffect(() => {
    axiosInstance.get(`/products/${id}`).then((data) => {
      console.log(data.data);
      setProduct(data.data);
    });
  }, [id, axiosInstance]);

  const handleUpdateProductsDetails = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedVehicleName = form.vehicleName.value;
    const updatedOwner = form.owner.value;
    const updatedCategory = form.category.value;
    const updatedPricePerDay = form.pricePerDay.value;
    const updatedLocation = form.location.value;
    const updatedAvailability = form.availability.value;
    const updatedCoverImage = form.coverImage.value;
    const updatedUserEmail = form.coverImage.value;

    const updateProductData = {
      vehicleName: updatedVehicleName,
      owner: updatedOwner,
      category: updatedCategory,
      pricePerDay: parseFloat(updatedPricePerDay),
      location: updatedLocation,
      availability: updatedAvailability,
      coverImage: updatedCoverImage,
      userEmail: updatedUserEmail,
    };

    axiosInstance
      .patch(`/products/${id}`,updateProductData)
      .then((data) => {
        if (data.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Vehicle details updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Update failed:", error);
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Could not update the vehicle details.",
        });
      });
  };
  return (
    <div className="max-w-[600px] mx-auto my-4">
      <p className="text-2xl py-4  text-center text-primary">
        {" "}
        Update your product Details
      </p>
      <form onSubmit={handleUpdateProductsDetails} className="space-y-4 ">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Name
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            name="vehicleName"
            defaultValue={product?.vehicleName}
            placeholder="Vehicle Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            name="category"
            defaultValue={product?.category}
            placeholder="Category"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Owner
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            name="owner"
            defaultValue={product?.owner}
            placeholder="name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Owner
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            name="email"
            defaultValue={user.email}
            placeholder="email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Per Day ($)
          </label>
          <input
            type="number"
            step="0.01"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            name="pricePerDay"
            defaultValue={product?.pricePerDay}
            placeholder="Price Per Day"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            name="location"
            defaultValue={product?.location}
            placeholder="Location"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Availability
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            name="availability"
          >
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cover Image URL
          </label>
          <input
            type="url"
            className="w-full p-3 border border-gray-300 rounded-lg"
            name="coverImage"
            defaultValue={product?.coverImage}
            placeholder="Cover Image URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow-md mt-6"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProductDetails;
