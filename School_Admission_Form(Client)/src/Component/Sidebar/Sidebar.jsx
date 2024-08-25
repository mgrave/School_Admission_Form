import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import logo from "../../assets/Logo.png";
import { FaWpforms } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
      <button
        className="md:hidden p-4 fixed top-0 right-0 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <RxCross2 className="h-6 w-6 text-gray-600" />
        ) : (
          <GiHamburgerMenu className="h-6 w-6 text-gray-600" />
        )}
      </button>
      <Card
        className={`bg-deep-orange-50 w-64 p-4 shadow-xl shadow-blue-gray-900/5 sticky top-0 h-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-full`}
      >
        <div className="mb-2">
          <Typography variant="h5" color="blue-gray">
            <img src={logo} alt="logo" className="w-24" />
          </Typography>
        </div>
        <List>
          <Link to="/dashboard/home">
            <ListItem className="flex gap-5">
              <PresentationChartBarIcon className="h-5 w-4" />
              Dashboard
            </ListItem>
          </Link>

          <Link to="/dashboard/admissionForm">
            <ListItem className="flex gap-5">
              <FaWpforms className="h-4 w-4" />
              Admission Form
            </ListItem>
          </Link>

          <Link to="/dashboard/profile">
            <ListItem className="flex gap-5">
              <UserCircleIcon className="h-5 w-5" />
              Profile
            </ListItem>
          </Link>

          {/* <ListItem component={Link} to="/dashboard/settings">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem> */}

          <ListItem onClick={handleLogout}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default Sidebar;
