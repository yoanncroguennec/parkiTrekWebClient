// ICONS
import {
    type IconType,
    MdOutlineSettings,
    MdOutlineShoppingCart,
    RxHamburgerMenu,
} from "@/app/utils/constants/icons";

export interface NavbarAction {
  id: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
}

interface CreateNavbarActionsProps {
  locale: string;
  onAccessibilityOpen: () => void;
  onMenuOpen: () => void;
}

export function createNavbarActions({
  locale,
  onAccessibilityOpen,
  onMenuOpen,
}: CreateNavbarActionsProps): NavbarAction[] {
  return [
    {
      id: "shop",
      icon: MdOutlineShoppingCart,
      href: `/${locale}/shop`,
    },
    {
      id: "settings",
      icon: MdOutlineSettings,
      onClick: onAccessibilityOpen,
    },
    {
      id: "menu",
      icon: RxHamburgerMenu,
      onClick: onMenuOpen,
    },
  ];
}
