import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { getUserData } from "../../utils/helper";
import { setUser } from "../../hooks/user/actions";
import { Context } from "../../hooks/store";
import MainLayout from "./main";
import DashboardLayout from "./dashboard";

const Layout = (props) => {
  const router = useRouter();
  const { userState, dispatchUser } = useContext(Context);
  const [isLayoutRendered, setIsLayoutRendered] = useState(false);

  useEffect(() => {
    const userData = getUserData(userState);
    if (userData) dispatchUser(setUser(userData));
    setIsLayoutRendered(true);
  }, []);

  const handleDashboardLayout = () => {
    if (
      userState.user?.id &&
      router?.pathname &&
      router.pathname.match(/^\/dashboard/)
    ) {
      return true;
    }
    return false;
  };

  const isDashboardLayout = handleDashboardLayout();

  return (
    <>
      {isLayoutRendered && (
        <>
          {isDashboardLayout ? (
            <DashboardLayout {...props} />
          ) : (
            <MainLayout {...props} />
          )}
        </>
      )}
    </>
  );
};

export default Layout;
