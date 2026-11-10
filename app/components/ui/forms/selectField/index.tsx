// GOOD
"use client";

import { forwardRef } from "react";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
// STYLE£S
import { SelectField } from "./PrimarySelectField.Styles";

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: Option[];
  width?: string | number;
};

const PrimarySelectField = forwardRef<HTMLDivElement, Props>(
  (
    {
      label,
      value,
      onChange,
      options,
      // width = "100%"
    },
    ref
  ) => {
    const labelId = `${label.replace(/\s+/g, "-").toLowerCase()}-label`;

    return (
      <SelectField ref={ref} variant="standard">
        <InputLabel id={labelId}>{label}</InputLabel>

        <Select<string> labelId={labelId} value={value} onChange={onChange}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </SelectField>
    );
  }
);

PrimarySelectField.displayName = "PrimarySelectField";

export default PrimarySelectField;
