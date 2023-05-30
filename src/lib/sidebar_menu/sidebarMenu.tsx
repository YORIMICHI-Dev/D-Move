import {
    FileAddOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    CloseOutlined,
    FolderOpenOutlined,
    SaveOutlined,
    ImportOutlined,
    ExportOutlined,
    EditOutlined,
    GithubOutlined,
    BellFilled
    
} from '@ant-design/icons'

//
// Sub Menu
//
import type { MenuProps } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]

const openFileMenu: MenuItem = {
    label: 'Open dm file',
    key: 'open',
    icon: <FolderOpenOutlined />,
}

const saveFileMenu: MenuItem = {
    label: 'Save dm file',
    key: 'save',
    icon: <SaveOutlined />,
}

const importFileMenu: MenuItem = {
    label: 'Import image file',
    key: 'import',
    icon: <ImportOutlined />,
}

const exportFileMenu: MenuItem = {
    label: 'Export image file',
    key: 'export',
    icon: <ExportOutlined />,
}

const settingConfig: MenuItem = {
    label: 'Settings file',
    key: 'settingFile',
    icon: <EditOutlined />
}

const showVersionMenu: MenuItem = {
    label: 'Version',
    key: 'version',
    icon: <BellFilled />
}

const githubMenu: MenuItem = {
    label: 'Github',
    key: 'github',
    icon: <GithubOutlined />
}

//
// Main Menu
//
const file: MenuItem = {
    label: 'File',
    key: 'file',
    icon: <FileAddOutlined />,
    children: [openFileMenu, saveFileMenu, importFileMenu, exportFileMenu],
}

const setting: MenuItem = {
    label: 'Setting',
    key: 'setting',
    icon: <SettingOutlined />,
    children: [settingConfig],
}

const help: MenuItem = {
    label: 'Help',
    key: 'help',
    icon: <QuestionCircleOutlined />,
    children: [showVersionMenu, githubMenu],
}

const exit: MenuItem = {
    label: 'Exit',
    key: 'exit',
    icon: <CloseOutlined />,
}

export const menus = [file, setting, help, exit]
