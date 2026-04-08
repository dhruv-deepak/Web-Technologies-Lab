const fs = require('fs');

// 1. Create / Write file
fs.writeFile('example.txt', 'Hello, this is a new file.\n', (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created successfully.');

    // 2. Read file
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content after creation:\n', data);

        // 3. Append file
        fs.appendFile('example.txt', 'This line is appended.\n', (err) => {
            if (err) {
                console.error('Error appending file:', err);
                return;
            }
            console.log('Data appended successfully.');

            // 4. Read again
            fs.readFile('example.txt', 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return;
                }
                console.log('File content after append:\n', data);

                // 5. Delete file
                fs.unlink('example.txt', (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                        return;
                    }
                    console.log('File deleted successfully.');
                });
            });
        });
    });
});
