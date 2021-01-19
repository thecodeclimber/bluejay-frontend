import React, { useEffect } from "react";
import { func, bool, element } from "prop-types";
import classnames from "classnames";
import { Transition } from "@headlessui/react";

const Drawer = (props) => {
  const { isOpen, children, closeDrawer } = props;

  useEffect(() => {
    document.addEventListener("keydown", handleCloseDrawer, false);
    return () => {
      document.removeEventListener("keydown", handleCloseDrawer, false);
    };
  }, []);

  const handleCloseDrawer = (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  };

  return (
    <div className="relative z-50">
      <Transition
        show={isOpen}
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div className="fixed inset-0 transition-opacity" onClick={closeDrawer}>
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
      </Transition>
      <div
        className={classnames(
          "transform top-0 right-0 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        {isOpen && children}
      </div>
    </div>
  );
};

Drawer.defaultProps = {
  isOpen: false,
  closeDrawer: () => {},
};

Drawer.propTypes = {
  isOpen: bool,
  closeDrawer: func,
  children: element,
};

export default Drawer;
