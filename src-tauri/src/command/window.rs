/// Exits the application with a status code of 0.
///
/// This command uses the `AppHandle` provided by Tauri to 
/// cleanly exit the application. It can be invoked from the
/// frontend to programmatically close the application.
#[tauri::command]
pub fn exit_app(app_handle: tauri::AppHandle) {
  app_handle.exit(0);
}