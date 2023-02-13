type FilesContent = {
  fileTitle: string
  content: string
}

export interface MainContentProps {
  openedFiles: string[]
  noFilesSelectedState: string
  filesContent: FilesContent[]
  fileOnScreen: string
}
