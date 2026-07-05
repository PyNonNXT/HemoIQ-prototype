document.getElementById("bloodForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const sex = document.getElementById("sex");
const pregnancySection = document.getElementById("Pregant");

pregnancySection.style.display = "none";
const age = parseInt(document.getElementById("age").value);

let ageGroup;

if (age < 18) {
    ageGroup = "child";
}
else if (age < 60) {
    ageGroup = "adult";
}
else {
    ageGroup = "senior";
}

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
const referenceRanges = {
    child: {
        male: {
            hemoglobin: { min: 11.5, max: 15.5 },
            wbc: { min: 5000, max: 13000 },
            platelets: { min: 150000, max: 450000 },
            rbc: { min: 4.0, max: 5.2 },
            mcv: { min: 75, max: 87 },
            glucose: { min: 70, max: 99 },
            hba1c: { min: 4.0, max: 5.6 },
            cholesterol: { min: 0, max: 170 },
            triglycerides: { min: 0, max: 90 },
            tsh: { min: 0.7, max: 6.4 },
            t3: { min: 80, max: 200 },
            t4: { min: 5.0, max: 12.0 },
            urea: { min: 7, max: 20 },
            creatinine: { min: 0.3, max: 0.7 },
            bun: { min: 5, max: 18 }
        },
        female: {
            hemoglobin: { min: 11.5, max: 15.5 },
            wbc: { min: 5000, max: 13000 },
            platelets: { min: 150000, max: 450000 },
            rbc: { min: 4.0, max: 5.2 },
            mcv: { min: 75, max: 87 },
            glucose: { min: 70, max: 99 },
            hba1c: { min: 4.0, max: 5.6 },
            cholesterol: { min: 0, max: 170 },
            triglycerides: { min: 0, max: 90 },
            tsh: { min: 0.7, max: 6.4 },
            t3: { min: 80, max: 200 },
            t4: { min: 5.0, max: 12.0 },
            urea: { min: 7, max: 20 },
            creatinine: { min: 0.3, max: 0.7 },
            bun: { min: 5, max: 18 }
        }
    },

    adult: {
        male: {
            hemoglobin: { min: 13.5, max: 17.5 },
            wbc: { min: 4000, max: 11000 },
            platelets: { min: 150000, max: 450000 },
            rbc: { min: 4.7, max: 6.1 },
            mcv: { min: 80, max: 100 },
            glucose: { min: 70, max: 99 },
            hba1c: { min: 4.0, max: 5.6 },
            cholesterol: { min: 0, max: 199 },
            triglycerides: { min: 0, max: 149 },
            tsh: { min: 0.4, max: 4.0 },
            t3: { min: 80, max: 200 },
            t4: { min: 5.0, max: 12.0 },
            urea: { min: 15, max: 40 },
            creatinine: { min: 0.74, max: 1.35 },
            bun: { min: 7, max: 20 }
        },

        female: {
            hemoglobin: { min: 12.0, max: 15.5 },
            wbc: { min: 4000, max: 11000 },
            platelets: { min: 150000, max: 450000 },
            rbc: { min: 4.2, max: 5.4 },
            mcv: { min: 80, max: 100 },
            glucose: { min: 70, max: 99 },
            hba1c: { min: 4.0, max: 5.6 },
            cholesterol: { min: 0, max: 199 },
            triglycerides: { min: 0, max: 149 },
            tsh: { min: 0.4, max: 4.0 },
            t3: { min: 80, max: 200 },
            t4: { min: 5.0, max: 12.0 },
            urea: { min: 15, max: 40 },
            creatinine: { min: 0.59, max: 1.04 },
            bun: { min: 7, max: 20 }
        },

        pregnant: {
            hemoglobin: { min: 11.0, max: 14.0 },
            wbc: { min: 6000, max: 16000 },
            platelets: { min: 150000, max: 400000 },
            rbc: { min: 3.8, max: 5.0 },
            mcv: { min: 80, max: 100 },
            glucose: { min: 70, max: 95 },
            hba1c: { min: 4.0, max: 5.6 },
            cholesterol: { min: 0, max: 240 },
            triglycerides: { min: 0, max: 250 },
            tsh: { min: 0.1, max: 2.5 },
            t3: { min: 80, max: 200 },
            t4: { min: 5.0, max: 12.0 },
            urea: { min: 10, max: 30 },
            creatinine: { min: 0.4, max: 0.8 },
            bun: { min: 3, max: 13 }
        }
    },

    senior: {
        male: {
            hemoglobin: { min: 13.0, max: 17.0 },
            wbc: { min: 4000, max: 11000 },
            platelets: { min: 150000, max: 450000 },
            rbc: { min: 4.5, max: 5.9 },
            mcv: { min: 80, max: 100 },
            glucose: { min: 70, max: 99 },
            hba1c: { min: 4.0, max: 5.6 },
            cholesterol: { min: 0, max: 199 },
            triglycerides: { min: 0, max: 149 },
            tsh: { min: 0.4, max: 4.5 },
            t3: { min: 80, max: 200 },
            t4: { min: 5.0, max: 12.0 },
            urea: { min: 15, max: 43 },
            creatinine: { min: 0.7, max: 1.4 },
            bun: { min: 8, max: 23 }
        },

        female: {
            hemoglobin: { min: 11.8, max: 15.2 },
            wbc: { min: 4000, max: 11000 },
            platelets: { min: 150000, max: 450000 },
            rbc: { min: 4.1, max: 5.3 },
            mcv: { min: 80, max: 100 },
            glucose: { min: 70, max: 99 },
            hba1c: { min: 4.0, max: 5.6 },
            cholesterol: { min: 0, max: 199 },
            triglycerides: { min: 0, max: 149 },
            tsh: { min: 0.4, max: 4.5 },
            t3: { min: 80, max: 200 },
            t4: { min: 5.0, max: 12.0 },
            urea: { min: 15, max: 43 },
            creatinine: { min: 0.6, max: 1.2 },
            bun: { min: 8, max: 23 }
        }
    }

if (data.hemoglobin < ranges.hemoglobin.min)
    report += "• Low Hemoglobin (Possible Anemia)<br>";
else if (data.hemoglobin > ranges.hemoglobin.max)
    report += "• High Hemoglobin<br>";
else
    report += "• Hemoglobin Normal<br>";

if (data.wbc < ranges.wbc.min)
    report += "• Low WBC (Possible Immune Suppression)<br>";
else if (data.wbc > ranges.wbc.max)
    report += "• High WBC (Possible Infection)<br>";
else
    report += "• WBC Normal<br>";

if (data.platelets < ranges.platelets.min)
    report += "• Low Platelets (Possible Thrombocytopenia)<br>";
else if (data.platelets > ranges.platelets.max)
    report += "• High Platelets (Possible Thrombocytosis)<br>";
else
    report += "• Platelets Normal<br>";

if (data.rbc < ranges.rbc.min)
    report += "• Low RBC Count<br>";
else if (data.rbc > ranges.rbc.max)
    report += "• High RBC Count<br>";
else
    report += "• RBC Normal<br>";

if (data.mcv < ranges.mcv.min)
    report += "• Low MCV (Microcytic Anemia)<br>";
else if (data.mcv > ranges.mcv.max)
    report += "• High MCV (Macrocytic Anemia)<br>";
else
    report += "• MCV Normal<br>";

if (data.glucose > ranges.glucose.max)
    report += "• High Fasting Glucose (Diabetes Risk)<br>";
else if (data.glucose < ranges.glucose.min)
    report += "• Low Blood Glucose (Hypoglycemia)<br>";
else
    report += "• Glucose Normal<br>";

if (data.hba1c >= 6.5)
    report += "• HbA1c Indicates Diabetes<br>";
else if (data.hba1c >= 5.7)
    report += "• HbA1c Indicates Prediabetes<br>";
else if (data.hba1c < ranges.hba1c.min)
    report += "• HbA1c Below Normal<br>";
else
    report += "• HbA1c Normal<br>";


if (data.cholesterol > ranges.cholesterol.max)
    report += "• High Total Cholesterol<br>";
else
    report += "• Cholesterol Normal<br>";


if (data.triglycerides > ranges.triglycerides.max)
    report += "• High Triglycerides<br>";
else
    report += "• Triglycerides Normal<br>";


if (data.tsh < ranges.tsh.min)
    report += "• Low TSH (Possible Hyperthyroidism)<br>";
else if (data.tsh > ranges.tsh.max)
    report += "• High TSH (Possible Hypothyroidism)<br>";
else
    report += "• TSH Normal<br>";


if (data.t3 < ranges.t3.min)
    report += "• Low T3<br>";
else if (data.t3 > ranges.t3.max)
    report += "• High T3<br>";
else
    report += "• T3 Normal<br>";


if (data.t4 < ranges.t4.min)
    report += "• Low T4<br>";
else if (data.t4 > ranges.t4.max)
    report += "• High T4<br>";
else
    report += "• T4 Normal<br>";


if (data.urea < ranges.urea.min)
    report += "• Low Blood Urea<br>";
else if (data.urea > ranges.urea.max)
    report += "• High Blood Urea<br>";
else
    report += "• Urea Normal<br>";


if (data.creatinine < ranges.creatinine.min)
    report += "• Low Creatinine<br>";
else if (data.creatinine > ranges.creatinine.max)
    report += "• Elevated Creatinine (Possible Kidney Dysfunction)<br>";
else
    report += "• Creatinine Normal<br>";


if (data.bun < ranges.bun.min)
    report += "• Low BUN<br>";
else if (data.bun > ranges.bun.max)
    report += "• High BUN (Possible Kidney Dysfunction or Dehydration)<br>";
else
    report += "• BUN Normal<br>";
};

    document.getElementById("result").innerHTML = report;
});
