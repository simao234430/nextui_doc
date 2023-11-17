export const H2: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <h2 className="group cursor-pointer">
      <span className="absolute left-8 hidden text-slate-400 dark:text-slate-600 lg:group-hover:inline">#</span>
      {children}
    </h2>
  )
}

export const H3: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <h3 className="group cursor-pointer">
      <span className="absolute left-8 hidden text-slate-400 dark:text-slate-600 lg:group-hover:inline">#</span>
      {children}
    </h3>
  )
}

export const H4: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <h4 className="group cursor-pointer">
      <span className="absolute left-8 hidden text-slate-400 dark:text-slate-600 lg:group-hover:inline">#</span>
      {children}
    </h4>
  )
}
