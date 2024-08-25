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
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => {
    Swal.fire("Successfully Logout");
  };

  return (
    <>
      <Card className="bg-deep-orange-50 w-64 p-4 shadow-xl shadow-blue-gray-900/5 sticky top-0 h-screen">
        <div className="mb-2">
          <Typography variant="h5" color="blue-gray">
            <img src={logo} alt="logo" className="w-24" />
          </Typography>
        </div>
        <List>
          <Link to="/dashboard">
            <ListItem className="flex gap-5">
              <PresentationChartBarIcon className="h-5 w-4" />
              dashboard
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

          <ListItem component={Link} to="/dashboard/settings">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>

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
