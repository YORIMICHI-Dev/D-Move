#[tauri::command]
async fn read_image(path: String) -> Result<Vec<u8>, String> {
  tauri::api::fs::read_binary_file(path).map_err(|err| err.to_string())
}