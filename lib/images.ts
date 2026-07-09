export function photoUrl(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}

export function avatarUrl(id: number) {
  return `https://i.pravatar.cc/300?img=${id}`;
}
