import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

type LiteralUnion<T extends U, U = string> = T | (U & {});
type UseStorageReturn = [
  result: string,
  setLocalStorage: (value: string | ((prevValue: string) => string)) => void,
];

const MMKV = new MMKVLoader().initialize();

export const useStorage = (
  key: LiteralUnion<'lastLogin'>,
  defaultValue?: string,
): UseStorageReturn => {
  const mmkvStorage = useMMKVStorage(key, MMKV, defaultValue);

  return [mmkvStorage[0], mmkvStorage[1]];
};
