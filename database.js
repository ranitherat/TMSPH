document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Log the form data to check it
    console.log(data);

    // For checkboxes with same name (industry)
    const industries = [...form.querySelectorAll('input[name="industry"]:checked')].map(i => i.value);
    data.industry = industries.length > 0 ? industries.join(', ') : 'None';

    console.log("Prepared data:", data); // Check if it's properly formatted

    // ✅ 1. Send to Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbwqM40DBQm-YIDQQz6bULR_PfJbFgULBmhrtmnLeGNb8EV9b9mNRKLcCXx_elsj4fDf3Q/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(() => {
        console.log("✅ Sent to Google Sheets");
    }).catch((error) => {
        console.error("❌ Error sending to Google Sheets:", error);
    });

    // ✅ 2. Send to Web3Forms
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            access_key: "12604b24-fa0d-48dd-bc9b-0bf912db2a78",
            ...data
        }),
    }).then(response => {
        if (response.ok) {
            alert("Form submitted successfully!");
            form.reset();
        } else {
            alert("Failed to submit form via Web3Forms");
        }
    }).catch(error => {
        console.error("❌ Web3Forms Error:", error);
    });
});
