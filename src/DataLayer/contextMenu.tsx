import React from 'react'

interface ContextMenuInterface {
  menu: any[],
}

export const ContextMenu = React.createContext<ContextMenuInterface | null>(null)
export const ContextMenuProvider = ContextMenu.Provider
export const ContextMenuConsumer = ContextMenu.Consumer
