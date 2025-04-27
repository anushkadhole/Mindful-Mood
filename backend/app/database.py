import sqlite3

DB_NAME = 'moods.db'

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS moods (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            mood TEXT NOT NULL,
            reason TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

def add_mood(mood, reason):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('INSERT INTO moods (mood, reason) VALUES (?, ?)', (mood, reason))
    conn.commit()
    conn.close()

def get_moods():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('SELECT mood, reason, timestamp FROM moods ORDER BY timestamp DESC')
    rows = c.fetchall()
    conn.close()
    return [{'mood': row[0], 'reason': row[1], 'timestamp': row[2]} for row in rows]
