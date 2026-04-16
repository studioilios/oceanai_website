export type ImageKey =
  | "bloodCrisisHero"
  | "healthcareRural"
  | "medicalAiBg"
  | "insuranceAccess"
  | "techMission"
  | "universalHealth"
  | "doctor"
  | "hospital"
  | "patientCare"
  | "priya_sharma"
  | "rajesh_sharma"|"meena_patel"
  | "modernHospital"
  | "medicalProfessional"
  | "patientCareDetail"
  | "medicalTech"
  | "medicalProcedure"
  | "wearableTech";

const IMAGE_REGISTRY: Record<ImageKey, string> = {
  bloodCrisisHero:
    "https://images.unsplash.com/photo-1771946309002-80d0d41affa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  healthcareRural:
    "https://images.unsplash.com/photo-1698465281093-9f09159733b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  medicalAiBg:
    "https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  insuranceAccess:
    "https://images.unsplash.com/photo-1708685627299-81bfac32402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  techMission:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  universalHealth:
    "https://images.unsplash.com/photo-1629019324504-2e1fdf96e5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  doctor:
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  hospital:
    "https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  patientCare:
    "https://images.unsplash.com/photo-1606166155766-87872211cd0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  priya_sharma:
    "https://images.unsplash.com/photo-1726310724280-0a4aa087032d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZGlhbiUyMHdvbWFuJTIwc21pbGluZyUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzc0NDQxNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  rajesh_sharma:
    "https://images.unsplash.com/photo-1716471081169-cb8528a395d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZGlhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHRlY2h8ZW58MXx8fHwxNzc0NDQxNDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",

  meena_patel:
    "https://images.unsplash.com/photo-1653379671088-c377dd7f7830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZGlhbiUyMHdvbWFuJTIwY29sbGVnZSUyMHN0dWRlbnR8ZW58MXx8fHwxNzc0NDQxNDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
modernHospital: "https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  medicalProfessional: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  patientCareDetail: "https://images.unsplash.com/photo-1606166155766-87872211cd0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  medicalTech: "https://images.unsplash.com/photo-1766299892549-b56b257d1ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  medicalProcedure: "https://images.unsplash.com/photo-1770836037423-641b7c358bec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  wearableTech: "https://images.unsplash.com/photo-1758577515333-e71b713059f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",


};

const cache = new Map<ImageKey, string>();

export const getCachedImage = (key: ImageKey): string => {
  if (cache.has(key)) {
    return cache.get(key)!;
  }

  const url = IMAGE_REGISTRY[key];
  if (!url) {
    console.warn(`Image key "${key}" not found in registry.`);
    return "";
  }

  cache.set(key, url);
  return url;
};
