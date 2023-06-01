import { open, save } from '@tauri-apps/api/dialog';

export const importImage = async() => {
    const importImage = await open({
        title: "import",
        multiple: false,
        filters: [{
          name: 'Image',
          extensions: ['png', 'jpeg']
        }],
    })

    return importImage
}

export const exportImage = async() => {
    const saveImage = await save({
        title: "save",
        filters: [{
          name: 'Image',
          extensions: ['png', 'jpeg']
        }],
    })

    return saveImage
}
