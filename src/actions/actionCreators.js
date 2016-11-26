export const searchLabel = (e) => {
  return {
    type: 'SEARCH_FOR_LABEL',
    // this is horrible, maybe a controlled component would be better
    payload: e.target.children.label.value
  }
}

export const updateLabelInput = (label) => {
  return {
    type: 'LABEL_UPDATED',
    label
  }
}

export const expandSearch = () => {
  return { type: 'UI_EXPAND_SEARCH' }
}

export const collapseSearch = () => {
  return { type: 'UI_COLLAPSE_SEARCH' }
}
