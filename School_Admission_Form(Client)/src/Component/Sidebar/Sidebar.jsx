import { useState, useContext } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  PowerIcon,
  // ChevronRightIcon,
  // ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaWpforms } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../assets/Logo.png";

const SidebarWithBurgerMenu = () => {
  const { logOut } = useContext(AuthContext);
  // const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  // const handleOpen = (value) => {
  //   setOpen(open === value ? 0 : value);
  // };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleLogout = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Successfully Logout!",
      showConfirmButton: false,
      timer: 1500,
    });
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <IconButton
        variant="text"
        size="lg"
        onClick={openDrawer}
        className="fixed top-0 left-0 z-50 p-4"
      >
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-1 bg-deep-orange-50 shadow-xl shadow-blue-gray-900/5 sticky top-0"
        >
          <div className="mb-2 flex items-end gap-1 py-4 ">
            <img src={logo} alt="brand" className="h-14 w-14" />
            <Typography variant="h5" color="blue-gray">
              Online School
            </Typography>
          </div>
          <List>
            <Link to="/dashboard/home">
              <ListItem>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </Link>

            <Link to="/dashboard/admissionForm">
              <ListItem>
                <ListItemPrefix>
                  <FaWpforms className="h-4 w-4" />
                </ListItemPrefix>
                Admission Form
              </ListItem>
            </Link>

            <Link to="/dashboard/profile">
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
              </ListItem>
            </Link>

            <ListItem onClick={handleLogout}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
};

export default SidebarWithBurgerMenu;
