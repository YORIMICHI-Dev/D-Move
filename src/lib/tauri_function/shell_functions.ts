import { open } from "@tauri-apps/api/shell"

export const openGithub = async() => {
    await open(process.env.NEXT_PUBLIC_GITHUB_URL)
}