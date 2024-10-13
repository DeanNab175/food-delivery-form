import { FieldErrors, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
// import useRenderCount from "@/hooks/useRenderCount";

type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
};

// const RenderCount = useRenderCount();

function FoodDeliveryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    mode: "onChange",
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
    },
  });

  const onSubmit = (data: FoodDeliveryFormType) => {
    console.log("form data", data);
  };

  const onError = (errors: FieldErrors) => {
    console.log("Errors", errors);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h3 className="font-semibold mb-3">Delivery form with React</h3>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {/* <RenderCount /> */}
        <section className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <Input
              type="text"
              placeholder="#Order No."
              disabled
              {...register("orderNo")}
            />
          </div>

          <div>
            <Input
              type="text"
              placeholder="Mobile"
              {...register("mobile", {
                minLength: {
                  value: 10,
                  message: "Mobile number must be 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "Mobile number must be 10 digits",
                },
                required: {
                  value: true,
                  message: "Mobile number is required",
                },
              })}
            />
            {errors.mobile && (
              <p className="text-xs text-red-600">{errors.mobile?.message}</p>
            )}
          </div>

          <div>
            <Input
              type="text"
              placeholder="Customer Name"
              {...register("customerName", {
                required: {
                  value: true,
                  message: "Customer name is required",
                },
              })}
            />
            {errors.customerName && (
              <p className="text-xs text-red-600">
                {errors.customerName?.message}
              </p>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Incorrect email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-600">{errors.email?.message}</p>
            )}
          </div>
        </section>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default FoodDeliveryForm;
