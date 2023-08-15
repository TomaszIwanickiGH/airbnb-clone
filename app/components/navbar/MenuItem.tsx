'use client'

interface MenuItemProps {
  onClick: () => void
  label: string
  username?: any
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, username }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
      <span className="text-rose-500">{username}</span>
    </div>
  )
}

export default MenuItem
