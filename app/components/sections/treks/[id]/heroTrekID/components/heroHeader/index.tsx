"use client"

import { useMediaQuery, useTheme } from "@mui/material";
// DATAS
import { Area } from "@/app/utils/constants/data/treks/map/data";
// HELPERS
import { numberToWords } from "@/app/utils/helpers";
// ICONS
import { FaHeart } from '@/app/utils/constants/icons'
// STYLES
import { IntroBadge, IntroTitle, IntroTitleHighlight } from './HeroHeader.Styles'

type Props = {
  selectedArea: Area;
};

export default function HeroHeader({ selectedArea }: Props) {
      const theme = useTheme();
      const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    
  return (
    <>
               <IntroBadge
                 icon={<FaHeart size={isDesktop ? 24 : 20} />}
                 label={`${isDesktop ? "PARKI TREK • SENSIBILISATION À LA MALADIE DE PARKINSON" : "LUTTER CONTRE LA PARKINSON"}`}
               />
         
               <IntroTitle component="h1">
                 {numberToWords(selectedArea.days ?? 0, {
                   capitalize: true,
                 })}{" "}
                 jours.
                 <br />
                 <IntroTitleHighlight component="span">
                   {selectedArea.km ?? 0} kilomètres.
                 </IntroTitleHighlight>
                 <br />
                 Une victoire.
               </IntroTitle>   
    </>
  )
}
