import React from 'react'
import { Modal, Button } from 'antd'

import { useVersionModal } from '@/lib/jotai_management/modal_state'

const VersionModal: React.FC = () => {
    const [isVersionModalOpen, setIsVersionModalOpen] = useVersionModal()

    const handleCancel = () => {
        setIsVersionModalOpen(false)
    }

    return (
        <>
            <Modal
                title="Version"
                open={isVersionModalOpen}
                onCancel={handleCancel}
                centered={true}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Done
                    </Button>,
                ]}>
                <p>Version 0.1.0</p>
            </Modal>
        </>
    )
}

export default VersionModal
