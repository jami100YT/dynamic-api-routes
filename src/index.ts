import 'dotenv/config'; // Das muss die ERSTE Import-Zeile sein!
import app from './app';

const PORT = process.env.PORT || 3999; // Fallback falls .env nicht geladen wird

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});