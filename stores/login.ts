import { t, Instance } from "mobx-state-tree";
import { useMemo } from "react";

export const LoginStore = t
  .model({
    isPasswordVisible: t.boolean,
    userInfo: t.model({
      email: t.string,
      password: t.string,
    }),
    error: t.string,
  })
  .actions((self) => ({
    setPasswordVisible(value: boolean) {
      self.isPasswordVisible = value;
    },
    setUserInfo(value: { email: string; password: string }) {
      self.userInfo = value;
    },
    setError(value: string) {
      self.error = value;
    },
  }));

let _store: Instance<typeof LoginStore>;
export const useLoginStore = () => {
  const store = useMemo(() => {
    if (!_store) {
      _store = LoginStore.create({
        isPasswordVisible: false,
        userInfo: {
          email: "",
          password: "",
        },
        error: "",
      });
    }
    return _store;
  }, []);
  return store;
};
