import { useEffect, useState } from "react";

export interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

function useToggle(props: ToggleProps) {
  const { onChange, checked: checkedProp, disabled } = props;

  const [checked, setChecked] = useState(checkedProp);

  const handleChange = () => {
    if (disabled) return;
    if (onChange) onChange(!checked);
    setChecked(!checked);
  };

  useEffect(() => {
    setChecked(checkedProp);
  }, [checkedProp]);

  return { handleChange, checked, disabled };
}

export default useToggle;
