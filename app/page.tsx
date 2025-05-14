"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import SkillBar from "@/components/skill-bar"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"
import CertificationCard from "@/components/certification-card"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import FloatingParticles from "@/components/floating-particles"

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <FloatingParticles />
        <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-100/50 blur-3xl -z-10 animate-pulse-slow-delay"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Hi! I'm Sneha Ghosal
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-medium text-purple-500 mt-2"
            >
              Computer Science Student
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-600 mt-6 max-w-lg text-lg"
            >
              BTech student at Kalinga Institute of Industrial Technology with experience in content writing, social
              media management, and software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <a href="/Sneha_Ghosal_Resume.pdf" download>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-300/50 transition-all duration-300 transform hover:-translate-y-1">
                  Download CV
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-purple-300/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get In Touch
                </Button>
              </a>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex gap-6 mt-8">
              <motion.a
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="mailto:snehaghosal2004@gmail.com"
                className="text-blue-500 hover:text-purple-500 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 5 }}

                className="text-blue-500 hover:text-purple-500 transition-colors"
              >
                
              </motion.a>
              <motion.a
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://www.linkedin.com/in/sneha-ghosal-669819267"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-purple-500 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/snehaghosal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-purple-500 transition-colors"
              >
                <Github size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          >
            <motion.div
              whileHover={{ 
                rotateY: 10,
                rotateX: -10,
                scale: 1.05
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transform perspective-1000 hover:rotate-0 transition-all duration-500"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full transform -translate-x-3 -translate-y-3 -z-10"></div>
              <div className="absolute inset-0 bg-white rounded-full overflow-hidden" style={{ transform: "translateZ(10px)" }}>
                <Image
                  src="/profile.jpg"
                  alt="Sneha Ghosal"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div 
                className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl -z-20 animate-pulse-slow"
                style={{ 
                  transform: "translateZ(-10px)",
                  animation: "pulse 3s infinite alternate"
                }}
              ></div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-blue-500 flex flex-col items-center">
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Education
          </h2>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-blue-700">Kalinga Institute of Industrial Technology</h3>
            <p className="text-purple-500 font-medium">BTech in Computer Science (2022-2026)</p>
            <p className="mt-2 text-gray-600">GPA: 7.3</p>

            <div className="mt-6">
              <h4 className="font-semibold text-blue-600">Relevant Coursework:</h4>
              <p className="text-gray-600 mt-2">
                Computer Architecture, Object Oriented Programming (Java), Data Structures and Algorithms, Database
                Management System, Computer Networks, Software Engineering, Design and Analysis of Algorithms
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            My Technical Skills
          </h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SkillBar name="Python" percentage={90} />
              <SkillBar name="Java" percentage={85} />
              <SkillBar name="C" percentage={70} />
            </div>
            <div>
              <SkillBar name="SQL" percentage={90} />
              <SkillBar name="HTML" percentage={80} />
              <SkillBar name="CSS" percentage={75} />
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border-t-4 border-blue-500 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-blue-700">Programming</h3>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50 border-t-4 border-purple-500 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l3-3 3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11h6" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-purple-700">Web Development</h3>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border-t-4 border-blue-500 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-blue-700">Artificial Intelligence</h3>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50 border-t-4 border-purple-500 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-purple-700">Data Analysis</h3>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Extracurriculars
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <motion.div variants={fadeInUp}>
              <ExperienceCard
                title="Social Media & Content Writing"
                company="Artificial Intelligence Student Operated Council (AISoC)"
                period="January 2023 – Present"
                description={[
                  "Created and curated AI-related content for social media platforms, driving a 40% increase in interactions.",
                  "Collaborated with cross-functional teams to synchronize content across platforms, resulting in a 25% rise in audience reach.",
                ]}
                color="blue"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ExperienceCard
                title="Content Writer"
                company="Google Developer Student Clubs"
                period="March 2024 - Present"
                description={[
                  "Authored high-impact articles and blog posts on various tech topics, increasing web traffic by 40% within six months.",
                  "Collaborated with a team of developers and designers to produce engaging and informative content, resulting in a 30% boost in event attendance.",
                ]}
                color="purple"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ExperienceCard
                title="Research & Development"
                company="Khwaab"
                period="March 2023 - Present"
                description={[
                  "Fostered partnerships with local businesses and NGOs, expanding the reach and impact of social welfare programs.",
                  "Conducted surveys and data analysis to identify community needs, leading to targeted interventions that improved beneficiary satisfaction.",
                ]}
                color="blue"
              />
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Internship Section */}
      <AnimatedSection id="internships" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Internships
          </h2>

          <div className="max-w-4xl mx-auto">
            <ExperienceCard
              title="Python Developer Intern"
              company="Indxo"
              period="2025"
              description={[
                "Developed and maintained Python applications for data processing and analysis.",
                "Collaborated with the development team to implement new features and fix bugs.",
                "Gained hands-on experience with Python libraries for data science and machine learning.",
              ]}
              color="purple"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            My Projects
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <motion.div variants={fadeInUp}>
              <ProjectCard
                title="Predictive Analytics Dashboard"
                description="Built a dashboard that forecasts business metrics using historical data. Implemented time series models and visualized predictions for better business decision-making."
                technologies={["Python", "Pandas", "Scikit-learn", "Plotly"]}
                githubLink="https://github.com/snehaghosal/predictive-analytics"
                color="blue"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectCard
                title="Document Summarization Tool"
                description="Developed an application that automatically creates concise summaries of long documents or articles using NLP techniques, improving information processing efficiency."
                technologies={["Python", "NLTK", "Transformers", "Flask"]}
                githubLink="https://github.com/snehaghosal/document-summarizer"
                color="purple"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectCard
                title="Pomodoro Timer Application"
                description="Developed a Pomodoro timer application using Python's Tkinter library, enhancing productivity features with a 30% increase in user efficiency based on time-tracking metrics."
                technologies={["Python", "Tkinter"]}
                githubLink="https://github.com/snehaghosal/pomodro-timer"
                color="blue"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectCard
                title="Textbox Chat Application"
                description="Developed a real-time chat application using Java Swing for the GUI and Java Sockets for network communication. Implemented groupchat texting offline."
                technologies={["Java", "Swing", "Sockets", "Multithreading"]}
                githubLink="https://github.com/snehaghosal/textbox"
                color="purple"
              />
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Certifications Section */}
      <AnimatedSection id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Certifications
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <CertificationCard
                title="SQL (Basic)"
                issuer="HackerRank"
                date="2025"
                link="https://www.hackerrank.com/certificates/6ad8d883d945"
                color="blue"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CertificationCard
                title="Business for Good: Fundamentals of Corporate Responsibility"
                issuer="Coursera"
                date="2025"
                link="https://www.coursera.org/account/accomplishments/verify/UDSK8EUDCWNL"
                color="purple"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CertificationCard
                title="Ethical Decision Making for Success in the Tech Industry"
                issuer="Coursera"
                date="2025"
                link="https://www.coursera.org/account/accomplishments/verify/UVGIN2S4E8VX"
                color="blue"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CertificationCard
                title="Corporate Governance"
                issuer="Coursera"
                date="2025"
                link="https://www.coursera.org/account/accomplishments/verify/5JK25F00K5L4"
                color="purple"
              />
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Need to Get in Touch?
              </h2>
              <p className="text-gray-600 mb-10 text-lg">
                I'm currently looking for new opportunities and would love to hear from you!
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-3xl mx-auto"
              >
                <h3 className="font-bold text-xl mb-6 text-blue-600">Contact Information</h3>
                <div className="space-y-5">
                  <motion.div variants={fadeInUp} whileHover={{ x: 5 }} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <a
                      href="mailto:snehaghosal2004@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      snehaghosal2004@gmail.com
                    </a>
                  </motion.div>

                  <motion.div variants={fadeInUp} whileHover={{ x: 5 }} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <Phone className="text-purple-600" size={20} />
                    </div>
                    
                  </motion.div>

                  <motion.div variants={fadeInUp} whileHover={{ x: 5 }} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Linkedin className="text-blue-600" size={20} />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/sneha-ghosal-669819267"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/sneha-ghosal-669819267
                    </a>
                  </motion.div>

                  <motion.div variants={fadeInUp} whileHover={{ x: 5 }} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <Github className="text-purple-600" size={20} />
                    </div>
                    <a
                      href="https://github.com/snehaghosal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      github.com/snehaghosal
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© {new Date().getFullYear()} Sneha Ghosal. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-6">
            <motion.a
              whileHover={{ y: -5, scale: 1.2 }}
              href="mailto:snehaghosal2004@gmail.com"
              className="text-blue-300 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.2 }}
              href="https://www.linkedin.com/in/sneha-ghosal-669819267"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.2 }}
              href="https://github.com/snehaghosal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
            >
              <Github size={24} />
            </motion.a>
          </div>
        </div>
      </footer>
    </main>
  )
}
