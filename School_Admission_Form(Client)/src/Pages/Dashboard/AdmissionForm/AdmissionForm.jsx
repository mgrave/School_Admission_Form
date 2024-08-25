import {
  Card,
  Input,
  Select,
  Option,
  Button,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const AdmissionForm = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <Typography variant="h4" color="blue-gray">
          New Application
        </Typography>
        <div className="flex items-center space-x-4">
          <Avatar
            src="path-to-image.jpg"
            alt="Akib Abdullah"
            className="w-16 h-16"
          />
          <div>
            <Typography variant="h6">Akib Abdullah</Typography>
            <Typography variant="small" color="gray">
              Head Teacher
            </Typography>
          </div>
        </div>
      </div>

      <Card className="p-6 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="col-span-2">
            <Typography variant="h6" color="blue-gray">
              Student Information
            </Typography>
          </div>

          <Input label="First Name" required />
          <Input label="Last Name" required />
          <Select label="Gender">
            <Option>Male</Option>
            <Option>Female</Option>
            <Option>Other</Option>
          </Select>
          <Input label="Date of Birth" type="date" required />
          <Select label="What Class Do you want to Admit?" required>
            <Option>Choose Your Class</Option>
          </Select>
          <Select label="Section" required>
            <Option>Choose Your Section</Option>
          </Select>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Typography variant="small" color="blue-gray" className="mb-2">
                Upload Your Photo (150 x 150px)
              </Typography>
              <Input type="file" />
            </div>
            <div>
              <Typography variant="small" color="blue-gray" className="mb-2">
                Upload Your Birth Certificate (PDF, IMG, PNG, Max size 2MB)
              </Typography>
              <Input type="file" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="col-span-2">
            <Typography variant="h6" color="blue-gray">
              Other Information
            </Typography>
          </div>

          <Input label="Father's Name" />
          <Input label="Mother's Name" />
          <Input label="Contact Number" type="tel" />
          <Input label="Present Address" />
          <Input label="City" />
          <Input label="Zip Code" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="col-span-2">
            <Typography variant="h6" color="blue-gray">
              Previous School Information
            </Typography>
          </div>

          <Input label="School Name" />
          <Input label="Class" />
          <Input label="Result Grade" />
          <Input label="Session" />
          <Input label="City" />
          <Input label="Zip Code" />
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2">
              Upload Transfer Certificate (PDF, IMG, PNG, Max size 2MB)
            </Typography>
            <Input type="file" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <Typography variant="h6" color="blue-gray">
              Account Information
            </Typography>
          </div>

          <Input label="E-mail" type="email" required />
          <Input label="Password" type="password" required />
          <Input label="Confirm Password" type="password" required />
        </div>

        <div className="flex justify-end mt-6">
          <Button color="blue" className="w-full md:w-auto">
            Add Student
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AdmissionForm;
