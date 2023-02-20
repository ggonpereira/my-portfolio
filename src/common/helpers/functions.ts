export const openPage = (url: string) => {
  window.open(url, '_blank')
}

const clickElementOnEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
  if (e.key === 'Enter') e.currentTarget.click()
}

export const makeElementTabSelectable = {
  tabIndex: 0,
  onKeyUp: clickElementOnEnter,
}
