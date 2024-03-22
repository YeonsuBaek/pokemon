const getIdFromUrl = (url: string) => {
  return Number(
    url
      .split('/')
      .filter((part: string) => !!part)
      .pop()
  )
}

export { getIdFromUrl }
