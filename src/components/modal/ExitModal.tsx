import React from 'react'
import { Modal } from 'antd'
import { invoke } from '@tauri-apps/api/tauri'

import { useExitModal } from '@/lib/jotai_management/modal_state'

const ExitModal: React.FC = () => {
    const [isOpenExitModal, setIsOpenExitModal] = useExitModal()

    const handleOk = () => {
        invoke('exit_app')
            .then(() => console.log('App closed'))
            .catch((error) => console.error('Error:', error))
        setIsOpenExitModal(false)
    }

    const handleCancel = () => {
        setIsOpenExitModal(false)
    }

    return (
        <>
            <Modal
                title="Basic Modal"
                open={isOpenExitModal}
                onOk={handleOk}
                okText={'Fin'}
                onCancel={handleCancel}
                okType={'primary'}
                cancelText={'Cancel'}
                centered={true}>
                <p>Close D-Move.</p>
            </Modal>
        </>
    )
}

export default ExitModal
