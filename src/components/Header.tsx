import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { FaCircleUser } from "react-icons/fa6";
import { Spin as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "motion/react";
import { routes } from "../routes";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <header className="sticky top-0 z-50 bg-deepBlue shadow-md text-whitte">
      {/* Mobile */}
      <div
        ref={ref}
        className="flex justify-between items-center p-5 lg:hidden"
      >
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-deepBlue bg-opacity-80 backdrop-blur-md flex flex-col items-center justify-center shadow-4xl right-0 top-[3.5rem] border-b border-b-white/20 p-5 pt-0"
            >
              <ul className="grid gap-2 w-full">
                {routes.map((route, idx) => {
                  const { Icon } = route;

                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={route.title}
                      className="w-full p-[0.08rem]"
                    >
                      <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 border-b border-b-[#25bad4]"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                      <Icon className="text-xl" />
                    </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <h1 className="cursor-pointer text-[#25bad4] font-bold tracking-widest">
          FILMQUEST
        </h1>

        <FaCircleUser
          title="Sign in or sign up"
          className="cursor-pointer text-xl"
        />
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:px-10 lg:py-5">
        <h1 className="cursor-pointer text-[#25bad4] font-bold tracking-widest">
          FILMQUEST
        </h1>
        <ul className="flex gap-5">
          {routes.map((route) => {
            const { title, href, Icon } = route;
            return (
              <li key={title}>
                <a href={href} className="flex items-center gap-2">
                  <Icon />
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
        <FaCircleUser
          title="Sign in or sign up"
          className="cursor-pointer text-2xl"
        />
      </div>
    </header>
  );
};

export default Header;
