// Data for each section
const data = {
    summary: "Passionate Data Analytics Engineer with strong technical expertise in building scalable data systems, developing ETL pipelines, and implementing ML solutions.",
    education: `
        <strong>George Mason University</strong><br>Masters in Data Analytics Engineering (May 2025)<br>GPA: 3.85/4.00<br><br>
        <strong>Chaitanya Bharathi Institute of Technology</strong><br>Bachelor's in Computer Science Engineering (Sep 2020)<br>GPA: 3.22/4.00
    `,
    work: `
        <strong>Fed Writers (Jan 2025 – Present):</strong> Data extraction, structuring, and LLM deployment.<br><br>
        <strong>ZS Associates (Dec 2021 – Aug 2023):</strong> Built data pipelines, dashboards, and optimized workflows for pharma clients.
    `,
    projects: `
        <ul>
            <li><strong>Medical Insurance Fraud Detection:</strong> Big data integration and fraud prediction using ML.</li>
            <li><strong>Formula1 Analysis:</strong> Azure data ingestion and racing analytics.</li>
            <li><strong>Advertisement or Not Classification:</strong> NLP model for text classification.</li>
        </ul>
    `,
    skills: `
        Python, Java, SQL, R<br>
        Databricks, Azure Synapse, Azure Data Factory<br>
        Machine Learning, NLP, Big Data Analytics, ETL Pipelines, Data Warehousing
    `,
    certificates: `
        <ul>
            <li>Post Graduate Data Science Certificate</li>
            <li>Azure Data Engineer Certification</li>
            <li>Introduction to Snowflake - Udemy</li>
            <li>Coursera Specialization</li>
        </ul>
    `
};

function openModal(section) {
    document.getElementById('modal-text').innerHTML = data[section];
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
