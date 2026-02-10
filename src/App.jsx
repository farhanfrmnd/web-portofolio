import DataImage, { listCertificates } from "./data";
import { listTools, listProjects } from "./data";
import { useState, useEffect } from "react";
import Aurora from "./components/Aurora";

function App() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [expType, setExpType] = useState("work");
  const [selectedCertificates, setSelectedCertificates] = useState(null);

  useEffect(() => {
    if (selectedProject || selectedCertificates) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject, selectedCertificates]);
  return (
    <div className="relative z-10">
      {/* Aurora Bg */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Aurora
          colorStops={["#144d53", "#307672", "#e4eddb"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <div
        className="hero relative overflow-hidden grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1"
        id="home"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <h1 className="text-5xl/tight font-bold mb-6">
            Hello, I'm Muhammad Farhan Farmanda
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            A Computer Engineering student with a focus on multimedia technology
            and a strong interest in developing creative and innovative digital
            solutions. Possesses knowledge in user interface design and
            computer-based application development. Highly motivated to
            continuously learn and contribute to technological transformation
            across various sectors. Able to work effectively both independently
            and collaboratively, with experience in implementing technical
            concepts into practical and impactful products.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#portfolio"
              className="bg-[#307672] p-4 rounded-2xl hover:bg-[#144d53]"
            >
              View Portfolio <i className="ri-arrow-down-line ri-lg"></i>
            </a>
            <a
              href="#contact"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Contact Me <i className="ri-message-3-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[400px] md:ml-auto rounded-2xl"
          loading="lazy"
        />
      </div>

      {/* About Me */}
      <div className="about mt-32 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-base/loose mb-6 opacity-50">
            I am a Computer Engineering student at Syiah Kuala University with a
            strong focus on multimedia technology, IoT, and interactive digital
            systems. I have experience developing practical technology solutions
            through web development, UI/UX design, and emerging technologies
            such as AR/VR. Passionate about turning technical concepts into
            real-world applications, I enjoy building systems that are both
            functional and user-friendly. Beyond technical skills, I have
            developed strong leadership and teamwork abilities through
            organizational and professional experiences. I served as an intern
            technician at PT. Angkasa Pura Indonesia, where I worked on CCTV
            monitoring, FIDS maintenance, and airport security systems. I also
            lead 170+ members as the Chairman of the Computer Engineering
            Student Association, managing teams, programs, and organizational
            budgets effectively. I am highly motivated, adaptive, and
            continuously learning, aiming to contribute innovative solutions
            that create meaningful impact in technology and society.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-[#307672]">+</span>
                </h1>
                <p>Project Finished</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2<span className="text-[#307672]">+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
        {/* About Me*/}

        {/* Portofolio */}
        <div className="portfolio mt-32" id="portfolio">
          <h1 className="text-4xl mb-2 font-bold text-center">
            Portfolio Showcase
          </h1>
          <p className="text-base/loose text-center opacity-50">
            Explore my projects, experience, certifications, and technical
            expertise, each representing a milestone in my continuous learning
            journey.
          </p>
        </div>

        {/* Menu */}
        <div className="mt-8 xl:w-2/3 lg:w-3/4 w-full mx-auto">
          <div className="bg-zinc-700 rounded-2xl p-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => setActiveTab("projects")}
              className={`py-5 rounded-xl flex flex-col items-center gap-2 ${
                activeTab === "projects"
                  ? "bg-[#307672] text-white shadow-lg"
                  : "text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              <i className="ri-expand-left-right-line ri-lg"></i>
              Projects
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`py-5 rounded-xl flex flex-col items-center gap-2 ${
                activeTab === "experience"
                  ? "bg-[#307672] text-white shadow-lg"
                  : "text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              <i className="ri-briefcase-4-line ri-lg"></i>
              Experience
            </button>

            <button
              onClick={() => setActiveTab("certificates")}
              className={`py-5 rounded-xl flex flex-col items-center gap-2 ${
                activeTab === "certificates"
                  ? "bg-[#307672] text-white shadow-lg"
                  : "text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              <i className="ri-award-line ri-lg"></i>
              Certificates
            </button>

            <button
              onClick={() => setActiveTab("tech")}
              className={`py-5 rounded-xl flex flex-col items-center gap-2 ${
                activeTab === "tech"
                  ? "bg-[#307672] text-white shadow-lg"
                  : "text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              <i className="ri-tools-line ri-lg"></i>
              Tech Stack
            </button>
          </div>
        </div>
        {/* Menu */}

        <div className="">
          {/* Projects */}
          {activeTab === "projects" && (
            <>
              {/* Grid Projects */}
              {!selectedProject && (
                <div className="mt-14 xl:w-2/3 lg:w-3/4 w-full mx-auto">
                  <div className="projects-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {listProjects.map((projects) => (
                      <div
                        key={projects.id}
                        className="relative rounded-2xl overflow-hidden group cursor-pointer"
                      >
                        {/* Image */}
                        <img
                          src={projects.gambar}
                          alt="Projects Image"
                          loading="lazy"
                          className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition" />

                        {/* Content Bottom */}
                        <div
                          className="absolute bottom-0 left-0 w-full p-5
                translate-y-6 group-hover:translate-y-0
                opacity-0 group-hover:opacity-100
                transition duration-300"
                        >
                          {/* Title */}
                          <h2 className="font-bold text-lg text-white mb-1">
                            {projects.nama}
                          </h2>

                          {/* Description */}
                          <p className="text-sm text-white/70 mb-4 line-clamp-2">
                            {projects.desk}
                          </p>

                          {/* Button */}
                          <div className="flex gap-3">
                            <button
                              onClick={() => setSelectedProject(projects)}
                              className="bg-[#307672] hover:bg-[#144d53] px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                            >
                              Details
                              <i className="ri-arrow-right-line"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Details */}
              {selectedProject && (
                <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6">
                  {/* Button Close*/}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="fixed top-6 right-6 w-11 h-11 flex items-center justify-center rounded-xl bg-[#307672]/90 hover:bg-[#144d53] text-white shadow-lg transition z-[60]"
                  >
                    <i className="ri-close-line text-2xl"></i>
                  </button>

                  {/* Card */}
                  <div className="bg-zinc-900 rounded-2xl w-full max-w-6xl grid md:grid-cols-2 gap-10 p-8 max-h-[85vh] overflow-y-auto">
                    {/* Left */}
                    <div>
                      <h1 className="text-3xl font-bold mb-6">
                        {selectedProject.nama}
                      </h1>

                      <p className="opacity-50 mb-8 leading-relaxed">
                        {selectedProject.desk}
                      </p>
                    </div>

                    {/* Right */}
                    <div>
                      <img
                        src={selectedProject.gambar}
                        alt="Preview"
                        className="w-full rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          {/* Projects */}

          {/* Experience */}
          {activeTab === "experience" && (
            <div className="mt-6 xl:w-2/3 lg:w-3/4 w-full mx-auto">
              {/* Sub Menu */}
              <div className="flex justify-center mb-14">
                <div className="bg-zinc-700 p-2 rounded-2xl flex gap-2 w-full max-w-md">
                  <button
                    onClick={() => setExpType("work")}
                    className={`flex-1 py-3 rounded-xl text-sm transition ${
                      expType === "work"
                        ? "bg-[#307672] text-white shadow"
                        : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    Work Experience
                  </button>

                  <button
                    onClick={() => setExpType("org")}
                    className={`flex-1 py-3 rounded-xl text-sm transition ${
                      expType === "org"
                        ? "bg-[#307672] text-white shadow"
                        : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    Organizational Experience
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Line */}
                <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-zinc-700"></div>

                <div className="flex flex-col gap-14">
                  {/* Work Experience */}
                  {expType === "work" && (
                    <>
                      <TimelineItem
                        year="Aug 2025 – Sep 2025"
                        title="Technician (Internship) - PT. Angkasa Pura Indonesia Bandara Internasional Sultan Iskandar Muda"
                        desc="Monitored and troubleshooted CCTV systems, maintained FIDS to ensure real-time flight information accuracy, and assisted in maintaining airport security devices including X-Ray Scanner and WTMD."
                      />
                    </>
                  )}

                  {/* Org Experience */}
                  {expType === "org" && (
                    <>
                      <TimelineItem
                        year="Jan 2025 – Present"
                        title="Chairman - HIMATEKKOM FT USK"
                        desc="Led 170+ active members, managed annual budget of Rp10 Million, and coordinated 8 divisions to achieve organizational goals and programs."
                      />

                      <TimelineItem
                        reverse
                        year="Mar 2024 – Dec 2024"
                        title="Staff of Interests & Talents Department - BEM FT USK"
                        desc="Core committee of PIALA RAJA 2024 and helped increase student engagement by 30% through faculty talent programs."
                      />

                      <TimelineItem
                        year="Jan 2024 – Dec 2024"
                        title="Vice Head of Interests & Talents Division - HIMATEKKOM FT USK"
                        desc="Initiated 4 division programs and organized Computer Battle Tournament with 90 participants."
                      />

                      <TimelineItem
                        reverse
                        year="Mar 2023 – Dec 2023"
                        title="Staff of Interests & Talents Division - HIMATEKKOM FT USK"
                        desc="Participated in planning and executing 5 organizational programs while supporting student talent development."
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Experience */}

          {/* Certificates */}
          {activeTab === "certificates" && (
            <>
              {/* Grid Certificates */}
              {!selectedCertificates && (
                <div className="mt-14 xl:w-2/3 lg:w-3/4 w-full mx-auto">
                  <div className="certificates-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {listCertificates.map((certificates) => (
                      <div
                        key={certificates.id}
                        className="relative rounded-2xl overflow-hidden group cursor-pointer"
                      >
                        {/* Image */}
                        <img
                          src={certificates.gambar}
                          alt="Certificates Image"
                          loading="lazy"
                          className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-5 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300">
                          {/* Text */}
                          <h2 className="font-bold text-lg text-white mb-2">
                            {certificates.nama}
                          </h2>

                          {/* Button */}
                          <div className="flex gap-3">
                            <button
                              onClick={() =>
                                setSelectedCertificates(certificates)
                              }
                              className="bg-[#307672] hover:bg-[#144d53] px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                            >
                              View Certificate
                              <i className="ri-fullscreen-line"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View Certificate */}
              {selectedCertificates && (
                <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center">
                  {/* Close Button*/}
                  <button
                    onClick={() => setSelectedCertificates(null)}
                    className="fixed top-6 right-6 w-11 h-11 flex items-center justify-center rounded-xl bg-[#307672]/90 hover:bg-[#144d53] text-white shadow-lg transition z-[60]"
                  >
                    <i className="ri-close-line text-2xl"></i>
                  </button>

                  {/* Image Viewer */}
                  <img
                    src={selectedCertificates.gambar}
                    alt="Certificate Preview"
                    className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                  />
                </div>
              )}
            </>
          )}
          {/* Certificates */}

          {/* Tech Stack */}
          {activeTab === "tech" && (
            <div className="mt-14 xl:w-2/3 lg:w-3/4 w-full mx-auto">
              <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {listTools.map((tool) => (
                  <div
                    className="flex flex-col items-center gap-3 p-4 bg-zinc-800 rounded-2xl hover:bg-zinc-700 group text-center"
                    key={tool.id}
                  >
                    <img src={tool.gambar} alt="Tools Image" className="w-14" />
                    <div>
                      <h4 className="font-semibold">{tool.nama}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Tech Stack */}
        </div>
      </div>
      {/* Portofolio */}

      {/* Contact */}
      <div
        className="contact mt-24 px-5 sm:px-8 md:px-16 py-16 max-w-6xl mx-auto"
        id="contact"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get in Touch
        </h1>

        <p className="text-center opacity-50 mb-14 max-w-2xl mx-auto text-sm md:text-base">
          Feel free to reach out if you'd like to collaborate, discuss a
          project, or simply connect. I'm always open to new opportunities and
          meaningful conversations in technology and multimedia development.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 place-items-center">
          {/* Left */}
          <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <div className="flex items-center gap-3 bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700 transition">
              <i className="ri-mail-line ri-lg text-[#307672]"></i>
              <span className="opacity-50 break-all">
                farhanfarmanda6@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3 bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700 transition">
              <i className="ri-phone-line ri-lg text-[#307672]"></i>
              <span className="opacity-50">+62 851 5641 3209</span>
            </div>

            <div className="flex items-center gap-3 bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700 transition">
              <i className="ri-map-pin-line ri-lg text-[#307672]"></i>
              <span className="opacity-50">Bekasi, Indonesia</span>
            </div>
          </div>

          {/* Right */}
          <div className="w-full flex justify-center">
            <form
              action="https://formsubmit.co/farhanfarmanda6@gmail.com"
              method="POST"
              autoComplete="off"
              className="bg-zinc-800 p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md"
            >
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  className="border border-zinc-600 bg-transparent p-3 rounded-md text-sm md:text-base"
                  required
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  className="border border-zinc-600 bg-transparent p-3 rounded-md text-sm md:text-base"
                  required
                />

                <textarea
                  name="Message"
                  rows="5"
                  placeholder="Your Message"
                  className="border border-zinc-600 bg-transparent p-3 rounded-md text-sm md:text-base"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="bg-[#307672] p-3 rounded-lg hover:bg-[#144d53] transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Contact */}
    </div>
  );
}

function TimelineItem({ year, title, desc, reverse }) {
  return (
    <div
      className={`relative flex items-stretch ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col`}
    >
      {/* Dot */}
      <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#307672] rounded-full border-4 border-zinc-900 z-10"></div>

      {/* Card */}
      <div
        className={`md:w-1/2 ${
          reverse ? "md:pl-12" : "md:pr-12"
        } pl-12 md:pl-0 flex`}
      >
        <div className="bg-zinc-800 p-6 rounded-2xl hover:bg-zinc-700 transition shadow-lg w-full min-h-[140px] flex flex-col justify-center">
          <span className="text-xs text-[#307672] font-semibold mb-2">
            {year}
          </span>

          <h3 className="text-lg font-bold mb-2">{title}</h3>

          <p className="opacity-50 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
