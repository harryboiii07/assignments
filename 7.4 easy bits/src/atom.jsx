import { atom, selector } from "recoil";

export const networkAtom = atom({
  key : "NetworkAtom",
  default : 104
});

export const jobsAtom = atom({
  key : "JobsAtom",
  default : 0
});

export const messagesAtom = atom({
  key : "MessagesAtom",
  default : 0
});

export const notificationAtom = atom({
  key : "NotificationAtom",
  default : 12
});

export const totalselector = selector({
  key : "totalselector",
  get : ({get})=>{
    const networkcount = get(networkAtom);
    const jobscount = get(networkAtom);
    const messagescount = get(networkAtom);
    const notificationcount = get(networkAtom);

    return networkcount + jobscount + messagescount + notificationcount;
  }
})