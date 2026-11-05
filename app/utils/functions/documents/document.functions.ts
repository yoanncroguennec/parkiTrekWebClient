// =======================
// 📦 Fonctions de gestion des documents (Admin)
// =======================
import { DropResult } from "@hello-pangea/dnd";

// =======================
// 🔑 Constante principale
// =======================
export const STORAGE_KEY = "folder_tree";

// =======================
// 📁 Types
// =======================
export interface FileItem {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileItem[];
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

// =======================
// 🌳 Mise à jour de l'arborescence
// =======================
export function updateTree(
  tree: FileItem[],
  parentId: string | null,
  newItems: FileItem[]
): FileItem[] {
  if (parentId === null) {
    return newItems;
  }

  return tree.map((item) => {
    if (item.id === parentId && item.type === "folder") {
      return {
        ...item,
        children: newItems,
      };
    }

    if (item.type === "folder" && item.children) {
      return {
        ...item,
        children: updateTree(item.children, parentId, newItems),
      };
    }

    return item;
  });
}

// =======================
// 🔄 Drag & Drop
// =======================
export function handleDragEnd(
  result: DropResult,
  currentItems: FileItem[],
  setCurrentItems: SetState<FileItem[]>,
  path: FileItem[],
  rootItemsState: FileItem[],
  setRootItems: SetState<FileItem[]>,
  updateTree: (tree: FileItem[], parentId: string | null, newItems: FileItem[]) => FileItem[]
) {
  if (!result.destination) return;

  const newItems = Array.from(currentItems);
  const [moved] = newItems.splice(result.source.index, 1);
  newItems.splice(result.destination.index, 0, moved);
  setCurrentItems(newItems);

  const parentId = path.length > 0 ? path[path.length - 1].id : null;
  const updatedTree = updateTree(rootItemsState, parentId, newItems);
  setRootItems(updatedTree);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTree));
}

// =======================
// 📂 Création de dossiers et fichiers
// =======================
export function createFolder(
  name: string,
  currentItems: FileItem[],
  setCurrentItems: SetState<FileItem[]>,
  path: FileItem[],
  rootItemsState: FileItem[],
  setRootItems: SetState<FileItem[]>,
  updateTree: (tree: FileItem[], parentId: string | null, newItems: FileItem[]) => FileItem[]
) {
  const newFolder: FileItem = {
    id: Date.now().toString(),
    name,
    type: "folder",
    children: [],
  };
  const updatedItems = [...currentItems, newFolder];
  setCurrentItems(updatedItems);

  const parentId = path.length > 0 ? path[path.length - 1].id : null;
  const updatedTree = updateTree(rootItemsState, parentId, updatedItems);
  setRootItems(updatedTree);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTree));
}

export function createFile(
  name: string,
  currentItems: FileItem[],
  setCurrentItems: SetState<FileItem[]>,
  path: FileItem[],
  rootItemsState: FileItem[],
  setRootItems: SetState<FileItem[]>,
  updateTree: (tree: FileItem[], parentId: string | null, newItems: FileItem[]) => FileItem[]
) {
  const newFile: FileItem = { id: Date.now().toString(), name, type: "file" };
  const updatedItems = [...currentItems, newFile];
  setCurrentItems(updatedItems);

  const parentId = path.length > 0 ? path[path.length - 1].id : null;
  const updatedTree = updateTree(rootItemsState, parentId, updatedItems);
  setRootItems(updatedTree);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTree));
}

// =======================
// ✏️ Renommer
// =======================
export function renameItem(
  id: string,
  newName: string,
  rootItemsState: FileItem[],
  setRootItems: SetState<FileItem[]>,
  currentItems: FileItem[],
  setCurrentItems: SetState<FileItem[]>
) {
  const renameRecursive = (items: FileItem[]): FileItem[] =>
    items.map((item) => {
      if (item.id === id) return { ...item, name: newName };
      if (item.type === "folder" && item.children)
        return { ...item, children: renameRecursive(item.children) };
      return item;
    });

  const updatedTree = renameRecursive(rootItemsState);
  setRootItems(updatedTree);

  const updatedCurrent = currentItems.map((item) =>
    item.id === id ? { ...item, name: newName } : item
  );
  setCurrentItems(updatedCurrent);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTree));
}

// =======================
// 🗑️ Supprimer
// =======================
export function deleteItem(
  id: string,
  rootItemsState: FileItem[],
  setRootItems: SetState<FileItem[]>,
  currentItems: FileItem[],
  setCurrentItems: SetState<FileItem[]>
) {
  const deleteRecursive = (items: FileItem[]): FileItem[] =>
    items.filter((item) => {
      if (item.id === id) return false;
      if (item.type === "folder" && item.children) item.children = deleteRecursive(item.children);
      return true;
    });

  const updatedTree = deleteRecursive(rootItemsState);
  setRootItems(updatedTree);

  const updatedCurrent = currentItems.filter((item) => item.id !== id);
  setCurrentItems(updatedCurrent);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTree));
}

// =======================
// 🖼️ Icônes
// =======================
export function getFolderIcon(name: string) {
  const lower = name.toLowerCase();
  if (["musique", "musiques", "music"].includes(lower))
    return "/assets/icons/iconsWindows/folders/iconFolderMusic_1.webp";
  if (["video", "videos"].includes(lower))
    return "/assets/icons/iconsWindows/folders/iconFolderVideos_1.webp";
  return "/assets/icons/iconsWindows/folders/iconFolder_1.webp";
}

export function getFileIcon(name: string) {
  const ext = name.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "doc":
    case "docx":
      return "/assets/icons/iconsWindows/files/iconDoc_1.webp";
    case "png":
    case "jpg":
    case "jpeg":
    case "webp":
      return "/assets/icons/iconsWindows/files/iconImg_1.webp";
    case "mp4":
    case "mkv":
    case "avi":
      return "/assets/icons/iconsWindows/files/iconVideo_1.webp";
    case "mp3":
    case "wav":
      return "/assets/icons/iconsWindows/files/iconMusic_1.webp";
    case "xlsx":
      return "/assets/icons/iconsWindows/files/iconExcel_1.webp";
    case "ppt":
      return "/assets/icons/iconsWindows/files/iconPowerPoint_1.webp";
    default:
      return "/assets/icons/iconsWindows/files/iconOtherDoc_1.webp";
  }
}
