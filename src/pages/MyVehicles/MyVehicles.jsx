
import React, { useEffect, useRef, useState, useContext } from "react"; 
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import LoadingPage from "../LoadingPage/LoadingPage";
import { Link } from "react-router";

const MyVehicles = () => {
    const updateProductModalRef = useRef(null);
    const [updatingProductId, setUpdatingProductId] = useState(null);
    
    const axiosSecure = useAxiosSecure();

    const { user } = useContext(AuthContext); 
    const axiosInstance = useAxios();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Added loading state

   
    const productToUpdate = products.find(p => p._id === updatingProductId);

    
    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/userProducts?email=${user.email}`)
                .then(data => {
                    setProducts(data.data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching user products:", error);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [user, axiosSecure]);

    
    const handleDeleteProduct = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF4444",
            cancelButtonColor: "#4B5563",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/products/${_id}`)
                    .then(data => {
                        console.log(data);
                        
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your vehicle listing has been deleted.",
                                icon: "success"
                            });
                           
                            const remainingProducts = products.filter(product => product._id !== _id);
                            setProducts(remainingProducts);
                        }
                    });
            }
        });
    }

   

    
    if (isLoading) {
        return <LoadingPage className="text-center py-12 text-lg font-semibold"></LoadingPage>;
    }

    return ( 
        <div className="py-10 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4">
                    My Vehicle Listings ({products.length})
                </h1>

               
                {products.length === 0 ? (
                    <div className="text-center py-10 text-gray-500 text-lg border rounded-lg bg-white shadow-sm">
                        You have not listed any vehicles yet.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map(product => (
                            <div key={product._id} className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300'>
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={product.coverImage || 'placeholder-url'} 
                                        alt={product.vehicleName} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                            {product.vehicleName}
                                        </h3>
                                        <span 
                                            className={`px-3 py-1 text-xs font-semibold rounded-full uppercase ${
                                                product.availability === "Available" 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-red-100 text-red-800'
                                            }`}
                                        >
                                            {product.availability}
                                        </span>
                                    </div>
                                    <p className="text-lg font-semibold text-indigo-600 mb-4">
                                        ${product.pricePerDay} <span className="text-sm font-normal text-gray-500">/ Day</span>
                                    </p>
                                    
                                    <div className="space-y-1 text-sm text-gray-600">
                                        <p><strong>Category:</strong> {product.category}</p>
                                        <p><strong>Location:</strong> {product.location}</p>
                                    </div>

                                 
                                    <div className='flex justify-between gap-3 mt-5 pt-3 border-t'>
                                        <Link to={`/updateDetails/${product._id}`}>Update</Link>
                                        <button 
                                            onClick={() => handleDeleteProduct(product._id)} 
                                            className='px-4 py-2 text-sm font-medium rounded-lg text-white bg-primary'
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
          
    
        </div>
    ); 
}; 

export default MyVehicles;
