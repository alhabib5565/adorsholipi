import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

type TMyRadioGroup = {
  name: string;
  items: string[];
};

const MyRadioGroup = ({ name, items }: TMyRadioGroup) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex gap-10"
            >
              {items.map((item, index) => (
                <FormItem
                  key={index}
                  className={cn(
                    "flex flex-row items-start space-x-3 space-y-0 rounded-md px-4 py-3",
                    {
                      "bg-secondary text-primary": field.value === item,
                    }
                  )}
                >
                  <FormControl>
                    <RadioGroupItem value={item} />
                  </FormControl>
                  <FormLabel className="font-normal">{item}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MyRadioGroup;
