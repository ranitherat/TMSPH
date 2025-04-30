document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // For checkboxes with same name (industry)
    const industries = [...form.querySelectorAll('input[name="industry"]:checked')].map(i => i.value);
    data.industry = industries.length > 0 ? industries.join(', ') : 'None';

    console.log("Prepared data:", data); // Check if it's properly formatted

    // ✅ Send to Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbxKDtpbagD4gs6Y4HJGpst8OqeK5jF-y8I1acds5pblP3Eb81vSMikUFZKUg495jFwRjg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(() => {
        console.log("✅ Sent to Google Sheets");

        // ✅ Clear the form
        form.reset();

        // ✅ Show success message (optional)
        alert("Form submitted successfully!");
    }).catch((error) => {
        console.error("❌ Error sending to Google Sheets:", error);
        alert("There was an error submitting the form. Please try again.");
    });
});
