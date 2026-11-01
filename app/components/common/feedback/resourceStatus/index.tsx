"use client";

import {
  GPXError,
  GPXErrorText,
  GPXErrorTitle,
  GPXLoading,
  GPXLoadingSpinner,
  GPXLoadingText,
} from "./ResourceStatus.Styles";

type Props = {
  loading: boolean;
  error: string | null;
  empty: boolean;
  loadingMessage?: string;
  errorTitle?: string;
  emptyTitle?: string;
  emptyMessage?: string;
};

export default function ResourceStatus({
  loading,
  error,
  empty,
  loadingMessage = "Chargement…",
  errorTitle = "Impossible de charger la ressource",
  emptyTitle = "Ressource introuvable",
  emptyMessage = "Aucune donnée n'a été trouvée.",
}: Props) {
  if (loading) {
    return (
      <GPXLoading>
        <GPXLoadingSpinner />
        <GPXLoadingText>{loadingMessage}</GPXLoadingText>
      </GPXLoading>
    );
  }

  if (error || empty) {
    return (
      <GPXError>
        <GPXErrorTitle>{error ? errorTitle : emptyTitle}</GPXErrorTitle>

        <GPXErrorText>{error || emptyMessage}</GPXErrorText>
      </GPXError>
    );
  }

  return null;
}
