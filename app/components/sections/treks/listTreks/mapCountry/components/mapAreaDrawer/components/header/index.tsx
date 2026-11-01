// GOOD
"use client";

import { useRef } from "react";
// COMPONENTS
import ProgressRing from "../progressRing";
// HOOKS
import { useHeaderAnimation } from "../../hooks/useHeaderAnimation";
// ICONS
import { IoClose, IoLocationOutline } from "react-icons/io5";
// STYLES
import {
  DepartmentBadge,
  HeaderImage,
  CloseButton,
  Overlay,
  HeaderContainer,
  Content,
  DepartmentName,
  DepartmentCode,
  ProjectName,
} from "./Header.Styles";

type Props = {
  departmentName?: string;
  departmentCode?: string;
  onClose: () => void;
  valueProgressRing: number;
};

export default function Header({
  departmentName,
  departmentCode,
  onClose,
  valueProgressRing,
}: Props) {
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const subtitleRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useHeaderAnimation({
    refs: {
      headerRef,
      imageRef,
      subtitleRef,
      titleRef,
      badgeRef,
      closeRef,
    },
    departmentName,
  });

  return (
    <HeaderContainer ref={headerRef}>
      <HeaderImage
        ref={imageRef}
        src="https://images.pexels.com/photos/19161455/pexels-photo-19161455.jpeg"
        alt={departmentName ?? ""}
        fill
        sizes="100vw"
      />

      <Overlay />

      <ProgressRing value={valueProgressRing} />
      <CloseButton ref={closeRef} onClick={onClose}>
        <IoClose color="#F00" size={24} />
      </CloseButton>

      <Content>
        <ProjectName component="span" ref={subtitleRef}>
          PARKI TREK
        </ProjectName>

        <DepartmentName component="h1" ref={titleRef} variant="h3">
          {departmentName}
        </DepartmentName>

        <DepartmentBadge ref={badgeRef}>
          <IoLocationOutline />

          <DepartmentCode component="span">Département {departmentCode}</DepartmentCode>
        </DepartmentBadge>
      </Content>
    </HeaderContainer>
  );
}
