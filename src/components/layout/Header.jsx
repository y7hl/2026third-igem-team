import { useEffect, useRef } from "react";
import '../../styles/Header.css';

const Header = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const headerRef = useRef(null);
  const currentPath = window.location.pathname;

  const navItems = [
    { name: 'Home', path: 'home.html' },
    { name: 'HP', path: 'hp.html' },
    { name: 'Model', path: 'model.html' },
    { name: 'Projects', path: 'projects.html' },
    { name: 'Team', path: 'team.html' },
    { name: 'Wetlab', path: 'wetlab.html' },
  ];

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      header.classList.remove("hide");
    }
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    const header = headerRef.current;

    if (header) {
      header.classList.add("hide");
    }

    setTimeout(() => {
      window.location.href = `${baseUrl}${path}`;
    }, 400);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">

        /* logo */
        <div className="logo">
          <span>iGEM 2026</span>
          {/* 
          <img src="/logo.png" alt="logo" />
          */}
        </div>

        {/* ===== 导航 ===== */}
        <nav className="nav">
          <ul className="nav-list">
             {navItems.map((item) => {
              const isActive = currentPath.includes(item.path);

              return (
                <li key={item.name}>
                  <a
                    href={`${baseUrl}${item.path}`}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={(e) => handleClick(e, item.path)}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;