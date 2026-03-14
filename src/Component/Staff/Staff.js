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
                                { [
        ['Archana Tiwari', 'Principal', 'M.A Eng. Lit, B.Ed'],
        ['Rajkumari Parihar', 'Vice Principal', 'M.SC Chemistry, MA Eng Lit, B.Ed. M.Phil'],
        ['Prithviraj Singh Rathore', 'PGT', 'B.E'],
        ['Navin Piplodiya', 'PGT', 'B.SC Computer, M.SC. IT'],
        ['Archana Garg', 'PGT', 'M.Sc., B.ED'],
        ['Kanti Negi', 'PGT', 'M.A, B.ED'],
        ['Kapil Kumar Jain', 'PGT', 'B.SC(Computer), MCA'],
        ['Neha Kanchan', 'PGT', 'B.Sc (Biology), M. Sc. (Chemistry), B.Ed'],
        ['Nidhi Sharma', 'PGT', 'PCM, B.Sc (CS), M.TECH, B.ED'],
        ['Neha Dixit', 'PGT', 'B.COM, M.COM, B.Ed'],
        ['Kuldeep Chouhan', 'PET', 'BPES, MPEd'],
        ['Pooja Bhawsar', 'TGT', 'M.Sc., D.El.Ed., B.Ed. Pursuing'],
        ['Shalini Sharma', 'TGT', 'M.A History, M.Phil, B.ED, Ph.D'],
        ['Bhavna Singh', 'TGT', 'M.A Sanskrit, M.ED, B.ED'],
        ['Sharda Buchade', 'TGT', 'M.A (Sanskrit) B.ED'],
        ['Sonali Panwar', 'TGT', 'B.COM, M.COM, B.ED'],
        ['Ranu Tomar', 'TGT', 'PCM, B.SC(C.S.), M.Sc(Maths), B.ED'],
        ['Praveena Sharma', 'TGT', 'B.COM, M.A, B.ED'],
        ['Divya Sharma', 'TGT', 'B.Sc., M.Sc.(Maths), B.ED'],
        ['Nisha Dubey', 'TGT', 'B.Sc. (Computer), B.Sc, B.Ed'],
        ['Kajal Malviya', 'TGT', 'B.COM, M.COM, B.Ed'],
        ['Ajay Prajapati', 'TGT', 'B.E, B.Muse (music vocal), M.A English, B.ED'],
        ['Chetna Mali Bhatwada', 'TGT', 'B.SC (Maths), M.SC Maths, B.ED'],
        ['Jaya Verma', 'TGT', 'B.COM, B.ED'],
        ['Ankit Kumawat', 'TGT', 'B.SC, B.ED'],
        ['Mahak Sharma', 'PTI', 'B.COM, BPED'],
        ['Aditya Verma', 'PTI', 'B.COM, BPEd'],
        ['Swapna Upasani', 'PRT', 'B.SC M.SC., B.ED (Pursuing)'],
        ['Aastha Jain', 'PRT', 'B.A., (B.ED Pursuing)'],
        ['Kamini Mandlik', 'PRT', 'B.Sc Maths, B.ED'],
        ['Rachana Yadav', 'PRT', 'B.COM, M.COM, MBA, B.ED'],
        ['Khushi Upadhyay', 'PRT', 'B.COM (CS), DCA'],
        ['Tanu Mishra', 'PRT', 'B.SC (Computer), M.Sc., B.Ed'],
        ['Minal Sharma', 'PRT', 'BBA, MBA, B.ED'],
        ['Kajal Parihar Kushwah', 'PRT', 'D. EL.ED B, COM'],
        ['Shraddha Dwivedi', 'PRT', 'B.SC (Electronic)'],
        ['Reena Jaiswal', 'PRT', 'PCB, B.SC (Biology)'],
        ['Priyanka Jain', 'PRT', 'B.COM, M.A English'],
        ['Purnima Badke', 'PRT', 'PCB B.A, M.A Economics, B.ED'],
        ['Sonali Chouhan', 'PRT', 'B.COM (COm), M.COM (COM), B.ED'],
        ['Anjana Verma', 'PRT', 'M.Sc., MA, PGDCA'],
        ['Khushbu Gautam', 'PRT', 'B.SC, B.Ed'],
        ['Geeta Soni', 'PRT', 'B.Com, Mont. Trained'],
        ['Mamta Shah', 'PRT', 'B.com, B.Ed'],
        ['Radha Thakur', 'PRT', 'BA, MA'],
        ['Monika Pancholi', 'PRT', 'B.Sc, B.Ed'],
        ['Nidhi Salgiya', 'PRT', 'B.COM, B.Ed'],
        ['Manisha Malviya', 'PRT', 'M.A ECO, PGDCA, B.ED'],
        ['Sonal Gupta', 'PRT', 'BCA'],
        ['Richa Jain', 'PRT', 'M.com, Montessori Trained'],
        ['Gayatri Kohode', 'PRT', 'B.SC, B.Ed'],
        ['Meenakshi Verma', 'NTT', 'B.COM (Computer)'],
        ['Trupti Chouhan', 'NTT', 'B.B.A, MBA, B.Ed'],
        ['Roma Verma', 'NTT', 'B.A, D.LED'],
        ['Sonali Paliwal', 'NTT', 'B.A, M. A, Mont. Trained'],
        ['Manju Sali', 'NTT [Special Educator]', 'B.A, D.Ed, B.A, Mont. Trained'],
        ['Ranjana Dubey', 'NTT', 'M.COM, D.Ed'],
        ['Chhaya Bhawsar', 'Other', 'M.A, Drawing, Painting'],
        ['Shweta Panjwani', 'Other', 'BA, N.T.I, D.ED'],
        ['Yogesh Joshi', 'Other', 'M.com, M.Music'],
        ['Vandana Shukla', 'Other', 'M.A M.Lib'],
        ['Mousami Kulkarni', 'Other', 'M.A Painting'],
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