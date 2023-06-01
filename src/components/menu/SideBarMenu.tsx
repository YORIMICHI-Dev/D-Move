'use client'

import React, { useState } from 'react'

import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
const { Sider } = Layout

import { useExitModal, useVersionModal } from '@/lib/jotai_management/modal_state'
import { useTheme } from '@/lib/jotai_management/theme_state'
import { menus } from '@/lib/sidebar_menu/sidebarMenu'
import { importImage, exportImage } from '@/lib/tauri_function/dialog_functions'
import { openGithub } from '@/lib/tauri_function/shell_functions'

const SideBarMenu = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [current, setCurrent] = useState('')
    const [isOpenExitModal, setIsOpenExitModal] = useExitModal()
    const [isOpenVersionModal, setIsOpenVersionModal] = useVersionModal()
    const [theme, setTheme] = useTheme()


    const onClick: MenuProps['onClick'] = (e) => {
        menuFunc(e.key)
        setCurrent(e.key)
    }

    const menuFunc = async (currentKey: React.Key) => {
        switch (currentKey) {
            // File operation
            case 'open':
                
                break

            case 'save':

                break

            case 'import':
                const importedImage = await importImage()
                if (importedImage) {
                    console.log(importedImage)
                }
                break

            case 'export':
                const exportedImage = await exportImage()
                if (exportImage) {
                    console.log(exportImage)
                }
                break

            // Setting operation
            case 'setting':
                break

            // Help operation
            case 'version':
                setIsOpenVersionModal(true)
                console.log(currentKey)
                break

            case 'github':
                openGithub()
                break

            // Exit operation
            case 'exit':
                setIsOpenExitModal(true)
                break

            default:
                console.log(currentKey)
        }
        setCurrent("")
    }

    return (
        <Sider collapsible collapsed={collapsed} theme={theme} onCollapse={(value) => setCollapsed(value)} width={180}>
            <Menu
                theme={theme}
                onClick={onClick}
                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
                items={menus}
            />
        </Sider>
    )
}

export default SideBarMenu
