import * as SQLite from "expo-sqlite";

// Create / open the database, and returns the db reference
async function initDb() {
    const db = await SQLite.openDatabase("db.meditation_notes");
    db.transaction((tx) =>
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS med_notes (id INTEGER PRIMARY KEY AUTOINCREMENT, notes TEXT, timestamp TIMESTAMP, timer TEXT, prompt TEXT)"
        )
    );
    return db;
}

// Write one new entry to db
async function addEntry(notes, timestamp, timer, prompt) {
    if (notes !== null && notes !== "") {
        const db = await initDb();
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO med_notes (notes, timestamp, timer, prompt) VALUES (?, ?, ?, ?)",
                [notes, timestamp, timer, prompt]
            );
        });
    }
}

// Delete one entry from db
async function deleteEntry(idNum) {
    const db = await initDb();
    db.transaction((tx) => {
        tx.executeSql("DELETE FROM med_notes WHERE id = ?", [idNum]);
    });
}

// Return all entries
async function getEntries() {
    const db = await initDb();
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM med_notes",
                [],
                (_, { rows }) => {
                    resolve(rows._array);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    });
}

export { addEntry, getEntries, deleteEntry };
