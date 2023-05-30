import { Switch } from 'antd'
import { useTheme } from '@/lib/jotai_management/theme_state'

const ColorSwitch = () => {
    const [theme, setTheme] = useTheme()

    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light')
    }

    return (
        <header>
            <div className='flex py-2 justify-end'>
                <Switch
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"/>                         
            </div>
        </header>

    );
}

export default ColorSwitch;