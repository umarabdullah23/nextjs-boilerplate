import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-auth-persist',
  storage: typeof window === 'undefined' ? undefined : localStorage,
});

export const authState = atom({
  key: 'authState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
