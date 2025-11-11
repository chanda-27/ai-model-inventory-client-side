import React, { use, useEffect, useState } from "react";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { AuthContext } from "../../contexts/AuthContext";

const MyVehicles = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
      
        axiosSecure.get(`/userProducts?email=${user.email}`)
            .then(data => {
                setProducts(data.data);

        })
  }, [user,axiosSecure]);
    return <div>
        {
            products.map(product => (
               <div>
                   <p>{ product.vehicleName}</p> 
                   <p>{ product.userEmail}</p> 
                    
               </div>
            ))
      }
  </div>;
};

export default MyVehicles;
