// Exact Information from Resume PDF
const data = {
    summary: `
        I am a passionate and results-driven Data Analytics Engineer currently pursuing a Master of Science in Data Analytics Engineering at George Mason University, maintaining an impressive GPA of 3.85/4.00. With a strong academic foundation in big data analytics, database management systems, operations research, machine learning, and applied information technology, I have developed a deep understanding of data-driven decision-making processes. My technical expertise spans across multiple domains, including big data processing, statistical modeling, and machine learning implementation. Through rigorous coursework and continuous self-learning, I have honed my ability to work with large, complex datasets, extract meaningful insights, and present them in actionable formats for businesses and organizations. I am a firm believer in the transformative power of data and its ability to optimize operations, predict trends, and solve real-world problems.
        <br>
        My professional journey includes impactful roles such as a Business Technology Solutions Associate at ZS Associates India and a Data Analytics Engineer Developer at Fed Writers under a GMU project. At ZS Associates, I was instrumental in designing and building scalable data systems using Databricks, developing end-to-end ETL pipelines, optimizing data ingestion workflows, and creating dashboards that provided critical business insights for clients like GSK and BMS. Additionally, I led the Customer Insights specialty pharmacy project, transforming vast and complex healthcare data into structured, optimized formats that enhanced organizational agility. In my current role at Fed Writers, I specialize in extracting and structuring data from meta-analysis research papers, leveraging Hugging Face models to create embeddings, and deploying local language models (LLMs) for querying research insights. My work consistently emphasizes data quality, model interpretability, performance optimization, and innovative problem-solving through the application of modern data science techniques.
        <br>
        Beyond academics and professional experiences, I have undertaken several major projects that showcase my practical skills, including "Medical Insurance Fraud Detection," "Formula 1 Data Analysis," and "Advertisement Classification." These projects involved hands-on implementation of machine learning models, natural language processing techniques, and large-scale data transformations using platforms like Azure Data Factory, Databricks, and MongoDB. My technical proficiency covers a wide range of tools and languages such as Python, SQL, Java, R, PySpark, Power BI, and Delta Lake, among others. I have also earned certifications, including the Azure Data Engineer Certification and a Postgraduate Certificate in Data Science, affirming my commitment to professional growth and continuous learning. My long-term goal is to integrate advanced analytics, machine learning, and cloud technologies to drive innovation, support smarter business strategies, and make meaningful contributions to society. I am excited to bring my passion for data, strong analytical mindset, and collaborative spirit to organizations that value data-driven excellence.
    `,
    education: `
        <strong>George Mason University</strong><br>
        Master's in Data Analytics Engineering (Expected May 2025)<br>
        Cumulative GPA: 3.85/4.00<br>
        Coursework: Big Data Analytics, Database Management Systems, Operations Research, Machine Learning, Statistics, Applied Information Technology.<br><br>

        <strong>Chaitanya Bharathi Institute of Technology</strong><br>
        Bachelor’s in Computer Science Engineering (Graduated Sep 2020)<br>
        Cumulative GPA: 3.22/4.00<br>
        Coursework: Data Structures and Algorithms, Mathematics, Java.
    `,
    work: `
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
    `,
    projects: `
        <ul>
            <li><strong><a href="https://github.com/SaihithReddySuram/Medical-Insurance-Fraud-Detection" target="_blank">Medical Insurance Fraud Detection</a></strong>: Developed a model integrating multiple big datasets to predict medical insurance fraud using ML algorithms. (SQL, Python, Databricks, MongoDB, PySpark, Tableau)</li>
            <li><strong><a href="https://github.com/SaihithReddySuram/Formula-1" target="_blank">Formula 1 Analysis</a></strong>: Automated ingestion and transformation of Formula 1 race data via Azure Data Factory and Databricks for structured analytics and reporting. (SQL, Python, Azure Data Factory, Azure Data Explorer, Databricks, PySpark)</li>
            <li><strong><a href="https://github.com/SaihithReddySuram/Advertisement-or-Not-Classification" target="_blank">Advertisement or Not Classification</a></strong>: Built a text classification model using NLP and ML techniques to differentiate advertisements from other text records. (Machine Learning, NLP, Exploratory Data Analysis)</li>
        </ul>
    `,
    skills: `
        <ul>
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
        <ul>
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
