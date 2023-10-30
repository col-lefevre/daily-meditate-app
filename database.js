import * as SQLite from "expo-sqlite";

// Create / open the database, and returns the db reference
async function initDb() {
	const db = await SQLite.openDatabase("db.meditation_notes");
	db.transaction((tx) =>
		tx.executeSql(
			"CREATE TABLE IF NOT EXISTS user_notes (id INTEGER PRIMARY KEY AUTOINCREMENT, notes TEXT, timestamp TIMESTAMP)"
		)
	);
	return db;
}

// Write one new entry to db
async function addEntry(notes, timestamp) {
	const db = await initDb();
	db.transaction((tx) => {
		tx.executeSql("INSERT INTO user_notes (notes, timestamp) VALUES (?, ?)", [
			notes,
			timestamp,
		]);
	});
}

// Return all entries
async function getEntries() {
	const db = await initDb();
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM user_notes",
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

export { addEntry, getEntries };
