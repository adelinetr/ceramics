import AsyncSelect from "react-select/async";

interface Option {
  label: string;
  value: string;
}

interface SelectorProps {
  options: Option[],
  className: string,
  placeholder: string
}

export default function Selector(props: SelectorProps) {
  const { options } = props;

  const filterClasses = (inputValue: string): Option[] => {
    return options.filter((option) =>
      option.value.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  
  const loadOptions = (
    inputValue: string,
    callback: (options: Option[]) => void
  ) => {
    setTimeout(() => {
      callback(filterClasses(inputValue));
    }, 500);
  };
  return (
    <div className={`w-full ${props.className}`}>
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
        placeholder={props.placeholder}
        loadOptions={loadOptions}
        defaultOptions
      />
    </div>
  );
}
