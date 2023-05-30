import { atom, useAtom } from 'jotai'

// Exit Modal
// Initial value: false
const exitModalAtom = atom<boolean>(false)

export const useExitModal = () => {
    return useAtom(exitModalAtom)
}

// Version Modal
// Initial value: false
const versionModalAtom = atom<boolean>(false)

export const useVersionModal = () => {
    return useAtom(versionModalAtom)
}
