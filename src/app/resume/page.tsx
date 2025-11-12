"use client";

import { FaLink } from "react-icons/fa";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-start px-6 pt-0 pb-12 text-neutral-800">
      <div className="max-w-4xl w-full">
        {/* Education */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 border-b border-indigo-200 pb-2 mb-4">
            Education
          </h2>
          <div>
            <h3 className="font-semibold text-lg">University of California, Los Angeles</h3>
            <p className="italic">B.S. in Computer Science · GPA: 3.86 · Sept 2021 - June 2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-700">
              <li>Upsilon Pi Epsilon (CS Honor Society), Club Track & Field, ACM Teach LA</li>
              <li>Relevant Coursework: Artificial Intelligence, Machine Learning, Data Science, Software Engineering, Algorithms, Operating Systems, Computer Security</li>
            </ul>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 border-b border-indigo-200 pb-2 mb-4">
            Professional Experience
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold text-lg">Hewlett Packard Enterprise, Juniper Networking</h3>
            <p className="italic">Software Engineer · July 2025 - Present</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-700">
              <li>Develop Python-based automation tools to validate functionality and performance of QFX devices powering AI data centers</li>
              <li>Contribute to an open-source Terraform automation framework in Go, Python, and Shell</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="italic">Software Engineer Intern · June 2024 - March 2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-700">
              <li>Integrated Day 0 automation checks using Python for Apstra Cloud Services, ensuring seamless deployment and configuration consistency</li>
              <li>Implemented a Chaos testing framework using Kubernetes and LitmusChaos to evaluate fault tolerance</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg">UCLA Undergraduate Admission</h3>
            <p className="italic">Computer Support Technician · June 2023 - May 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-700">
              <li>Resolved technical issues for 100+ staff devices and automated recurring tasks in PowerShell to reduce support time</li>
              <li>Maintained and updated the UCLA Admission website (~40k visitors), improving accessibility compliance (WCAG)</li>
              <li>Automated Python-based data reporting pipelines for admission statistics</li>
            </ul>
          </div>
        </section>

        {/* Research Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 border-b border-indigo-200 pb-2 mb-4">
            Research Experience
          </h2>
          <div>
            <h3 className="font-semibold text-lg">UCLA Smart Grid Energy Research Center</h3>
            <p className="italic">Research Assistant · July 2023 - June 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-700">
              <li>Co-authored peer-reviewed IEEE publication on optimization of heavy-duty EV charging infrastructure <a
                href="https://ieeexplore.ieee.org/document/10733487"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-400 transition">
                <FaLink className="ml-1 text-sm" />
            </a>
            </li>
              <li>Developed energy cost models in Python and MATLAB for multi-utility charging systems, supporting sustainable transportation research</li>
            </ul>
          </div>
        </section>

        {/* Teaching & Leadership */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 border-b border-indigo-200 pb-2 mb-4">
            Teaching & Leadership
          </h2>
          <div className="mb-6">
          <h3 className="font-semibold text-lg">Association for Computing Machinery (ACM) at UCLA <a
                href="https://teachla.uclaacm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-400 transition">
                <FaLink className="ml-1 text-sm" />
            </a></h3>
            <p className="italic">Dev Team President, Teach LA · April 2024 - March 2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-700">
              <li>Led team of 30+ student developers creating interactive web applications that teach programming concepts to K-12 students in underserved Los Angeles communities</li>
              <li>Oversaw the full product lifecycle of five web applications, applying Agile methodologies to ensure timelydelivery and iterative improvement</li>
            </ul>
            </div>
            <div className="mb-6">
            <p className="italic">HTML/CSS Training Director, Teach LA · April 2023 - March 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-700">
              <li>Designed and delivered HTML/CSS training curriculum for new student developers</li>
              <li>Mentored 20+ students through club onboarding and front-end development best practices</li>
            </ul>
          </div>
          <h3 className="font-semibold text-lg">UCLA Computer Science Department </h3>
            <p className="italic">Course Reader, CS 161: Fundamentals of Artificial Intelligence · Spring 2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-700">
              <li>Evaluated weekly assignments and exams for ~100 students in upper-division AI course, providing detailed feedback on algorithm design, implementation correctness, and theoretical understanding</li>
              <li>Collaborated with course instructor and teaching assistants to develop grading rubrics, calibrate evaluation standards, and ensure fair and consistent assessment across all course readers</li>
            </ul>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 border-b border-indigo-200 pb-2 mb-4">
            Technical Skills
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            <strong>Languages:</strong> Python, C/C++, Java, Go, JavaScript, HTML/CSS, Shell/Bash, MATLAB <br />
            <strong>Frameworks & Tools:</strong> Terraform, Kubernetes, Docker, Git, Linux, React.js, Node.js, Pytest, LitmusChaos <br />
            <strong>Libraries:</strong> Pandas, NumPy, scikit-learn, PyTorch <br />
            <strong>Areas of Interest:</strong> Infrastructure Automation, Machine Learning, Ethical & Sustainable Technology
          </p>
        </section>

        {/* Footer / Link */}
        <div className="text-center mt-12 text-sm text-neutral-500">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-400 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
