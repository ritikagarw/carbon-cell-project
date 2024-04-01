/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FaBars, FaCube } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { FaHourglass } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { BiWallet, BiSearch } from "react-icons/bi";
import { CgOrganisation } from "react-icons/cg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CompanyLogo from "../../assets/company-logo.png";
import SidebarMenu from "./SidebarMenu";
import "./index.css";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FiHome />,
  },
  {
    path: "/organisation",
    name: "Organisation",
    icon: <CgOrganisation />,
  },
  {
    path: "/assets",
    name: "Assets",
    icon: <FaCube />,
  },
  {
    path: "/trade",
    name: "Trade",
    icon: <LuArrowUpDown />,
  },
  {
    path: "/history",
    name: "History",
    icon: <FaHourglass />,
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: <BiWallet />,
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "60px",
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <img src={CompanyLogo} alt="Carbon Cell" className="logo"/>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
