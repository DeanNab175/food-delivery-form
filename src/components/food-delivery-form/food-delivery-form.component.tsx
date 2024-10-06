import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

function FoodDeliveryForm() {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>();

  const onSubmit = (data: FoodDeliveryFormType) => {
    console.log("form data", data);
  };

  const onError = (errors: any) => {
    console.log("Errors", errors);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h3 className="font-semibold mb-3">Delivery form with React</h3>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="my-3">
          <Input
            type="text"
            placeholder="Customer Name"
            {...register("customerName", {
              required: "Customer name is required.",
            })}
          />
        </div>
        <div className="my-3">
          <Input
            type="text"
            placeholder="Mobile"
            {...register("mobile", { required: "Mobile number is required." })}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default FoodDeliveryForm;
