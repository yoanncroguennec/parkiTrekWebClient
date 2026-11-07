// ACCESSIBILITY
import useIdle from "./accessibility/idle/useIdle";
import { default as useIdleTimeout } from "./accessibility/idle/useIdleTimeout";

// ANIMATIONS
import { useAnimationCursor } from "./animations/cursor/useAnimationCursor";
import { useFadeInUpSequence } from "./animations/gsap/fadeInUp/fadeInUpSequence/useFadeInUpSequence";
import { useMenuAnimation } from "./animations/gsap/navigations/useMenuAnimation";
import { useTimelineAnimation } from "./animations/gsap/timeline/useTimelineAnimation";
import { useHeaderAnimation } from "./animations/gsap/headers/useHeaderAnimation";
import { useJourneyHighlightsAnimation } from "./animations/gsap/journey/useJourneyHighlightsAnimation";
import { useJournalButtonAnimation } from "./animations/gsap/ui/buttons/useJournalButtonAnimation";
import { useProgressRingAnimation } from "./animations/gsap/ui/progress/useProgressRingAnimation";
import { useMainMenuMobileAnimation } from "./animations/gsap/navigations/useMainMenuMobileAnimation";
import useFooterScroll from "./animations/gsap/scroll/useFooterScroll";
import useTrekAnimation from "./animations/gsap/trek/useTrekAnimation";
import { useLivePlatformAnimation } from "./animations/gsap/text/useLivePlatformAnimation";
import { useCloseButtonAnimation } from "./animations/gsap/ui/buttons/useCloseButtonAnimation";
import { useMainMenuMobileContentAnimation } from "./animations/gsap/navigations/useMainMenuMobileContentAnimation";
import { useCircleReveal } from "./animations/gsap/transitions/reveal/useCircleReveal";
import { useFadeInUp } from "./animations/gsap/fadeInUp/useFadeInUp";
import { useCounterAnimation } from "./animations/gsap/counter/useCounterAnimation";
import { useSlideInRotate } from "./animations/gsap/sideInRotate/useSlideInRotate";
import { useSplitText } from "./animations/gsap/text/splitText/useSplitText";

// AUDIOS
import useAudioPlayer from "./audios/useAudioPlayer";

// DATETIME
import { useLocalTime } from "./datetime/useLocalTime";

// NAVIGATIONS

// PAGES
import { useExplorerScrollAnimation } from "./animations/gsap/pages/trek-dashboard/useExplorerScrollAnimation";
import { useTrekJournalTransition } from "./animations/gsap/pages/trek-dashboard/useTrekJournalTransition";

export {
  // ACCESSIBILITY
  useIdle,
  useIdleTimeout,

  // ANIMATIONS
  useAnimationCursor,
  useFadeInUpSequence,
  useMenuAnimation,
  useTimelineAnimation,
  useHeaderAnimation,
  useJourneyHighlightsAnimation,
  useJournalButtonAnimation,
  useProgressRingAnimation,
  useMainMenuMobileAnimation,
  useFooterScroll,
  useTrekAnimation,
  useLivePlatformAnimation,
  useCloseButtonAnimation,
  useMainMenuMobileContentAnimation,
  useCircleReveal,
  useCounterAnimation,
  useFadeInUp,
  useSlideInRotate,
  useSplitText,

  // AUDIOS
  useAudioPlayer,

  // DATETIME
  useLocalTime,

  // NAVIGATIONS

  // PAGES
  useExplorerScrollAnimation,
  useTrekJournalTransition,

};
