import {
  Card,
  Avatar,
  Typography,
  Input,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <Typography variant="h4" color="blue-gray">
          Profile Page
        </Typography>
        <IconButton variant="text" color="blue-gray">
          <PencilIcon className="h-5 w-5" />
        </IconButton>
      </div>

      <Card className="p-6 shadow-md max-w-4xl mx-auto">
        <div className="flex items-center space-x-6 mb-6">
          <Avatar
            src="path-to-profile-image.jpg"
            alt="User Name"
            className="w-24 h-24"
          />
          <div>
            <Typography variant="h5">Akib Abdullah</Typography>
            <Typography variant="small" color="gray">
              Head Teacher
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input label="First Name" value="Akib" />
          <Input label="Last Name" value="Abdullah" />
          <Input label="Email" type="email" value="akib@mail.com" />
          <Input label="Phone Number" type="tel" value="+123 456 7890" />
          <Input label="Address" value="123 Main Street, Dhaka" />
          <Input label="City" value="Dhaka" />
          <Input label="Country" value="Bangladesh" />
          <Input label="Postal Code" value="12345" />
        </div>

        <div className="flex justify-end">
          <Button color="blue" className="w-full md:w-auto">
            Save Changes
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
