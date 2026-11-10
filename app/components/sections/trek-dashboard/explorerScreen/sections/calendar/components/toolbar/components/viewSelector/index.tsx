import type { View } from "react-big-calendar";

import { ViewSelectorContainer, ViewSelectorButton } from "./ViewSelector.Styles";
import { viewOptions } from "../../../../data/calendar.data";

interface CalendarViewSelectorProps {
  view: View;
  onChange: (view: View) => void;
}

export default function ViewSelector({ view, onChange }: CalendarViewSelectorProps) {
  return (
    <ViewSelectorContainer>
      {viewOptions.map((option) => {
        const isActive = view === option.value;

        return (
          <ViewSelectorButton
            key={option.value}
            active={isActive}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </ViewSelectorButton>
        );
      })}
    </ViewSelectorContainer>
  );
}
