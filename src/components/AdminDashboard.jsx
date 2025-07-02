import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../firebase';
import { FaTachometerAlt, FaUserFriends, FaClipboardList, FaCog, FaSignOutAlt, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const sections = [
  { key: 'requests', label: 'User Requests', icon: <FaClipboardList style={{marginRight:12}} /> },
  { key: 'users', label: 'User Management', icon: <FaUserFriends style={{marginRight:12}} /> },
  { key: 'settings', label: 'Settings', icon: <FaCog style={{marginRight:12}} /> },
];

const MOBILE_WIDTH = 900;

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage, isMobile }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const buttonStyle = {
    padding: isMobile ? '5px 8px' : '8px 12px',
    margin: isMobile ? '0 3px' : '0 5px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    cursor: 'pointer',
    fontSize: isMobile ? '12px' : '14px',
    minWidth: isMobile ? '30px' : 'auto',
    transition: 'background-color 0.2s, color 0.2s',
  };

  return (
    <nav style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          ...buttonStyle,
          background: currentPage === 1 ? '#f5f5f5' : 'white',
        }}
      >
        Prev
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          style={{
            ...buttonStyle,
            background: currentPage === number ? '#4f8cff' : 'white',
            color: currentPage === number ? 'white' : 'black',
            borderColor: currentPage === number ? '#4f8cff' : '#ddd',
          }}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        style={{
          ...buttonStyle,
          background: currentPage === pageNumbers.length ? '#f5f5f5' : 'white',
        }}
      >
        Next
      </button>
    </nav>
  );
};

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('requests');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= MOBILE_WIDTH);
  const [requests, setRequests] = useState([]);
  const [loadingRequests, setLoadingRequests] = useState(true);
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);
  const [requestsCurrentPage, setRequestsCurrentPage] = useState(1);
  const [usersCurrentPage, setUsersCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [seriesMaintenance, setSeriesMaintenance] = useState(false);
  const [loadingSettings, setLoadingSettings] = useState(true);
  const db = getDatabase(app);
  const auth = getAuth(app);
  const navigate = useNavigate();

  // Pagination logic for requests
  const indexOfLastRequest = requestsCurrentPage * itemsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
  const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);
  const paginateRequests = pageNumber => setRequestsCurrentPage(pageNumber);

  // Pagination logic for users
  const indexOfLastUser = usersCurrentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginateUsers = pageNumber => setUsersCurrentPage(pageNumber);

  useEffect(() => {
    // Fetch settings
    setLoadingSettings(true);
    const settingsRef = ref(db, 'settings');
    const unsubscribeSettings = onValue(settingsRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.seriesMaintenance) {
        setSeriesMaintenance(data.seriesMaintenance.isMaintenance);
      }
      setLoadingSettings(false);
    });
    return () => unsubscribeSettings();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === 'bishub766@gmail.com') {
        setIsVerifying(false);
      } else {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
      if (window.innerWidth > MOBILE_WIDTH) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setLoadingRequests(true);
    const requestsRef = ref(db, 'movieRequests');
    const unsubscribe = onValue(requestsRef, (snapshot) => {
      const data = snapshot.val();
      const reqs = [];
      if (data) {
        Object.entries(data).forEach(([id, value]) => {
          reqs.push({ id, ...value });
        });
      }
      setRequests(reqs);
      setLoadingRequests(false);
    }, (error) => {
      setRequests([]);
      setLoadingRequests(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Users RTDB live fetch
    setLoadingUsers(true);
    const usersRef = ref(db, 'users');
    const unsubscribeUsers = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const userList = [];
      if (data) {
        Object.entries(data).forEach(([id, value]) => {
          userList.push({ id, ...value });
        });
      }
      setUsers(userList);
      setLoadingUsers(false);
    }, (error) => {
      setUsers([]);
      setLoadingUsers(false);
    });
    return () => unsubscribeUsers();
  }, []);

  const handleToggleUserStatus = (user) => {
    const userRef = ref(db, `users/${user.id}`);
    const newStatus = user.status === 'active' ? 'banned' : 'active';
    update(userRef, { status: newStatus })
      .then(() => console.log(`User ${user.email} status updated to ${newStatus}`))
      .catch((error) => console.error("Error updating user status: ", error));
  };

  const handleToggleUserRole = (user) => {
    const userRef = ref(db, `users/${user.id}`);
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    update(userRef, { role: newRole })
      .then(() => console.log(`User ${user.email} role updated to ${newRole}`))
      .catch((error) => console.error("Error updating user role: ", error));
  };

  const handleUpdateRequestStatus = (requestId, newStatus) => {
    const requestRef = ref(db, `movieRequests/${requestId}`);
    update(requestRef, { status: newStatus })
      .then(() => console.log(`Request ${requestId} status updated to ${newStatus}`))
      .catch((error) => console.error("Error updating request status: ", error));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User logged out');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error logging out: ', error);
      });
  };

  const handleToggleSeriesMaintenance = () => {
    const newStatus = !seriesMaintenance;
    const maintenanceRef = ref(db, 'settings/seriesMaintenance');
    update(maintenanceRef, { isMaintenance: newStatus })
      .then(() => console.log(`Series maintenance mode set to ${newStatus}`))
      .catch((error) => console.error("Error updating series maintenance mode: ", error));
  };

  // Sidebar styles
  const sidebarStyle = {
    background: 'linear-gradient(180deg, #1a233a 0%, #232b43 100%)',
    color: '#fff',
    width: collapsed ? 70 : 240,
    minWidth: collapsed ? 70 : 240,
    maxWidth: collapsed ? 70 : 240,
    height: '100vh',
    padding: collapsed ? '1.2rem 0.5rem' : '2rem 1.2rem 1.2rem 1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    position: 'fixed',
    top: 0,
    left: isMobile ? (sidebarOpen ? 0 : -260) : 0,
    zIndex: 2000,
    transition: isMobile ? 'left 0.3s' : 'width 0.3s, min-width 0.3s, max-width 0.3s, padding 0.3s',
    boxShadow: '2px 0 16px 0 rgba(30,40,90,0.10)',
    borderRight: 'none',
    overflowY: 'auto',
    right: 'auto',
    bottom: 'auto',
  };

  const sidebarBtnStyle = (active) => ({
    background: active ? 'linear-gradient(90deg, #4f8cff 0%, #38e7b0 100%)' : 'transparent',
    color: active ? '#fff' : '#bfc9e0',
    border: 'none',
    borderRadius: 8,
    padding: collapsed ? '12px' : '14px 20px',
    fontWeight: 600,
    fontSize: 17,
    cursor: 'pointer',
    marginBottom: 8,
    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, padding 0.3s',
    textAlign: 'left',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    boxShadow: active ? '0 2px 8px 0 rgba(79,140,255,0.10)' : 'none',
    outline: 'none',
    justifyContent: collapsed ? 'center' : 'flex-start',
  });

  const mainAreaStyle = {
    marginLeft: isMobile ? 0 : (collapsed ? 70 : 240),
    padding: isMobile ? '1.2rem 0.5rem' : '2.5rem 2rem',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #eaf6ff 0%, #f0f4fa 100%)',
    width: '100%',
    transition: 'margin 0.3s',
    overflow: 'auto',
    fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
    zIndex: 'auto',
  };

  // Responsive breakpoints
  let cardMaxWidth = '100%';
  let cardPadding = isMobile ? '1.2rem' : '2rem';
  let headingFontSize = isMobile ? 18 : 22;
  let tableFontSize = isMobile ? 13 : 16;
  let tableMinWidth = 400;

  if (typeof window !== 'undefined') {
    const w = window.innerWidth;
    if (w >= 1200) {
      cardMaxWidth = 1100;
      cardPadding = '2.5rem 3rem';
      headingFontSize = 26;
      tableFontSize = 18;
      tableMinWidth = 900;
    } else if (w >= 992) {
      cardMaxWidth = 900;
      cardPadding = '2rem 2.5rem';
      headingFontSize = 24;
      tableFontSize = 16;
      tableMinWidth = 700;
    } else if (w >= 700) {
      cardMaxWidth = 700;
      cardPadding = '1.5rem 2rem';
      headingFontSize = 20;
      tableFontSize = 15;
      tableMinWidth = 600;
    }
  }

  const cardStyle = {
    background: '#fff',
    borderRadius: 20,
    boxShadow: '0 6px 32px 0 rgba(79,140,255,0.13)',
    padding: isMobile ? '1.5rem' : '2.5rem 3rem',
    marginBottom: '2.5rem',
    width: '100%',
    maxWidth: 950,
    marginLeft: 'auto',
    marginRight: 'auto',
    overflowX: 'auto',
    border: '2px solid #d6e6fa',
  };

  const tableCellStyle = {
    padding: isMobile ? 2 : 10,
    border: '1px solid #ddd',
    maxWidth: 'none',
    overflow: 'hidden',
    textOverflow: 'clip',
    whiteSpace: 'normal',
    textAlign: 'left',
    fontSize: isMobile ? 10 : tableFontSize,
    color: '#111',
  };

  const tableHeaderStyle = {
    ...tableCellStyle,
    fontWeight: 700,
    background: 'linear-gradient(90deg, #eaf6ff 0%, #d6e6fa 100%)',
    color: '#232b43',
    letterSpacing: 1,
    fontSize: isMobile ? 13 : 17,
    borderBottom: '2.5px solid #4f8cff',
  };

  const formInputStyle = {
    width: '100%',
    padding: isMobile ? 6 : 8,
    borderRadius: 4,
    border: '1px solid #ccc',
    fontSize: isMobile ? 13 : 16,
    marginBottom: '1rem',
    boxSizing: 'border-box',
  };

  const formButtonStyle = {
    background: 'linear-gradient(90deg, #4f8cff 0%, #38e7b0 100%)',
    color: '#232b43',
    border: 'none',
    borderRadius: 4,
    padding: isMobile ? '4px 8px' : '8px 18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: isMobile ? 10 : 16,
    marginBottom: isMobile ? 4 : 0,
    width: isMobile ? '100%' : 'auto',
    marginRight: isMobile ? 0 : 8,
    marginTop: isMobile ? 0 : undefined,
    display: 'block',
    boxShadow: '0 2px 8px 0 rgba(79,140,255,0.10)',
    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
  };

  // Sidebar toggle button for mobile (hamburger or close)
  const sidebarToggleBtn = (
    <button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      style={{
        position: 'fixed',
        top: 18,
        left: 18,
        zIndex: 2100,
        background: 'none',
        color: '#fff',
        border: 'none',
        borderRadius: 0,
        width: 36,
        height: 36,
        fontSize: 28,
        fontWeight: 900,
        boxShadow: 'none',
        display: isMobile ? 'flex' : 'none',
        cursor: 'pointer',
        lineHeight: 1,
        padding: 0,
        outline: 'none',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
    >
      {sidebarOpen ? (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="7" y1="7" x2="21" y2="21" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <line x1="21" y1="7" x2="7" y2="21" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="8" width="18" height="3" rx="1.5" fill="#232b43" />
          <rect x="5" y="13" width="18" height="3" rx="1.5" fill="#232b43" />
          <rect x="5" y="18" width="18" height="3" rx="1.5" fill="#232b43" />
        </svg>
      )}
    </button>
  );

  // Overlay for mobile sidebar
  const sidebarOverlay = isMobile && sidebarOpen ? (
    <div
      onClick={() => setSidebarOpen(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.18)',
        zIndex: 1100,
        transition: 'background 0.3s',
      }}
    />
  ) : null;

  // Add CSS for pulse animation
  const liveLabelStyle = {
    background: '#e74c3c',
    color: '#fff',
    fontWeight: 700,
    fontSize: 12,
    borderRadius: 4,
    padding: '2px 10px',
    marginLeft: 10,
    letterSpacing: 1,
    display: 'inline-block',
    verticalAlign: 'middle',
    boxShadow: '0 0 8px 0 #e74c3c55',
    animation: 'livePulse 1.2s infinite',
  };

  // Add keyframes for pulse animation
  const styleSheet = document.createElement('style');
  styleSheet.innerText = `@keyframes livePulse { 0% { box-shadow: 0 0 8px 0 #e74c3c55; } 50% { box-shadow: 0 0 16px 4px #e74c3c99; } 100% { box-shadow: 0 0 8px 0 #e74c3c55; } }`;
  document.head.appendChild(styleSheet);

  // Status badge style for admin
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#ffb347';
      case 'approved': return '#4f8cff';
      case 'added': return '#38e7b0';
      case 'rejected': return '#ff5858';
      default: return '#bfc9e0';
    }
  };

  if (isVerifying) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(135deg, #eaf6ff 0%, #f0f4fa 100%)', fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
        <h2 style={{ color: '#232b43' }}>Verifying Admin Access...</h2>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', height: '100vh', fontFamily: 'Inter, Arial, sans-serif', flexDirection: isMobile ? 'column' : 'row', overflow: 'hidden' }}>
      {sidebarToggleBtn}
      {sidebarOverlay}
      {/* Sidebar */}
      <aside style={{...sidebarStyle}}>
        {(!isMobile || sidebarOpen) && (
          <>
            {/* Collapse/Expand Button */}
            {!isMobile && (
              <button
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#4f8cff',
                  fontSize: 24,
                  position: 'absolute',
                  top: 18,
                  right: collapsed ? -18 : -18,
                  left: collapsed ? 10 : undefined,
                  zIndex: 2100,
                  cursor: 'pointer',
                  transition: 'right 0.3s',
                  boxShadow: 'none',
                  outline: 'none',
                }}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
              </button>
            )}
            <div style={{ fontWeight: 900, fontSize: 28, marginBottom: 36, letterSpacing: 1, color: '#4f8cff', textAlign: 'center', width: '100%', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', textShadow: '0 2px 8px #4f8cff22', display: collapsed ? 'none' : 'block' }}>Admin Panel</div>
            <div style={{ overflowY: 'auto', flexGrow: 1 }}>
              {sections.map((sec) => (
              <button
                key={sec.key}
                style={sidebarBtnStyle(activeSection === sec.key)}
                onClick={() => {
                  setActiveSection(sec.key);
                  if (isMobile) setSidebarOpen(false);
                }}
                  title={collapsed ? sec.label : undefined}
              >
                  {sec.icon} {collapsed ? '' : sec.label}
              </button>
            ))}
            </div>
            <button
              style={{...sidebarBtnStyle(false), marginTop: 'auto', background: 'linear-gradient(90deg, #ff5858 0%, #ffb347 100%)', color: 'white', flexShrink: 0, fontWeight: 700, fontSize: 17, display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start'}}
              onClick={handleLogout}
              title={collapsed ? 'Logout' : undefined}
            >
              <FaSignOutAlt style={{marginRight: collapsed ? 0 : 12}} /> {collapsed ? '' : 'Logout'}
            </button>
          </>
        )}
      </aside>

      {/* Main Content */}
      <main style={{ ...mainAreaStyle, overflowY: 'auto', height: '100vh' }}>
        {/* User Requests Section */}
        {activeSection === 'requests' && (
          <div style={cardStyle}>
            <h2 style={{ color: '#1ed290', marginBottom: 18, fontSize: headingFontSize, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              User Requests Management
              <span style={liveLabelStyle}>LIVE</span>
            </h2>
            {loadingRequests ? (
              <div style={{textAlign:'center',padding:'2rem',color:'#888'}}>Loading requests...</div>
            ) : (
            <div style={{ width: '100%', ...(isMobile ? { overflowX: 'auto' } : {}) }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? 12 : tableFontSize, ...(isMobile ? { minWidth: 500 } : {}) }}>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Title</th>
                    {!isMobile && <th style={tableHeaderStyle}>Type</th>}
                    {!isMobile && <th style={tableHeaderStyle}>User Email</th>}
                    <th style={tableHeaderStyle}>Status</th>
                    <th style={tableHeaderStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.length === 0 ? (
                    <tr><td colSpan={4} style={{textAlign:'center',color:'#aaa',padding:'1.5rem'}}>No requests found.</td></tr>
                  ) : (
                    currentRequests.map((req) => (
                      <tr key={req.id}>
                        <td style={tableCellStyle} title={req.title}>{req.title}</td>
                        {!isMobile && <td style={tableCellStyle}>{req.type}</td>}
                        {!isMobile && <td style={tableCellStyle}>{req.userEmail || 'N/A'}</td>}
                        <td style={{...tableCellStyle, textTransform: 'capitalize'}}>
                          <span style={{
                            background: getStatusColor(req.status),
                            color: '#fff',
                            borderRadius: 6,
                            padding: isMobile ? '1px 4px' : '4px 12px',
                            fontWeight: 700,
                            fontSize: isMobile ? 9 : 14,
                            letterSpacing: 1,
                            whiteSpace: 'nowrap',
                          }}>{req.status}</span>
                        </td>
                        <td style={tableCellStyle}>
                          {req.status === 'pending' && (
                            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 6 : 8 }}>
                              <button onClick={() => handleUpdateRequestStatus(req.id, 'approved')} style={{ ...formButtonStyle, background: '#1ed290', marginBottom: isMobile ? 6 : 0, width: isMobile ? '100%' : 'auto' }}>Approve</button>
                              <button onClick={() => handleUpdateRequestStatus(req.id, 'rejected')} style={{ ...formButtonStyle, background: '#e74c3c', marginBottom: isMobile ? 6 : 0, width: isMobile ? '100%' : 'auto' }}>Reject</button>
                              <button onClick={() => handleUpdateRequestStatus(req.id, 'added')} style={{ ...formButtonStyle, background: '#3498db', marginBottom: 0, width: isMobile ? '100%' : 'auto' }}>Mark as Added</button>
                            </div>
                          )}
                          {req.status === 'approved' && (
                            <button onClick={() => handleUpdateRequestStatus(req.id, 'added')} style={{ ...formButtonStyle, background: '#3498db', marginBottom: 0, width: isMobile ? '100%' : 'auto' }}>Mark as Added</button>
                          )}
                          {(req.status === 'added' || req.status === 'rejected') && (
                            <span style={{ color: '#aaa', fontSize: isMobile ? 11 : 13 }}>No actions</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <Pagination 
                itemsPerPage={itemsPerPage}
                totalItems={requests.length}
                paginate={paginateRequests}
                currentPage={requestsCurrentPage}
                isMobile={isMobile}
              />
            </div>
            )}
          </div>
        )}

        {/* User Management Section */}
        {activeSection === 'users' && (
          <div style={cardStyle}>
            <h2 style={{ color: '#1ed290', marginBottom: 18, fontSize: headingFontSize, textAlign: 'center' }}>User Management <span style={liveLabelStyle}>LIVE</span></h2>
            {loadingUsers ? (
              <div style={{textAlign:'center',padding:'2rem',color:'#888'}}>Loading users...</div>
            ) : (
            <div style={{ width: '100%', ...(isMobile ? { overflowX: 'auto' } : {}) }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? 12 : tableFontSize, ...(isMobile ? { minWidth: 500 } : {}) }}>
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Email</th>
                    {!isMobile && <th style={tableHeaderStyle}>Role</th>}
                    <th style={tableHeaderStyle}>Status</th>
                    {!isMobile && <th style={tableHeaderStyle}>Last Logged In</th>}
                    {!isMobile && <th style={tableHeaderStyle}>Last Logged Out</th>}
                    <th style={tableHeaderStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr><td colSpan={4} style={{textAlign:'center',color:'#aaa',padding:'1.5rem'}}>No users found.</td></tr>
                  ) : (
                    currentUsers.map((user) => (
                      <tr key={user.id}>
                        <td style={tableCellStyle} title={user.email}>{user.email}</td>
                        {!isMobile && <td style={{...tableCellStyle, textTransform: 'capitalize'}}>{user.role || 'user'}</td>}
                        <td style={{...tableCellStyle, textTransform: 'capitalize'}}>{user.status || 'active'}</td>
                        {!isMobile && <td style={tableCellStyle}>{user.lastLoggedIn ? new Date(user.lastLoggedIn).toLocaleString() : 'N/A'}</td>}
                        {!isMobile && <td style={tableCellStyle}>{user.lastLoggedOut ? new Date(user.lastLoggedOut).toLocaleString() : 'N/A'}</td>}
                        <td style={tableCellStyle}>
                          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 6 : 8 }}>
                          {user.status === 'active' ? (
                              <button onClick={() => handleToggleUserStatus(user)} style={{ ...formButtonStyle, background: '#e74c3c', marginBottom: isMobile ? 6 : 0, width: isMobile ? '100%' : 'auto' }}>Ban</button>
                            ) : (
                              <button onClick={() => handleToggleUserStatus(user)} style={{ ...formButtonStyle, background: '#1ed290', marginBottom: 0, width: isMobile ? '100%' : 'auto' }}>Unban</button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <Pagination 
                itemsPerPage={itemsPerPage}
                totalItems={users.length}
                paginate={paginateUsers}
                currentPage={usersCurrentPage}
                isMobile={isMobile}
              />
            </div>
            )}
          </div>
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <div style={cardStyle}>
            <h2 style={{ color: '#232b43', marginBottom: 18, fontSize: headingFontSize, textAlign: 'center' }}>Settings</h2>
            {/* Series Maintenance Mode */}
            <div style={{ background: '#f8f8f8', padding: isMobile ? '1rem' : '1.5rem', borderRadius: 8, maxWidth: cardMaxWidth, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#232b43', fontSize: isMobile ? 15 : 18, textAlign: 'center' }}>Series Maintenance Mode</h3>
              {loadingSettings ? <div style={{textAlign: 'center'}}>Loading...</div> : (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ marginRight: '1rem', color: '#232b43', fontWeight: 500 }}>{seriesMaintenance ? "Maintenance ON" : "Maintenance OFF"}</span>
                  <label style={{ display: 'inline-flex', position: 'relative', alignItems: 'center', cursor: 'pointer' }}>
                    <input type="checkbox" checked={seriesMaintenance} onChange={handleToggleSeriesMaintenance} style={{ srOnly: 'true', position: 'absolute', width: '1px', height: '1px', padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }} />
                    <div style={{ width: 50, height: 26, borderRadius: 13, background: seriesMaintenance ? '#4f8cff' : '#ccc', transition: 'background-color 0.2s' }}></div>
                    <div style={{ position: 'absolute', top: 2, left: seriesMaintenance ? 26 : 2, width: 22, height: 22, borderRadius: '50%', background: 'white', transition: 'left 0.2s' }}></div>
                  </label>
                </div>
              )}
            </div>

            {/* Admin Profile */}
            <div style={{ background: '#f8f8f8', padding: isMobile ? '1rem' : '1.5rem', borderRadius: 8, maxWidth: cardMaxWidth, marginLeft: 'auto', marginRight: 'auto' }}>
              <h3 style={{ marginBottom: '1rem', color: '#232b43', fontSize: isMobile ? 15 : 18, textAlign: 'center' }}>Admin Profile</h3>
              <form>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: 4, color: '#232b43' }}>Email</label>
                  <input type="email" placeholder="Update email" style={formInputStyle} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: 4, color: '#232b43' }}>Password</label>
                  <input type="password" placeholder="Update password" style={formInputStyle} />
                </div>
                <button type="button" style={{ ...formButtonStyle, background: '#e3eaf7', color: '#232b43' }}>Update Email</button>
                <button type="button" style={{ ...formButtonStyle, background: '#ffe6b3', color: '#232b43', marginTop: isMobile ? 8 : 0 }}>Update Password</button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard; // Default export 