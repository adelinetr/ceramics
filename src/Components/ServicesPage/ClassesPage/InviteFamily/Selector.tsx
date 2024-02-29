import AsyncSelect from "react-select/async";
import { ClassesOption, ClassesOptions } from "./DataClasses";

const filterClasses = (inputValue: string) => {
  return ClassesOptions.filter((i) =>
    i.value.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (
  inputValue: string,
  callback: (options: ClassesOption[]) => void
) => {
  setTimeout(() => {
    callback(filterClasses(inputValue));
  }, 500);
};

export default function Selector() {
  return (
    <div className="w-full lg:w-[70%]">
      <AsyncSelect
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: state.isFocused ? "1px solid black" : "",
            "&:hover": {
              border: "1px solid black",
            },
            boxShadow: "none",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "#E3E3E3" : "",
            color: "black",
            "&:hover": {
              backgroundColor: "#E3E3E3",
            },
          }),
        }}
        placeholder="Choose a class..."
        loadOptions={loadOptions}
        defaultOptions
      />
    </div>
  );
}
