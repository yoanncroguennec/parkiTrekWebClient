// GOOD
"use client";

import { type TextFieldProps } from "@mui/material";
// STYLES
import { TextAreaField } from "./PrimaryTextAreaField.Styles";

type Props = TextFieldProps;

export default function PrimaryTextAreaField({ rows = 4, ...props }: Props) {
  return <TextAreaField multiline rows={rows} {...props} />;
}
