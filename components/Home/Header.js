import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import links from "../../data/linkData";
import useSticky from "../../hooks/useSticky";
import Sidebar from "../common/SideBar";

const Header = () => {
  // Sticky header hook
  const { headerSticky } = useSticky();

  // Sidebar state
  const [show, setShow] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);

  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 1200px)').matches;

  const handleClose = () => {
    console.log('Header: Closing mobile sidebar');
    setShow(false);
    // Remove body class to enable scrolling
    if (typeof document !== 'undefined') {
      document.body.classList.remove('mobile-menu-open');
    }
  };
  
  const handleShow = () => {
    console.log('Header: Opening mobile sidebar');
    setShow(true);
    // Add body class to disable scrolling
    if (typeof document !== 'undefined') {
      document.body.classList.add('mobile-menu-open');
    }
  };

  const handleTopLevelClick = (e, link) => {
    if (isDesktop && link.submenu) {
      e.preventDefault();
      setOpenMenuId(prev => (prev === link.id ? null : link.id));
    }
  };

  // Clean up body class on unmount
  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('mobile-menu-open');
      }
    };
  }, []);

  // Build Home-specific nav: move Gallery and Contact Us under More
  const homeLinks = useMemo(() => {
    // shallow clone + clone submenus to avoid mutating imported links
    const cloned = links.map(l => ({ ...l, submenu: l.submenu ? [...l.submenu] : undefined }));

    const more = cloned.find(l => l.name === 'More');
    if (!more) return cloned;

    const combined = [...(more.submenu || [])];



    // Move Principal's Message from About to More
    const about = cloned.find(l => l.name === 'About');
    if (about) {
      // Extract Principal's Message to move to More
      const principalsMessage = about.submenu ? about.submenu.find(sub => sub.name === "Principal's Message") : null;
      if (principalsMessage && !combined.some(x => x.name === principalsMessage.name)) {
        combined.push({ ...principalsMessage, id: 'more-principal-message' });
      }
      // Remove submenu to make About a direct link
      about.submenu = undefined;
      about.url = '/about';
    }

    const gallery = cloned.find(l => l.name === 'Gallery');
    if (gallery) {
      if (Array.isArray(gallery.submenu) && gallery.submenu.length) {
        gallery.submenu.forEach(item => {
          if (!combined.some(x => x.name === item.name)) {
            combined.push({ ...item, id: `more-${item.id ?? item.name}` });
          }
        });
      } else {
        if (!combined.some(x => x.name === 'Gallery')) {
          combined.push({ id: 'more-gallery', url: gallery.url || '/gallery', name: 'Gallery' });
        }
      }
    }

    const contact = cloned.find(l => l.name === 'Contact Us');
    if (contact && !combined.some(x => x.name === contact.name)) {
      combined.push({ id: 'more-contact', url: contact.url, name: contact.name });
    }

    const transformed = cloned
      .map(l => (l.name === 'More' ? { ...l, submenu: combined } : l))
      .filter(l => l.name !== 'Gallery' && l.name !== 'Contact Us' && l.name !== 'Academics');

    return transformed;
  }, []);

  return (
    <>
      <header>
       <div className="header__area">
          {/* Header Bottom */}
          <div
            className={headerSticky ? "header__bottom header__sticky" : "header__bottom"}
            id="header-sticky"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', position: 'relative' }}
          >
            <div className="header-left" style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto', gap: '15px' }}>
              {/* Logo */}
              <div className="logo logo-container" style={{ paddingLeft: 0, width: '60px', height: '60px' }}>
                <Link href="/">
                  <a className="logo-image-link" style={{ display: 'inline-block', width: '100%', height: '100%' }}>
                    <Image src="/assets/img/logo/logo.png" alt="Logo" width={60} height={60} className="logo-image" />
                  </a>
                </Link>
              </div>
              {/* School Name */}
              <div className="school-name" style={{ fontWeight: '700', color: '#1a237e', whiteSpace: 'nowrap', paddingRight: '10px', marginLeft: '10px', lineHeight: '60px' }}>
                <span className="d-none d-lg-inline" style={{ fontSize: '14px' }}>VISIONARY INSTITUTE OF SCIENCE, TECHNOLOGY & MATHEMATICS ACADEMY</span>
                <span className="d-lg-none" style={{ fontSize: '10px', textTransform: 'uppercase' }}>VISTE SNR & JNR ACADEMY</span>
              </div>
            </div>
            <div className="container" style={{ paddingRight: '4px', marginRight: '4px', flex: '1 1 auto' }}>
              <div className="row align-items-center">
                {/* Navigation Menu */}
                <div className="col-xxl-10 col-xl-10 col-lg-10 d-none d-lg-block">
                  <div className="main-menu nav-right" style={{ paddingRight: '10em' }}>
                    <nav id="mobile-menu">
                      <ul style={{ display: 'flex', gap: '15px', margin: 0, padding: 0 }}>
                        {homeLinks.map((link, idx) => (
                          <li
                            key={`menu-${link.id}-${idx}`}
                            className={link.submenu ? `has-dropdown ${openMenuId === link.id ? 'open' : ''} ${['About', 'Academics'].includes(link.name) ? 'regular-dropdown' : ''}` : ""}
                            onMouseEnter={() => { if (isDesktop && link.submenu) setOpenMenuId(link.id); }}
                            onMouseLeave={() => { if (isDesktop && link.submenu) setOpenMenuId(null); }}
                            style={{ listStyle: 'none' }}
                          >
                            <Link href={link.url} passHref>
                              <a onClick={(e) => handleTopLevelClick(e, link)} style={{ padding: '8px 12px', display: 'inline-block' }}>{link.name}</a>
                            </Link>
                            {link.submenu && (
                              <ul className="submenu">
                                {link.submenu.map((sub, sIdx) => (
                                  <li key={`submenu-${link.id ?? idx}-${sub.id ?? sIdx}`}>
                                    <Link href={sub.url} passHref>
                                      <a>{sub.name}</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile/Responsive Sidebar Navigation Button - Outside Container */}
        <button
          type="button"
          onClick={handleShow}
          className="mobile-sidebar-nav-btn d-lg-none"
          aria-label="Open navigation sidebar"
          style={{
            position: 'fixed',
            top: 'calc(15px - 0.5em)',
            right: '1.2em',
            zIndex: 1000,
            width: '45px',
            height: '45px',
            borderRadius: '8px',
            backgroundColor: '#1a237e',
            border: '2px solid #fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(26, 35, 126, 0.4)',
            transition: 'all 0.3s ease'
          }}
        >
          <i className="fas fa-bars" style={{color: 'white', fontSize: '18px'}}></i>
        </button>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
