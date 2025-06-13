import React from 'react'

function Staff() {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
            {/* Hero Section */}
            <div style={{
                position: 'relative',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
                overflow: 'hidden'
            }}>
                {/* Animated Background Shapes */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'float 6s ease-in-out infinite'
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '200px',
                    height: '200px',
                    background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1))',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    animation: 'float 8s ease-in-out infinite reverse'
                }}></div>

                <div style={{
                    textAlign: 'center',
                    zIndex: 10,
                    color: 'white'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '800',
                        margin: '0 0 1rem 0',
                        background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                        letterSpacing: '-0.02em'
                    }}>
                        Staff Details
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                        fontWeight: '300',
                        margin: 0,
                        opacity: 0.9,
                        letterSpacing: '0.5px'
                    }}>
                        The New Era Public School | <span style={{
                            fontWeight: '600',
                            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Staff</span>
                    </p>
                </div>
            </div>

            {/* Table Section */}
            <div style={{
                padding: '4rem 2rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '24px',
                    padding: '3rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    overflow: 'hidden'
                }}>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'separate',
                            borderSpacing: '0',
                            background: 'white',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}>
                            <thead>
                                <tr style={{
                                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
                                }}>
                                    <th style={{
                                        padding: '1.5rem 2rem',
                                        textAlign: 'left',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        color: 'white',
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase',
                                        borderBottom: '3px solid #3b82f6'
                                    }}>
                                        Name of Teacher
                                    </th>
                                    <th style={{
                                        padding: '1.5rem 2rem',
                                        textAlign: 'left',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        color: 'white',
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase',
                                        borderBottom: '3px solid #8b5cf6'
                                    }}>
                                        Designation
                                    </th>
                                    <th style={{
                                        padding: '1.5rem 2rem',
                                        textAlign: 'left',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        color: 'white',
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase',
                                        borderBottom: '3px solid #ec4899'
                                    }}>
                                        Professional Qualification
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Dyuti Sardesai', 'Principal', 'Ph.D'],
                                    ['Archna Tiwari', 'PGT', 'MA,B.Ed'],
                                    ['Rajkumari Parihar', 'PGT', 'M.Phil,B.Ed'],
                                    ['Dolly Srivas', 'PGT', 'M.Sc,B.Ed'],
                                    ['Kavita Tiwari', 'PGT', 'B.Ed'],
                                    ['Rahul Thakur', 'PGT', 'BP Ed'],
                                    ['Prithviraj Rathore', 'PGT', 'BE'],
                                    ['Navin Piplodiya', 'PGT', 'BSc(comp),M.sc(IT)'],
                                    ['Leena Khandelwal', 'PGT', 'M.Com,B.Ed'],
                                    ['Shyam Soni', 'PGT', 'M.Com,B.Ed'],
                                    ['Nidhi Sharma', 'TGT', 'B.E,B.Ed'],
                                    ['Jigyasa Khatri', 'TGT', 'BA,B.Ed'],
                                    ['Santoshi Chauhan', 'TGT', 'MA,Mphil,B.Ed'],
                                    ['Reena Nagar', 'TGT', 'B.Ed'],
                                    ['Deepak Singh', 'TGT', 'Dca,D.Ed'],
                                    ['Gaurav Bhatnagar', 'TGT', 'RSCIT,CCCA,DTP'],
                                    ['Sonal Gupta', 'PRT', 'BCA'],
                                    ['Priya Mishra', 'PRT', 'MCA,B.Ed'],
                                    ['Richa Jain', 'PRT', 'Montessori Trained'],
                                    ['Sweta Panjwani', 'PRT', 'NTI,D.Ed'],
                                    ['Aasha Chauhan', 'PRT', 'Montessori Trained'],
                                    ['Gayatri Khode', 'PRT', 'B.Ed'],
                                    ['Kajal Parihar', 'PRT', 'D.Ed'],
                                    ['Rekha Suroshi', 'PRT', 'Montessori Trained'],
                                    ['Rupal Kapoor', 'PRT', 'DCA,B.Ed'],
                                    ['Vandana Shukla', 'Library', 'LIB SCI,B.Ed'],
                                    ['Mousmi Kulkarni', 'Art & Craft', 'M.Painting'],
                                    ['Yogesh Joshi', 'Music Teacher', 'M.Music'],
                                    ['Poornima Jain', 'Office Administrator', 'B.Com, Mont. Trained']
                                ].map((row, index) => (
                                    <tr key={index} style={{
                                        background: index % 2 === 0 ? '#fafafa' : 'white',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px -8px rgba(0, 0, 0, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = index % 2 === 0 ? '#fafafa' : 'white';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                        <td style={{
                                            padding: '1.25rem 2rem',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            color: '#1e293b',
                                            borderBottom: '1px solid #e2e8f0'
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem'
                                            }}>
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    background: `linear-gradient(135deg, ${
                                                        ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'][index % 5]
                                                    }, ${
                                                        ['#1d4ed8', '#7c3aed', '#db2777', '#059669', '#d97706'][index % 5]
                                                    })`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                    fontWeight: '700',
                                                    fontSize: '0.875rem'
                                                }}>
                                                    {row[0].split(' ').map(n => n[0]).join('')}
                                                </div>
                                                {row[0]}
                                            </div>
                                        </td>
                                        <td style={{
                                            padding: '1.25rem 2rem',
                                            fontSize: '0.95rem',
                                            fontWeight: '500',
                                            color: '#475569',
                                            borderBottom: '1px solid #e2e8f0'
                                        }}>
                                            <span style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '20px',
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                background: row[1] === 'Principal' ? 'linear-gradient(135deg, #fef3c7, #fed7aa)' :
                                                           row[1] === 'PGT' ? 'linear-gradient(135deg, #dbeafe, #bfdbfe)' :
                                                           row[1] === 'TGT' ? 'linear-gradient(135deg, #f3e8ff, #e9d5ff)' :
                                                           'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                                                color: row[1] === 'Principal' ? '#92400e' :
                                                       row[1] === 'PGT' ? '#1e40af' :
                                                       row[1] === 'TGT' ? '#6b21a8' :
                                                       '#166534'
                                            }}>
                                                {row[1]}
                                            </span>
                                        </td>
                                        <td style={{
                                            padding: '1.25rem 2rem',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            color: '#64748b',
                                            borderBottom: '1px solid #e2e8f0'
                                        }}>
                                            {row[2]}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add CSS animations */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @media (max-width: 768px) {
                    table {
                        font-size: 0.875rem;
                    }
                    th, td {
                        padding: 1rem 1.5rem !important;
                    }
                }
            `}</style>
        </div>
    )
}

export default Staff