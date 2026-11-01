// GOOD
import { ReactNode } from "react";
// STYLES
import { EmptyStateContainer, EmptyStateTitle, EmptyStateDescription } from "./EmptyState.Styles";

type Props = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function EmptyState({ title, description, children }: Props) {
  return (
    <EmptyStateContainer>
      <EmptyStateTitle component="h2">{title}</EmptyStateTitle>

      {description && <EmptyStateDescription component="p">{description}</EmptyStateDescription>}

      {children}
    </EmptyStateContainer>
  );
}
