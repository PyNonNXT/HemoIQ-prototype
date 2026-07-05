document.getElementById("bloodForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const sex = document.getElementById("sex");
const pregnancySection = document.getElementById("Pregant");

pregnancySection.style.display = "none";

sex.addEventListener("change", () => {
    if (sex.value === "female") {
        pregnancySection.style.display = "block";
    } else {
        pregnancySection.style.display = "none";
        document.getElementById("pregnant").value = "no";
    }
});
    const data = {
        hemoglobin: parseFloat(document.querySelector("[name=hemoglobin]").value),
        wbc: parseFloat(document.querySelector("[name=wbc]").value),
        platelets: parseFloat(document.querySelector("[name=platelets]").value),
        rbc: parseFloat(document.querySelector("[name=rbc]").value),
        mcv: parseFloat(document.querySelector("[name=mcv]").value),
        glucose: parseFloat(document.querySelector("[name=glucose]").value),
        hba1c: parseFloat(document.querySelector("[name=hba1c]").value),
        cholesterol: parseFloat(document.querySelector("[name=cholesterol]").value),
        triglycerides: parseFloat(document.querySelector("[name=triglycerides]").value),
        tsh: parseFloat(document.querySelector("[name=tsh]").value),
        t3: parseFloat(document.querySelector("[name=t3]").value),
        t4: parseFloat(document.querySelector("[name=t4]").value),
        urea: parseFloat(document.querySelector("[name=urea]").value),
        creatinine: parseFloat(document.querySelector("[name=creatinine]").value),
        bun: parseFloat(document.querySelector("[name=bun]").value)
    };

    let report = "";

    if (data.hemoglobin < 12)
        report += "• Low Hemoglobin (Possible Anemia)<br>";
    else if (data.hemoglobin > 17)
        report += "• High Hemoglobin<br>";
    else
        report += "• Hemoglobin Normal<br>";

    if (data.wbc < 4000)
        report += "• Low WBC<br>";
    else if (data.wbc > 11000)
        report += "• High WBC (Possible Infection)<br>";
    else
        report += "• WBC Normal<br>";

    if (data.platelets < 150000)
        report += "• Low Platelets<br>";
    else if (data.platelets > 450000)
        report += "• High Platelets<br>";
    else
        report += "• Platelets Normal<br>";

    if (data.glucose >= 126)
        report += "• High Fasting Glucose (Diabetes Range)<br>";
    else if (data.glucose >= 100)
        report += "• Prediabetes Range<br>";
    else
        report += "• Glucose Normal<br>";

    if (data.hba1c >= 6.5)
        report += "• HbA1c Indicates Diabetes<br>";
    else if (data.hba1c >= 5.7)
        report += "• HbA1c Indicates Prediabetes<br>";
    else
        report += "• HbA1c Normal<br>";

    if (data.cholesterol >= 240)
        report += "• High Cholesterol<br>";
    else if (data.cholesterol >= 200)
        report += "• Borderline Cholesterol<br>";
    else
        report += "• Cholesterol Normal<br>";

    if (data.creatinine > 1.3)
        report += "• Elevated Creatinine (Possible Kidney Issue)<br>";
    else
        report += "• Creatinine Normal<br>";

    document.getElementById("result").innerHTML = report;
});
