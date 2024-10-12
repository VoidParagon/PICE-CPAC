let studentData = [];
let attendance = [];

// Load CSV and parse student data
document.getElementById('csv-file').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            const rows = content.split('\n');
            
            studentData = [];
            rows.forEach((row, index) => {
                if (index === 0) return; // Skip the header
                
                const columns = row.split(',');
                if (columns.length >= 2) {
                    const rfid = columns[0].trim();
                    const completeName = columns.slice(1).join(',').trim();
                    studentData.push({ rfid, name: completeName });
                }
            });
            console.log("CSV Data:", studentData);

            addOptions(studentData);
        };
        reader.readAsText(file);
    }
});

// Add options to dropdown list
function addOptions(data) {
    var x=document.getElementById('student-select');
    var option = document.createElement("option");
    option.text = "Kingkong"
    x.add(option);

    data.forEach(addOption);

    function addOption(item) {
        var option = document.createElement("option");
        // option.text = item.name;
        option.text = item.name.replace(/"/g, '');
        x.add(option);
    }
}


// Process attendance when submitting RFID
function processAttendance() {
    const rfidInput = document.getElementById('rfid-input').value;
    const student = studentData.find(s => s.rfid === rfidInput);
    
    const nameDisplay = document.getElementById('name-display');
    nameDisplay.textContent = '';

    if (student && !attendance.includes(student.rfid)) {
        attendance.push(student.rfid);

        // Show student's name in ID Box
        document.getElementById('id-name').textContent = student.name;
        document.getElementById('id-photo').src = "placeholder_image.jpg"; // Add actual image if available

        const listItem = document.createElement('li');
        listItem.textContent = `${student.name} (${student.rfid})`;
        document.getElementById('attendance-list').appendChild(listItem);
    } else if (!student) {
        nameDisplay.textContent = "RFID not found. Please try again.";
    }

    document.getElementById('rfid-input').value = ''; // Clear input field
}

// Manually process attendance
function manualAttendanceSubmit() {
    const studentName = document.getElementById('student-select').value
    const student = studentData.find(s => s.name.replace(/"/g, '') === studentName);
    console.log(studentName)

    const nameDisplay = document.getElementById('name-display');
    nameDisplay.textContent = '';

    if (student && !attendance.includes(student.rfid)) {
        attendance.push(student.rfid);

        // Show student's name in ID Box
        document.getElementById('id-name').textContent = studentName;
        document.getElementById('id-photo').src = "placeholder_image.jpg"; // Add actual image if available

        const listItem = document.createElement('li');
        listItem.textContent = `${studentName} (${student.rfid})`;
        document.getElementById('attendance-list').appendChild(listItem);
    } else if (!student) {
        nameDisplay.textContent = "RFID not found. Please try again.";
    }


}


// Save attendance to CSV
function saveAttendanceToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,RFID,Name\n";
    attendance.forEach(rfid => {
        const student = studentData.find(s => s.rfid === rfid);
        csvContent += `${student.rfid},${student.name}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'attendance.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Update event name and date based on user input
function updateEventInfo() {
    const eventNameInput = document.getElementById('event-name').value;
    const eventDateInput = document.getElementById('event-date').value;

    document.getElementById('display-event-name').textContent = eventNameInput;
    document.getElementById('display-event-date').textContent = new Date(eventDateInput).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}













