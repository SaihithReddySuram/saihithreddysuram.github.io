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
          <div style="display: flex; justify-content: space-between; flex-wrap: wrap; color: white;">
            <ul style="list-style-type: disc; padding-left: 20px;">
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
              <li>R</li>
              <li>Machine Learning</li>
              <li>NumPy</li>
              <li>Workload management</li>
              <li>Query optimization</li>
              <li>Power BI</li>
            </ul>
            <ul style="list-style-type: disc; padding-left: 20px;">
              <li>Natural Language Processing</li>
              <li>Big Data Analytics</li>
              <li>Statistics</li>
              <li>Azure Synapse</li>
              <li>Azure Data Factory</li>
              <li>PySpark</li>
              <li>Data warehousing</li>
              <li>Dependency management</li>
              <li>Problem Solving</li>
            </ul>
            <ul style="list-style-type: disc; padding-left: 20px;">
              <li>Oracle DB</li>
              <li>MySQL</li>
              <li>Databricks</li>
              <li>Azure Data Explorer</li>
              <li>Pandas</li>
              <li>Data transformation</li>
              <li>Delta Lake</li>
              <li>Excel</li>
              <li>Communication</li>
            </ul>
          </div>
    `,
    certificates: `
        <h2 style="color: #f7c6b5;">Certificates</h2>
        <hr style="border: 1px solid #f7c6b5;">
        <ul style="color: #ffffff; text-align: left;">
            <li><a href="https://www.mygreatlearning.com/certificate/PFZUUENX" target="_blank">Certification in Data Science </a></li><li><a href="https://www.mygreatlearning.com/certificate/ALPCRNJE" target="_blank">Certification in Data Science - Transcript</a></li>
            <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-e6b38377-1e8c-4bcb-90e1-280ed04bf07d.jpg" target="_blank">Azure Data Engineer Certification</a></li>
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

let magnifierInterval; // Declare globally
let prevLeft = 0;

document.addEventListener("DOMContentLoaded", () => {
  const divider = document.querySelector(".section-divider");
  divider.style.opacity = "1";
  divider.style.animation = "slideFromTop 6s ease-out forwards";

  const button = document.querySelector(".button-container");
  button.style.opacity = "1";
  button.style.animation = "slideFromTop 6s ease-out forwards";

  const top = document.querySelector(".section-top");
  top.style.opacity = "1";
  top.style.animation = "slideUp 6s ease-out forwards"; 

  const profile = document.querySelector(".profile-section");  
  profile.style.opacity = "1";  
  profile.style.animation = "expandProfile 6s ease-out forwards";  
    
  setTimeout(() => {  
      const magnifier = document.getElementById("magnifier");
      const hand = document.getElementById("magnifier-hand");
      const messageBox = document.getElementById("magnifier-message");
      magnifier.style.opacity = "1"; 

      const targets = [
        {
          el: document.querySelector(".intro-image img"),
          message: "Finding key Insights - Data Analysis",
        },
        {
          el: document.querySelector(".profile-pic"),
          message: "Saihith Reddy a Data Enthusiast",
        },
        {
          el: document.querySelector(".intro"),
          message: "Saihtih's Professional Summary",
        },
      ];

      let index = 0;

      function moveMagnifier() {
        const targetData = targets[index];
        const target = targetData.el;

        if (!target) return;

        const rect = target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        const top = rect.top + scrollTop + rect.height / 2 - magnifier.offsetHeight / 2;
        const left = rect.left + scrollLeft + rect.width / 2 - magnifier.offsetWidth / 2;

        // Move the magnifier to target smoothly  
        magnifier.style.top = `${top}px`;
        magnifier.style.left = `${left}px`;

        // Determine direction and rotate
        let rotation = 0;
        if (left > prevLeft + 10) {
          rotation = 45; // moving right
        } else if (left < prevLeft - 10) {
          rotation = -45; // moving left
        } else {
          rotation = 0; // vertical or no movement
        }

        // Apply rotation with transition
        magnifier.style.transition = 'top 1s ease-in-out, left 1s ease-in-out, transform 0.5s ease-in-out';
        magnifier.style.transform = `rotate(${rotation}deg)`;

        // Update previous position
        prevLeft = left;

        // After moving (wait 1 second)
        setTimeout(() => {
          // Show the message
          messageBox.textContent = targetData.message;
          messageBox.style.opacity = 1;
	  messageBox.style.top = "50%";
	  messageBox.style.left = "50%";
	  messageBox.style.transform = "translate(-50%, -50%)";  

          // Hide message after 2 seconds
          setTimeout(() => {
            messageBox.style.opacity = 0;
          }, 1500);

        }, 1000); // ⏳ Wait for magnifier movement to finish (1 sec)

        index = (index + 1) % targets.length;
      }

      // Start the animation
      moveMagnifier();
      magnifierInterval = setInterval(moveMagnifier, 3000);

      // Disable magnifier and message when any button is clicked
      const buttons = document.querySelectorAll(".button-container button");
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (magnifierInterval) {
            clearInterval(magnifierInterval);
            magnifier.style.display = "none";
            messageBox.style.display = "none";
          }
        });
      });
    }, 2000);
  });
