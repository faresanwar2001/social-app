import { NavLink, useLocation } from "react-router-dom"

export default function NavLinks() {
  // Navigation
  const pathName = useLocation()
  console.log(pathName);
  
    // Variables
    const navLinks=[
        {path:"/", title:"Home"},
        {path:"/about", title:"About"},
        {path:"/services", title:"Services"},
    ]

  return (
    <div className="flex gap-5 items-center py-5">
      {navLinks.map(({path, title})=><NavLink key={path} to={path} className={` cursor-pointer ${
            pathName.pathname === path ? "font-bold text-red-400 text-xl" : "text-slate-900 font-semibold"
          }`}>{title}</NavLink>
      )}
    </div>
  )
}