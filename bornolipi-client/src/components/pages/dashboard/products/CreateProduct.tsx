/* eslint-disable @typescript-eslint/no-explicit-any */
import MyFileInput from "@/components/from/MyFileInput";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import MySelect from "@/components/from/MySelect";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import {
  createProductDefaultValues,
  createProductValidation,
} from "@/validationAndDefaultValue/createProductSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

const CreateProduct = () => {
  //   const navigate = useNavigate();

  //   const [createUser] = useCreateUserMutation();

  const onSubmit = async (value: FieldValues) => {
    console.log(value);
    // const res = (await createUser(value)) as any;
    // console.log(res, "res");
    // if (res.data) {
    //   toast.success(res.data?.message);
    //   navigate("/admin-user");
    // } else if (res?.error) {
    //   toast.error(res.error?.message || "Something went wrong");
    // }
  };
  return (
    <div className="space-y-6">
      <PageHeader />
      <div className="bg-white rounded-[16px] p-6 shadow border border-[#f2f4f7]">
        <MyForm
          onSubmit={onSubmit}
          resolver={zodResolver(createProductValidation)}
          defaultValues={createProductDefaultValues}
        >
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <MyInput
              name="productName"
              label="Product Name"
              type="text"
              placeholder="Ender Product Name"
            />

            <MySelect
              name="productType"
              label="Product Type"
              placeholder="Select One"
              options={[
                {
                  label: "Book",
                  value: "Book",
                },
              ]}
              isSuggestion={false}
            />

            <MyInput
              name="productPrice"
              label="Price"
              type="number"
              placeholder="Product Price"
            />
            <MyFileInput name="productLogo" label="Product Logo" />
            <MyFileInput name="productCoverImage" label="Cover Image" />
          </div>
          <div className="mt-6 flex justify-end">
            <Button>Submit</Button>
          </div>
        </MyForm>
      </div>
    </div>
  );
};

export default CreateProduct;
