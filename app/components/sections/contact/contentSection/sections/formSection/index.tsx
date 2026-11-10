// GOOD
"use client";

import { useState, type RefObject } from "react";
import { SelectChangeEvent, Stack } from "@mui/material";
// COMPONENTS UI
import { PrimaryTextAreaField, PrimarySelectField } from "@/app/components/ui";
// STYLES
import { Input } from "./FormSection.Styles";

type FormSectionProps = {
  formItemsRef: RefObject<HTMLElement[]>;
};

export default function FormSection({ formItemsRef }: FormSectionProps) {
  const [reason, setReason] = useState<string>("");

  function handleChange(event: SelectChangeEvent<string>) {
    setReason(event.target.value);
  }

  function registerFormItem(element: HTMLElement | null) {
    if (element && !formItemsRef.current.includes(element)) {
      formItemsRef.current.push(element);
    }
  }

  return (
    <Stack>
      <Input ref={registerFormItem} label="Prénom" variant="standard" />

      <Input ref={registerFormItem} label="Nom de famille" variant="standard" />

      <Input ref={registerFormItem} label="Numéro de téléphone" variant="standard" />

      <Input ref={registerFormItem} label="Email" variant="standard" />

      <Input ref={registerFormItem} label="Objet" variant="standard" />

      <PrimarySelectField
        ref={registerFormItem}
        label="Raison"
        value={reason}
        onChange={handleChange}
        options={[
          {
            label: "Partenariat",
            value: "partenariat",
          },
          {
            label: "Question",
            value: "question",
          },
          {
            label: "Autre",
            value: "other",
          },
        ]}
      />

      <PrimaryTextAreaField
        ref={registerFormItem}
        placeholder="Tapez ici votre message..."
        rows={4}
        sx={{
          my: "50px",
        }}
      />
    </Stack>
  );
}
