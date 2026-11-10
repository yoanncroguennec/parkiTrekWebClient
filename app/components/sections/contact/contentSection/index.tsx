// GOOD
// LAYOUTS
import { ContainerApp, SplitLayout } from "@/app/components/common/layouts";
// SECTIONS
import { HeaderSection, FormSection, FooterSection } from "./sections";
// TYPES
import { ContactRefs } from "../types/contactSection.types";
// STYLES
import { ContentContainer } from "./ContentSection.Styles";

type ContentSectionProps = ContactRefs;

export default function ContentSection({
  contentRef,
  titleRef,
  subtitleRef,
  formItemsRef,
  dividerRef,
  footerRef,
}: ContentSectionProps) {
  return (
    <ContainerApp ref={contentRef} displayFooter={false}>
      <ContentContainer>
        <SplitLayout
          left={
            <>
              <HeaderSection titleRef={titleRef} subtitleRef={subtitleRef} />

              <FormSection formItemsRef={formItemsRef} />

              <FooterSection dividerRef={dividerRef} footerRef={footerRef} />
            </>
          }
          right={null}
        />
      </ContentContainer>
    </ContainerApp>
  );
}
