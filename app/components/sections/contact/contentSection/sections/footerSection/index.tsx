// GOOD
"use client";

import Link from "next/link";
import type { RefObject } from "react";
// ICONS
import { GoArrowUpRight } from "@/app/utils/constants/icons";
// DATAS
import { footerContent } from "./data/dataContact";
// STYLES
import {
  Divider,
  DividerContainer,
  FooterColumn,
  FooterGrid,
  ColumnTitle,
  FooterLink,
  FooterLinkLabel,
  FooterLinkIcon,
} from "./FooterSection.Styles";

type FooterSectionProps = {
  dividerRef: RefObject<HTMLDivElement | null>;
  footerRef: RefObject<HTMLDivElement | null>;
};

export default function FooterSection({ dividerRef, footerRef }: FooterSectionProps) {
  return (
    <>
      <DividerContainer ref={dividerRef}>
        <Divider />
      </DividerContainer>

      <FooterGrid ref={footerRef}>
        {footerContent.map((data, index) => (
          <FooterColumn key={index} $isFirst={index === 0}>
            <ColumnTitle component="h2">{data.title}</ColumnTitle>

            {data.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <FooterLink>
                  <FooterLinkLabel component="span" $isSocial={Boolean(data.isSocial)}>
                    {item.label}
                  </FooterLinkLabel>

                  {data.isSocial && (
                    <FooterLinkIcon>
                      <GoArrowUpRight size={18} />
                    </FooterLinkIcon>
                  )}
                </FooterLink>
              </Link>
            ))}
          </FooterColumn>
        ))}
      </FooterGrid>
    </>
  );
}
