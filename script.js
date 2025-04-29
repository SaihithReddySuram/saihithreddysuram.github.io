// Exact Information from Resume PDF
const data = {
    summary: `
        <h2 style="color: #f7c6b5;">Intro</h2>
        <hr style="border: 1px solid #f7c6b5;">
        <p style="color: #ffffff;">
            I am a passionate Data Analytics Engineer currently pursuing my Master of Science in Data Analytics Engineering at George Mason University, with a Cumulative GPA of 3.85/4.00. My academic foundation spans Big Data Analytics, Database Management Systems, Machine Learning, and Applied Information Technology, giving me a strong edge in handling and transforming complex datasets into actionable insights. I believe in the power of data to drive smarter decisions and am deeply committed to leveraging data science to solve real-world problems.<br><br>
            Professionally, I have contributed as a Business Technology Solutions Associate at ZS Associates and now serve as a Data Analytics Engineer Developer at Fed Writers. At ZS Associates, I built scalable data pipelines, optimized data ingestion workflows on Databricks, and developed customized dashboards for clients like GSK and BMS. Currently, at Fed Writers, I specialize in extracting and structuring data from research studies, generating embeddings with Hugging Face models, and deploying local language models for advanced querying. My work reflects a balance between technical proficiency and business insight, ensuring that data solutions align closely with organizational goals.<br><br>
            Alongside my professional roles, I have completed projects like "Medical Insurance Fraud Detection," "Formula 1 Data Analysis," and "Advertisement Classification," showcasing my skills in machine learning, big data analytics, and cloud platforms like Azure. Certified as an Azure Data Engineer and with a strong background in Python, SQL, PySpark, and Power BI, I am driven to continuously learn and innovate. My long-term vision is to integrate AI, data engineering, and advanced analytics to build scalable, impactful solutions that drive growth and innovation.
        </p>
    `,
    education: `
        <h2 style="color: #f7c6b5;">Education</h2>
        <hr style="border: 1px solid #f7c6b5;">
        <p style="color: #ffffff;">
            <strong>George Mason University</strong><br>
            Master's in Data Analytics Engineering (Expected May 2025)<br>
            Cumulative GPA: 3.85/4.00<br>
            Coursework: Big Data Analytics, Database Management Systems, Operations Research, Machine Learning, Statistics, Applied Information Technology.<br><br>

            <strong>Chaitanya Bharathi Institute of Technology</strong><br>
            Bachelor’s in Computer Science Engineering (Graduated Sep 2020)<br>
            Cumulative GPA: 3.22/4.00<br>
            Coursework: Data Structures and Algorithms, Mathematics, Java.
        </p>
    `,
    work: `
        <h2 style="color: #f7c6b5;">Work Experience</h2>
        <hr style="border: 1px solid #f7c6b5;">
        <p style="color: #ffffff;">
            <strong>Fed Writers - GMU Project (Jan 2025 – Present)</strong><br>
            Developer (United States)<br>
            • Extracting, structuring, and storing data from 45+ meta-analysis papers into a vector database.<br>
            • Generating embeddings with Hugging Face models and deploying a Local Language Model (LLM) for querying research insights.<br><br>

            <strong>ZS Associates India Pvt Ltd (Dec 2021 – Aug 2023)</strong><br>
            Business Technology solution Associate (Pune, India)<br>
            • Built scalable and reliable data systems using Databricks for optimized data ingestion, processing, and analysis.<br>
            • Designed and developed data extraction, transformation, and loading (ETL) pipelines.<br>
            • Monitored workflows ensuring smooth continuous data processing.<br>
            • Led Customer Insights specialty pharmacy project, optimizing datasets for enterprise agility.<br>
            • Developed customized dashboards for GSK and BMS clients, integrating SQL backend processing and Excel-based KPI tracking.
        </p>
    `,
    projects: `
        <h2 style="color: #f7c6b5;">Projects</h2>
        <hr style="border: 1px solid #f7c6b5;">
        <ul style="color: #ffffff; text-align: left;">
            <li><strong><a href="https://github.com/SaihithReddySuram/Medical-Insurance-Fraud-Detection" target="_blank">Medical Insurance Fraud Detection</a></strong>: Developed a model integrating multiple big datasets to predict medical insurance fraud using ML algorithms. (SQL, Python, Databricks, MongoDB, PySpark, Tableau)</li>
            <li><strong><a href="https://github.com/SaihithReddySuram/Formula-1" target="_blank">Formula 1 Analysis</a></strong>: Automated ingestion and transformation of Formula 1 race data via Azure Data Factory and Databricks for structured analytics and reporting. (SQL, Python, Azure Data Factory, Azure Data Explorer, Databricks, PySpark)</li>
            <li><strong><a href="https://github.com/SaihithReddySuram/Advertisement-or-Not-Classification" target="_blank">Advertisement or Not Classification</a></strong>: Built a text classification model using NLP and ML techniques to differentiate advertisements from other text records. (Machine Learning, NLP, Exploratory Data Analysis)</li>
        </ul>
    `,
    skills: `
        <h2 style="color: #f7c6b5;">Skills</h2>
        <hr style="border: 1px solid #f7c6b5;">
        <ul style="color: #ffffff; text-align: left;">
            <li><strong>Languages:</strong> Python, Java, SQL, R</li>
            <li><strong>Technologies:</strong> Machine Learning, Natural Language Processing, Big Data Analytics, Statistics</li>
            <li><strong>Database Management:</strong> Oracle DB, MySQL</li>
            <li><strong>Data Platforms:</strong> Databricks, Azure Synapse, Azure Data Explorer, Azure Data Factory</li>
            <li><strong>Data Analysis & Processing:</strong> Pandas, NumPy, PySpark</li>
            <li><strong>ETL/ELT & Data Pipelines:</strong> Data transformation, workload management, data warehousing, Delta Lake</li>
            <li><strong>Optimization & Performance:</strong> Query optimization, dependency management</li>
            <li><strong>Reporting & Analytics Tools:</strong> Excel, Power BI</li>
        </ul>
    `,
    certificates: `
        <h2 style="color: #f7c6b5;">Certificates</h2>
        <hr style="border: 1px solid #f7c6b5;">
        <ul style="color: #ffffff; text-align: left;">
            <li><a href="https://www.mygreatlearning.com/certificate/PFZUUENX" target="_blank">Certification in Data Science </a></li><li><a href="https://www.mygreatlearning.com/certificate/ALPCRNJE" target="_blank">Certification in Data Science - Transcript</a></li>
            <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-e6b38377-1e8c-4bcb-90e1-280ed04bf07d.jpg" target="_blank">Introduction to Snowflake </a></li>
            <li><a href="https://coursera.org/share/4cdbf3fc1b823c5608bec844d0493a01" target="_blank"> Introduction to Snowflake Coursera Specialization </a></li>
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
