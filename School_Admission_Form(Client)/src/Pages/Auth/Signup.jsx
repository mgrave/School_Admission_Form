import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../assets/Logo.png";

const Signup = () => {
  const { signUp } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data.email, data.password)
      .then((result) => {
        Swal.fire("User Created Successfully");
        const signedUser = result.user;
        console.log(signedUser);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-deep-orange-50">
      <Card color="transparent" shadow={false} className="flex items-center">
        <img src={logo} alt="" className="w-28" />
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 sm:w-96">
          <div className="mb-1 flex flex-col gap-2">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              {...register("name", { required: true })}
              size="lg"
              placeholder="type your name here"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              {...register("email", { required: true })}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              {...register("password", { required: true })}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />{" "}
            {errors.password && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <Button
            className="mt-6 bg-brown-400 text-sm text-white"
            color="white"
            type="submit"
            fullWidth
          >
            sign up
          </Button>
          <p color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            {/* <a href="#" className="font-medium text-gray-900">
              
            </a> */}
            <Link to="/login" className="font-medium text-gray-900">
              Login
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
