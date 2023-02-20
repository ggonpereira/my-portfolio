export interface ContentHeaderProps {
  openedFiles: string[]
  handleSetFileOnScreen: React.Dispatch<React.SetStateAction<string>>
  handleCloseFile: (fileName: string, e: React.MouseEvent) => void
}
