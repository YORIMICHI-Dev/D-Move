'use client'

import { Layout, ConfigProvider, theme } from 'antd'
const { Content } = Layout
const { defaultAlgorithm, darkAlgorithm} = theme

import SideBarMenu from '@/components/menu/SideBarMenu'
import HeaderMenu from '@/components/menu/HeaderMenu'
import { Modals } from '@/components/modal/Modals'
import { useTheme } from '@/lib/jotai_management/theme_state'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body className="">
                <ConfigProvider 
                    theme={{ token: { colorPrimary: '#ff4d4f' } }}>
                    <Layout style={{ minHeight: '100vh' }}>
                        <SideBarMenu />
                        <Layout>
                            <HeaderMenu />
                            <Content style={{ margin: '0 16px' }}>
                                <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
                            </Content>
                        </Layout>
                    </Layout>
                    {Modals.map((ModalCompoenent, id) => {
                        return (
                            <div key={id}>
                                <ModalCompoenent />
                            </div>
                        )
                    })}
                </ConfigProvider>
            </body>
        </html>
    )
}
