import { useState } from "react";

type ReturnType = {
  value: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
  onToggle: VoidFunction;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function useBoolean(defaultValue?: boolean): ReturnType {
  const [value, setValue] = useState<boolean>(!!defaultValue);

  const onOpen = () => {
    setValue(true);
  };

  const onClose = () => {
    setValue(false);
  };

  const onToggle = () => {
    setValue((prev) => !prev);
  };

  return { value, setValue, onClose, onOpen, onToggle };
}
