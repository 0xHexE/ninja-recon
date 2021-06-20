import { atom, selector } from 'recoil';

export const breadcrumbState = atom<{ title: string; link: string }[]>({
  key: 'breadcrumb',
  default: [],
});

export const breadcrumbMappedState = selector({
  key: 'processedBreadcrumb',
  get: ({ get }) => {
    const breadcrumb = get(breadcrumbState);

    return [
      {
        title: 'Ninja Recon',
        link: '/',
      },
      ...breadcrumb,
    ];
  },
});
