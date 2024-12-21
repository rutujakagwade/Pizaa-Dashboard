// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const OrdersList = () => {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/orders');
//       setOrders(response.data);
//     } catch (error) {
//       if (error.response) {
//         // Request made and server responded with a status code
//         console.error('Response error:', error.response.data);
//         console.error('Response status:', error.response.status);
//       } else if (error.request) {
//         // Request made but no response received
//         console.error('Request error:', error.request);
//       } else {
//         // Something else happened in setting up the request
//         console.error('Error message:', error.message);
//       }
//     }
//   };
  

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h1>Orders</h1>
//       <ul>
//         {orders.map(order => (
//           <li key={order._id}>{order.status}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrdersList;
