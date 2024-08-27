import { Card, Typography } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <Typography variant="h4" color="blue-gray">
          Dashboard
        </Typography>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="p-6 shadow-md bg-white">
          <div className="flex items-center space-x-4">
            <PresentationChartBarIcon className="h-8 w-8 text-blue-500" />
            <div>
              <Typography variant="h6" color="blue-gray">
                Total Students
              </Typography>
              <Typography variant="h4" color="blue-gray">
                1,234
              </Typography>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-md bg-white">
          <div className="flex items-center space-x-4">
            <UserGroupIcon className="h-8 w-8 text-green-500" />
            <div>
              <Typography variant="h6" color="blue-gray">
                Recent Activities
              </Typography>
              <Typography variant="body2" color="blue-gray">
                10 new applications this week
              </Typography>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-md bg-white">
          <div className="flex items-center space-x-4">
            <DocumentTextIcon className="h-8 w-8 text-red-500" />
            <div>
              <Typography variant="h6" color="blue-gray">
                Documents
              </Typography>
              <Typography variant="body2" color="blue-gray">
                20 pending approvals
              </Typography>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-md bg-white">
          <div className="flex items-center space-x-4">
            <CalendarIcon className="h-8 w-8 text-yellow-500" />
            <div>
              <Typography variant="h6" color="blue-gray">
                Upcoming Events
              </Typography>
              <Typography variant="body2" color="blue-gray">
                3 events this month
              </Typography>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <Typography variant="h5" color="blue-gray" className="mb-4">
          Quick Links
        </Typography>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/dashboard/admissionForm">
            <Card className="p-6 shadow-md bg-white hover:bg-gray-100 transition-colors">
              <Typography variant="h6" color="blue-gray">
                Admission Form
              </Typography>
            </Card>
          </Link>

          <Link to="/dashboard/profile">
            <Card className="p-6 shadow-md bg-white hover:bg-gray-100 transition-colors">
              <Typography variant="h6" color="blue-gray">
                Student Profiles
              </Typography>
            </Card>
          </Link>

          <Link>
            <Card className="p-6 shadow-md bg-white hover:bg-gray-100 transition-colors">
              <Typography variant="h6" color="blue-gray">
                Courses
              </Typography>
            </Card>
          </Link>

          <Link>
            <Card className="p-6 shadow-md bg-white hover:bg-gray-100 transition-colors">
              <Typography variant="h6" color="blue-gray">
                Assignments
              </Typography>
            </Card>
          </Link>

          <Link>
            <Card className="p-6 shadow-md bg-white hover:bg-gray-100 transition-colors">
              <Typography variant="h6" color="blue-gray">
                Grades
              </Typography>
            </Card>
          </Link>

          <Link>
            <Card className="p-6 shadow-md bg-white hover:bg-gray-100 transition-colors">
              <Typography variant="h6" color="blue-gray">
                Notifications
              </Typography>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
