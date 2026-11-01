"use client";

type ResourceNotFoundProps = {
  message?: string;
};

export default function ResourceNotFound({
  message = "Ressource introuvable",
}: ResourceNotFoundProps) {
  return <div>{message}</div>;
}
