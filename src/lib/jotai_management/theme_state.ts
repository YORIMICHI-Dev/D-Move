import { atom, useAtom } from 'jotai'
import { MenuTheme } from 'antd'

// Theme
// Initial value: "dark"

const themeAtom = atom<MenuTheme>("dark")

export const useTheme = () => {
    return useAtom(themeAtom)
}
