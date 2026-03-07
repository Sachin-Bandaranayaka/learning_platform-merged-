export default function ObjectRecognitionPage() {
    return (
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>👁️</div>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Object Recognition</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                This module uses AI-powered vision technology to identify objects for partially sighted students.
                It works in conjunction with the <strong>Smart Glove</strong> — when the camera detects an object,
                the glove provides haptic feedback to communicate what was found.
            </p>

            <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '1.5rem'
            }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>⚙️ Hardware Required</h2>
                <ul style={{
                    listStyle: 'none', padding: 0, color: 'var(--text-secondary)',
                    display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem'
                }}>
                    <li>📷 Camera module (USB or built-in webcam)</li>
                    <li>🧤 Smart Glove connected via Bluetooth</li>
                    <li>🔌 Arduino board with shape detection firmware</li>
                </ul>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Connect your hardware devices to enable this feature.
            </p>
        </div>
    )
}
