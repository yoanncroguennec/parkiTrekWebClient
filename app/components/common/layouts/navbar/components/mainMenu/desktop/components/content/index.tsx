import { useTranslations } from "next-intl";
import { useRef, useState, useEffect } from "react";

// COMPONENTS
import AnimatedTitleMenu from "./animatedTitleMenu";
// HOOKS
import {
  MAIN_MENU_THUMBNAIL,
  useMainMenuAnimation,
} from "@/app/hooks/animations/gsap/navigations/others/useMainMenuAnimation";
// DATA
import { dataMainMenu } from "../../../data/MainMenu.data";

// STYLES
import {
  MainMenuContentContainer,
  MainMenuList,
  MainMenuLink,
  MainMenuSubtitle,
  MainMenuThumbnail,
  MainMenuSlider,
  MainMenuSlide,
  MainMenuImage,
} from "./Content.Styles";

export default function Content() {
  const t = useTranslations("Menu");

  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(true);

  const [modal, setModal] = useState({
    active: false,
    index: 0,
  });

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();

    window.addEventListener("resize", checkDesktop);

    return () => {
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

  useMainMenuAnimation({
    containerRef,
    thumbnailRef,
    sliderRef,
    isDesktop,
    modal,
    itemCount: dataMainMenu.length,
  });

  if (!isDesktop) return null;

  return (
    <MainMenuContentContainer
      ref={containerRef}
      maxWidth="lg"
      onMouseLeave={() => setModal({ active: false, index: 0 })}
    >
      <MainMenuList>
        {dataMainMenu.map((menuItem, index) => (
          <MainMenuLink
            key={menuItem.id}
            href={menuItem.url}
            isLast={index === dataMainMenu.length - 1}
            onMouseEnter={() => setModal({ active: true, index })}
          >
            <AnimatedTitleMenu title={t(`${menuItem.id}.title`)} />

            <MainMenuSubtitle variant="h6">{t(`${menuItem.id}.subtitle`)}</MainMenuSubtitle>
          </MainMenuLink>
        ))}
      </MainMenuList>

      <MainMenuThumbnail ref={thumbnailRef}>
        <MainMenuSlider
          ref={sliderRef}
          sx={{
            height: MAIN_MENU_THUMBNAIL.height * dataMainMenu.length,
          }}
        >
          {dataMainMenu.map((menuItem, index) => (
            <MainMenuSlide
              key={menuItem.id}
              sx={{
                height: MAIN_MENU_THUMBNAIL.height,
                top: index * MAIN_MENU_THUMBNAIL.height,
              }}
            >
              <MainMenuImage
                src={t(`${menuItem.id}.img`)}
                alt={t(`${menuItem.id}.alt`) || t(`${menuItem.id}.title`)}
                width={MAIN_MENU_THUMBNAIL.width}
                height={MAIN_MENU_THUMBNAIL.height}
              />
            </MainMenuSlide>
          ))}
        </MainMenuSlider>
      </MainMenuThumbnail>
    </MainMenuContentContainer>
  );
}
