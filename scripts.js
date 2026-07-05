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
let haemoglobinDeficiency = false;
let haemoglobinEfficiency = false;
let infection = false;
let autoimmune = false;
let thrombohigh = false;
let dengue = false;
let rbclack = false;
let rbchigh = false;
let macroanemia = false;
let microanemia = false;
let diabate = false;
let hypoglacemia = false;
let hbdiabate = false;
let prediabetes = false;
let hbglycemia = false;
let highcholesterol = false;
let highglycerides = false;
let hypotsh = false;
let hypertsh = false;
let t3low = false;
let t3high = false;
let t4low = false;
let t4high = false;
let bunlow = false;
let bunhigh = false;
let creatin = false;
let creatno = false;
let uremia = false;
let ureolack = false;
let filler = 67;
if (data.hemoglobin < ranges.hemoglobin.min)
    haemoglobinDeficiency = true;
else if (data.hemoglobin > ranges.hemoglobin.max)
   haemoglobinEfficiency = true;
else
    filler = 4;

if (data.wbc < ranges.wbc.min)
    suppression = true;
else if (data.wbc > ranges.wbc.max)
    infection = true;
else
    filler = 3;

if (data.platelets < ranges.platelets.min)
    dengue = true;
else if (data.platelets > ranges.platelets.max)
    thrombohigh = true;
else
    filler = 5;

if (data.rbc < ranges.rbc.min)
    rbclack = true;
else if (data.rbc > ranges.rbc.max)
    rbchigh = true;
else
    filler = 69;

if (data.mcv < ranges.mcv.min)
    microanemia = true;
else if (data.mcv > ranges.mcv.max)
    macroanemia = true;
else
    filler = 64;

if (data.glucose > ranges.glucose.max)
    diabate = true;
else if (data.glucose < ranges.glucose.min)
    hypoglacemia = true;
else
    filler = 654;

if (data.hba1c >= 6.5)
    hbdiabate = true;
else if (data.hba1c >= 5.7)
    prediabetes = true;
else if (data.hba1c < ranges.hba1c.min)
    hbglycemia = true;
else
    filler = 43;


if (data.cholesterol > ranges.cholesterol.max)
    highcholesterol = true;
else
    filler = 424;


if (data.triglycerides > ranges.triglycerides.max)
    highglycerides = true;
else
    report += "• Triglycerides Normal<br>";


if (data.tsh < ranges.tsh.min)
    hypertsh = true;
else if (data.tsh > ranges.tsh.max)
    hypotsh = true;
else
    filler = 654345;


if (data.t3 < ranges.t3.min)
    t3low = true;
else if (data.t3 > ranges.t3.max)
    t3high = true;
else
    fillers = 7765;


if (data.t4 < ranges.t4.min)
    t4low = true;
else if (data.t4 > ranges.t4.max)
    t4high = true;
else
    filler = 6543;


if (data.urea < ranges.urea.min)
    ureolack = true;
else if (data.urea > ranges.urea.max)
    uremia = true
else
    filler = 545434543;


if (data.creatinine < ranges.creatinine.min)
    creatno = true;
else if (data.creatinine > ranges.creatinine.max)
    creatin = true;
else
    filler = 85984;


if (data.bun < ranges.bun.min)
    bunlow = true;
else if (data.bun > ranges.bun.max)
    bunhigh = true;
else
    filler = 94038;
};

// =======================
// Disease / Condition Flags
// =======================

let anemia = false;
let ironDeficiencyAnemia = false;
let macrocyticAnemia = false;
let polycythemia = false;

let possibleInfection = false;
let inflammatoryCondition = false;
let severeViralInfection = false;
let autoimmuneDisorder = false;

let diabetesMellitus = false;
let prediabeticState = false;
let hypoglycemia = false;
let mixedDyslipidemia = false;
let metabolicSyndrome = false;
let cardiovascularRisk = false;

let hypothyroidism = false;
let hyperthyroidism = false;
let subclinicalHypothyroidism = false;
let subclinicalHyperthyroidism = false;

let kidneyDysfunction = false;
let chronicKidneyDisease = false;
let dehydration = false;
let diabeticKidneyDisease = false;

let anemiaOfInflammation = false;


// =======================
// Disease Logic
// =======================

// Blood Disorders
if (haemoglobinDeficiency)
    anemia = true;

if (haemoglobinDeficiency && microanemia)
    ironDeficiencyAnemia = true;

if (haemoglobinDeficiency && macroanemia)
    macrocyticAnemia = true;

if (haemoglobinEfficiency && rbchigh)
    polycythemia = true;


// Infection & Immune
if (infection)
    possibleInfection = true;

if (infection && thrombohigh)
    inflammatoryCondition = true;

// NOTE: Only use this if you have additional evidence besides platelet count.
if (infection && dengue)
    severeViralInfection = true;

if (autoimmune && rbclack)
    autoimmuneDisorder = true;


// Diabetes & Metabolism
if (diabate || hbdiabate)
    diabetesMellitus = true;

if (prediabetes)
    prediabeticState = true;

if (hypoglacemia)
    hypoglycemia = true;

if (highcholesterol && highglycerides)
    mixedDyslipidemia = true;

if ((diabate || hbdiabate) &&
    (highcholesterol || highglycerides))
    metabolicSyndrome = true;

if ((diabate || hbdiabate) &&
    highcholesterol &&
    highglycerides)
    cardiovascularRisk = true;


// Thyroid
if (hypertsh && t4low)
    hypothyroidism = true;

if (hypotsh && t4high)
    hyperthyroidism = true;

if (hypertsh && !t4low && !t4high)
    subclinicalHypothyroidism = true;

if (hypotsh && !t4low && !t4high)
    subclinicalHyperthyroidism = true;


// Kidney
if (creatin && bunhigh)
    kidneyDysfunction = true;

if (creatin && bunhigh && uremia)
    chronicKidneyDisease = true;

if (bunhigh && creatno)
    dehydration = true;


// Comorbidities
if ((diabate || hbdiabate) && kidneyDysfunction)
    diabeticKidneyDisease = true;

if (haemoglobinDeficiency && infection)
    anemiaOfInflammation = true;

    document.getElementById("result").innerHTML = report;
});
