import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/firebase.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Firebase",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";

export const listProjects = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Automatic Vacuum Cleaning Robots",
    desk: "Developed an autonomous Arduino-based vacuum cleaning robot capable of detecting obstacles and cleaning small debris automatically. Integrated ultrasonic sensors, DC motors, and suction mechanism with 90% navigation accuracy. Focused on embedded systems, robotics control, and low-cost hardware prototyping.",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "MOBILE MONEY",
    desk: "A mobile banking application that enables users to securely manage their finances through features such as login/logout, balance inquiry, cash withdrawal, deposits, and money transfers. Designed with a clean and intuitive interface, the app provides smooth navigation and efficient transaction flows to deliver a simple and reliable digital banking experience.",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Smart Irrigation System",
    desk: "Developed an Automatic Smart Irrigation System using Arduino to optimize plant watering through real-time soil monitoring. The system utilizes soil moisture sensors to detect ground conditions and automatically activates water pumps through relay modules when the soil becomes dry. Additional components such as ultrasonic sensors and an LCD display were integrated to monitor water levels and provide live system feedback. This solution reduces water waste, minimizes manual effort, and ensures consistent irrigation efficiency. The project demonstrates practical implementation of embedded systems, sensor integration, and automation for smart agriculture applications.",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "LPG Gas Mass Monitoring System",
    desk: "A microcontroller-based LPG mass monitoring system designed to measure the real-time weight of gas cylinders and provide early warnings when the gas level becomes low. The system integrates a load cell sensor with an Arduino to continuously calculate the cylinder’s mass and display the readings on an LCD screen. When the weight drops below a predefined threshold, both a buzzer and LED indicator are activated as audio-visual alerts, ensuring users are immediately notified to replace the gas cylinder.",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "BTraffic",
    desk: "An IoT-based smart traffic monitoring system that estimates road congestion using Bluetooth Low Energy (BLE) signals instead of cameras. Built with ESP32, the device scans nearby BLE devices, filters signals by RSSI strength, and counts unique detections to approximate vehicle density in real time. The system automatically processes the data, classifies traffic conditions (smooth or congested), and sends both live metrics and sequential logs to Firebase Realtime Database for remote monitoring through a web dashboard. This project demonstrates practical skills in embedded systems, wireless communication, real-time data processing, and cloud integration for smart city solutions.",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
  },
];

import Sertifikat1 from "/assets/certificates/sertifikat1.webp";
import Sertifikat2 from "/assets/certificates/sertifikat2.webp";
import Sertifikat3 from "/assets/certificates/sertifikat3.webp";
import Sertifikat4 from "/assets/certificates/sertifikat4.webp";
import Sertifikat5 from "/assets/certificates/sertifikat5.webp";
import Sertifikat6 from "/assets/certificates/sertifikat6.webp";

export const listCertificates = [
  {
    id: 1,
    gambar: Sertifikat1,
    nama: "IoT Device Engineering (BNSP)",
  },
  {
    id: 2,
    gambar: Sertifikat2,
    nama: "Python Programming Fundamentals (Dicoding)",
  },
  {
    id: 3,
    gambar: Sertifikat3,
    nama: "Machine Learning Fundamentals (Dicoding)",
  },
  {
    id: 4,
    gambar: Sertifikat4,
    nama: "Data Visualization Fundamentals (Dicoding)",
  },
  {
    id: 5,
    gambar: Sertifikat5,
    nama: "Project Management Fundamentals (Dicoding)",
  },
  {
    id: 6,
    gambar: Sertifikat6,
    nama: "Artificial Intelligence Fundamentals (Dicoding)",
  },
];
