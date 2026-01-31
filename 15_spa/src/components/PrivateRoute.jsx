import { Children, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, []);

  return children;
};

// const PrivateRoute = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLogin) {
//       navigate("/");
//     }
//   }, []);

//   return <Outlet />;
// };

export default PrivateRoute;
