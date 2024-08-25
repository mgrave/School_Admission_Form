import {
  Card,
  Input,
  Select,
  Option,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AdmissionForm = () => {
  const axiosPublic = useAxiosPublic();
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const mutation = useMutation({
    mutationFn: (data) =>
      axiosPublic.post("/form", data, {
        headers: { "Content-Type": "application/json" },
      }),
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Form submitted successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="p-6 min-h-screen">
      <Typography variant="h4" color="blue-gray">
        New Application
      </Typography>
      <Card className="p-6 shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="col-span-2">
              <Typography variant="h6" color="blue-gray">
                Student Information Form
              </Typography>
            </div>

            <div>
              <Input
                {...register("firstName", { required: true })}
                label="First Name"
              />
              {errors.firstName && <span>This field is required</span>}
            </div>

            <div>
              <Input
                {...register("lastName", { required: true })}
                label="Last Name"
              />
              {errors.lastName && <span>This field is required</span>}
            </div>
            <div>
              <Controller
                name="gender"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} label="Gender">
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                    <Option value="Other">Other</Option>
                  </Select>
                )}
              />
              {errors.gender && <span>This field is required</span>}
            </div>

            <div>
              <Input
                {...register("dob", { required: true })}
                label="Date of Birth"
                type="date"
              />
              {errors.dob && <span>This field is required</span>}
            </div>

            <div>
              <Controller
                name="class"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} label="What Class Do you want to Admit?">
                    <Option value="Class 1">Class 1</Option>
                    <Option value="Class 2">Class 2</Option>
                    <Option value="Class 3">Class 3</Option>
                    <Option value="Class 4">Class 4</Option>
                    <Option value="Class 5">Class 5</Option>
                  </Select>
                )}
              />
              {errors.class && <span>This field is required</span>}
            </div>

            <div>
              <Controller
                name="section"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} label="Section">
                    <Option value="Section A">Section A</Option>
                    <Option value="Section B">Section B</Option>
                  </Select>
                )}
              />
              {errors.section && <span>This field is required</span>}
            </div>

            {/* Uncomment if file upload is needed */}
            {/* 
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography variant="small" color="blue-gray" className="mb-2">
                  Upload Your Photo (150 x 150px)
                </Typography>
                <Input {...register("photo")} type="file" />
              </div>
              <div>
                <Typography variant="small" color="blue-gray" className="mb-2">
                  Upload Your Birth Certificate (PDF, IMG, PNG, Max size 2MB)
                </Typography>
                <Input {...register("birthCertificate")} type="file" />
              </div>
            </div> 
            */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="col-span-2">
              <Typography variant="h6" color="blue-gray">
                Other Information
              </Typography>
            </div>

            <Input {...register("fathersName")} label="Father's Name" />
            <Input {...register("mothersName")} label="Mother's Name" />
            <Input
              {...register("contactNumber")}
              label="Contact Number"
              type="tel"
            />
            <Input {...register("presentAddress")} label="Present Address" />
            <Input {...register("city")} label="City" />
            <Input {...register("zipCode")} label="Zip Code" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="col-span-2">
              <Typography variant="h6" color="blue-gray">
                Previous School Information
              </Typography>
            </div>

            <Input {...register("schoolName")} label="School Name" />
            <Input {...register("class")} label="Class" />
            <Input {...register("resultGrade")} label="Result Grade" />
            <Input {...register("session")} label="Session" />
            <Input {...register("city")} label="City" />
            <Input {...register("zipCode")} label="Zip Code" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <Typography variant="h6" color="blue-gray">
                Account Information
              </Typography>
            </div>

            <Input
              {...register("email", { required: true })}
              label="E-mail"
              type="email"
            />
            {errors.email && <span>This field is required</span>}

            <Input
              {...register("password", { required: true })}
              label="Password"
              type="password"
            />
            {errors.password && <span>This field is required</span>}

            <Input
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
              label="Confirm Password"
              type="password"
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <Button type="submit" className="w-full md:w-auto bg-brown-400">
              Submit Student Form
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AdmissionForm;
