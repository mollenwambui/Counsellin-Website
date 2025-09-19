"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Heart,
  Shield,
  Users,
  Award,
  Lightbulb,
  Menu,
  X,
  Star,
  Sparkles
} from "lucide-react";
import BubbleBackground from "./components/BubbleBackground";
import Footer from "./components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Text style object
  const textStyle = {
    color: '#333',
    fontFamily: 'Inter, system-ui, sans-serif',
  };

  // Heading style object
  const headingStyle = {
    color: '#1a202c',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 'bold',
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      background: 'linear-gradient(to bottom right, #e6f7ff, #ffffff)'
    }}>
      <BubbleBackground />

      {/* Fixed Navbar */}
      <nav style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1rem 0',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              background: 'linear-gradient(to right, #1db4f0, #8B5CF6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}>
              <Sparkles style={{ color: 'white' }} size={24} />
            </div>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #1db4f0, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>PROPCO</span>
          </div>

          {/* Desktop Navigation */}
          <div style={{
            gap: '2rem',
          }}className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('home')}
              style={{
                ...textStyle,
                fontWeight: '600',
                padding: '0.5rem 0',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s ease',
              }}
              className="hover:text-blue-500 hover:border-blue-500"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              style={{
                ...textStyle,
                fontWeight: '600',
                padding: '0.5rem 0',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s ease',
              }}
              className="hover:text-blue-500 hover:border-blue-500"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              style={{
                ...textStyle,
                fontWeight: '600',
                padding: '0.5rem 0',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s ease',
              }}
              className="hover:text-blue-500 hover:border-blue-500"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                ...textStyle,
                fontWeight: '600',
                padding: '0.5rem 0',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s ease',
              }}
              className="hover:text-blue-500 hover:border-blue-500"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex text-gray-600"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            position: 'fixed',
            top: '80px',
            left: '0',
            right: '0',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            padding: '1rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: 99,
          }} className="md:hidden">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <button
                onClick={() => scrollToSection('home')}
                style={{
                  ...textStyle,
                  fontWeight: '500',
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
                className="hover:bg-blue-50 hover:text-blue-500"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                style={{
                  ...textStyle,
                  fontWeight: '500',
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
                className="hover:bg-blue-50 hover:text-blue-500"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                style={{
                  ...textStyle,
                  fontWeight: '500',
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
                className="hover:bg-blue-50 hover:text-blue-500"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                style={{
                  ...textStyle,
                  fontWeight: '500',
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
                className="hover:bg-blue-50 hover:text-blue-500"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <main style={{
        flex: '1 1 auto',
        position: 'relative',
        zIndex: 10,
        marginTop: '80px', // Offset for fixed navbar
      }}>
        {/* Hero Section */}
        <section id="home" className="scroll-mt-24" style={{
          padding: '5rem 1rem',
          background: 'linear-gradient(to bottom right, #e6f7ff, #ffffff, #f0e6ff)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <motion.div
              style={{ marginBottom: '1.5rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              }}>
                <Star style={{ color: '#F97316', marginRight: '0.5rem' }} size={20} />
                <span style={{ color: '#F97316', fontWeight: '500' }}>Professional Mental Health Services</span>
              </div>
            </motion.div>

            <motion.h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                marginBottom: '1.5rem',
                ...headingStyle,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Restore Hope in <span style={{
                background: 'linear-gradient(to right, #1db4f0, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Mental Wellness</span>
            </motion.h1>

            <motion.p
              style={{
                fontSize: '1.25rem',
                maxWidth: '48rem',
                margin: '0 auto 2.5rem',
                ...textStyle,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Professional Psychology, Counselling & Consultancy
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
              className="sm:flex-row"
            >
              <button
                onClick={() => scrollToSection('contact')}
                style={{
                  background: 'linear-gradient(to right, #1db4f0, #0e8fa0)',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                Get Started Today
              </button>
              <button
                onClick={() => scrollToSection('about')}
                style={{
                  background: 'white',
                  color: '#1db4f0',
                  fontWeight: '600',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  border: '2px solid #1db4f0',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section id="about" className="scroll-mt-24" style={{ padding: '4rem 1rem', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', marginBottom: '4rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                ...headingStyle,
              }}>About PROPCO</h2>
              <div style={{
                width: '5rem',
                height: '0.25rem',
                background: 'linear-gradient(to right, #1db4f0, #8B5CF6)',
                margin: '0 auto',
              }}></div>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
              gap: '3rem',
            }} className="md:grid-cols-2">
              <motion.div
                style={{
                  background: 'linear-gradient(to bottom right, #e6f7ff, #ffffff)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e6f7ff',
                }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(to right, #1db4f0, #0e8fa0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  }}>
                    <Heart style={{ color: 'white' }} size={32} />
                  </div>
                  <h2 style={{
                    fontSize: '1.875rem',
                    ...headingStyle,
                  }}>Our Vision</h2>
                </div>
                <p style={{
                  color: '#1db4f0',
                  fontSize: '1.25rem',
                  lineHeight: '1.5',
                  fontWeight: '500',
                  marginBottom: '1rem',
                }}>
                  Restore hope in mental wellness
                </p>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                }}>
                  We envision a world where mental health is prioritized, stigma is eliminated, and everyone has access to quality psychological support.
                </p>
              </motion.div>

              <motion.div
                style={{
                  background: 'linear-gradient(to bottom right, #f0e6ff, #ffffff)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f0e6ff',
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(to right, #8B5CF6, #7C3AED)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  }}>
                    <Shield style={{ color: 'white' }} size={32} />
                  </div>
                  <h2 style={{
                    fontSize: '1.875rem',
                    ...headingStyle,
                  }}>Our Mission</h2>
                </div>
                <p style={{
                  color: '#8B5CF6',
                  fontSize: '1.25rem',
                  lineHeight: '1.5',
                  fontWeight: '500',
                  marginBottom: '1rem',
                }}>
                  To meet psychological needs of the populace
                </p>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                }}>
                  Our mission is to provide accessible, professional, and compassionate psychological services to individuals, couples, and communities.
                </p>
              </motion.div>
            </div>

            {/* Team Section */}
            <motion.div
              style={{ marginTop: '5rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                marginBottom: '3rem',
                textAlign: 'center',
                ...headingStyle,
              }}>Our Team</h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                gap: '2rem',
                maxWidth: '48rem',
                margin: '0 auto',
              }} className="md:grid-cols-2">
                <motion.div
                  style={{
                    background: 'white',
                    borderRadius: '1rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e6f7ff',
                    overflow: 'hidden',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '50%',
                        background: 'linear-gradient(to right, #1db4f0, #0e8fa0)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem',
                      }}>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>J</span>
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: 'bold',
                          ...textStyle,
                        }}>Janet Achieng Oiro</h3>
                        <p style={{ color: '#1db4f0', fontWeight: '500' }}>Professional Counselor</p>
                      </div>
                    </div>
                    <p style={{
                      color: '#4a5568',
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                    }}>
                      With over 10 years of experience in psychological counseling, Janet specializes in trauma therapy, depression, and anxiety disorders.
                    </p>
                    <div style={{ color: '#4a5568' }}>
                      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <Phone size={16} style={{ marginRight: '0.5rem', color: '#1db4f0' }} /> 0720 585 217
                      </p>
                      <p style={{ display: 'flex', alignItems: 'center' }}>
                        <Mail size={16} style={{ marginRight: '0.5rem', color: '#1db4f0' }} /> achiengjanet25@gmail.com
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  style={{
                    background: 'white',
                    borderRadius: '1rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #f0e6ff',
                    overflow: 'hidden',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '50%',
                        background: 'linear-gradient(to right, #8B5CF6, #7C3AED)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem',
                      }}>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>A</span>
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: 'bold',
                          ...textStyle,
                        }}>Alice Mudogo Avuvika</h3>
                        <p style={{ color: '#8B5CF6', fontWeight: '500' }}>Consultant Psychologist</p>
                      </div>
                    </div>
                    <p style={{
                      color: '#4a5568',
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                    }}>
                      Alice is a highly experienced psychologist with expertise in family therapy, child psychology, and relationship counseling.
                    </p>
                    <div style={{ color: '#4a5568' }}>
                      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <Phone size={16} style={{ marginRight: '0.5rem', color: '#8B5CF6' }} /> 0726 279 593
                      </p>
                      <p style={{ display: 'flex', alignItems: 'center' }}>
                        <Mail size={16} style={{ marginRight: '0.5rem', color: '#8B5CF6' }} /> lindaavuvika@gmail.com
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-24" style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(to bottom right, #e6f7ff, #ffffff)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', marginBottom: '4rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                ...headingStyle,
              }}>Our Services</h2>
              <div style={{
                width: '5rem',
                height: '0.25rem',
                background: 'linear-gradient(to right, #1db4f0, #8B5CF6)',
                margin: '0 auto',
              }}></div>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
              gap: '2rem',
            }} className="md:grid-cols-3">
              {[
                {
                  icon: <Users style={{ color: '#1db4f0' }} size={40} />,
                  title: "Individual Counseling",
                  description: "Personalized therapy sessions to address your unique mental health challenges.",
                  color: "linear-gradient(to bottom right, #e6f7ff, #ffffff)",
                  border: "#e6f7ff"
                },
                {
                  icon: <Heart style={{ color: '#8B5CF6' }} size={40} />,
                  title: "Couples Therapy",
                  description: "Strengthen relationships and improve communication through guided sessions.",
                  color: "linear-gradient(to bottom right, #f0e6ff, #ffffff)",
                  border: "#f0e6ff"
                },
                {
                  icon: <Shield style={{ color: '#F97316' }} size={40} />,
                  title: "Group Therapy",
                  description: "Supportive group environments to share experiences and grow together.",
                  color: "linear-gradient(to bottom right, #fff0e6, #ffffff)",
                  border: "#fff0e6"
                },
                {
                  icon: <Award style={{ color: '#1db4f0' }} size={40} />,
                  title: "Psychological Assessment",
                  description: "Comprehensive evaluations to understand mental health conditions.",
                  color: "linear-gradient(to bottom right, #e6f7ff, #ffffff)",
                  border: "#e6f7ff"
                },
                {
                  icon: <Lightbulb style={{ color: '#8B5CF6' }} size={40} />,
                  title: "Mental Health Workshops",
                  description: "Educational sessions on coping strategies and wellness techniques.",
                  color: "linear-gradient(to bottom right, #f0e6ff, #ffffff)",
                  border: "#f0e6ff"
                },
                {
                  icon: <Users style={{ color: '#F97316' }} size={40} />,
                  title: "Family Counseling",
                  description: "Improve family dynamics and resolve conflicts in a supportive setting.",

                  color: "linear-gradient(to bottom right, #fff0e6, #ffffff)",
                  border: "#fff0e6"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: service.color,
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    border: `1px solid ${service.border}`,
                    transition: 'all 0.3s ease',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="hover:shadow-xl"
                >
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                    {service.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginBottom: '0.75rem',
                    textAlign: 'center',
                    ...textStyle,
                  }}>{service.title}</h3>
                  <p style={{
                    color: '#4a5568',
                    textAlign: 'center',
                    lineHeight: '1.6',
                  }}>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - No Form */}
        <section id="contact" className="scroll-mt-24" style={{ padding: '4rem 1rem', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', marginBottom: '4rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                marginBottom: '1rem',
                ...headingStyle,
              }}>Contact Us</h2>
              <p style={{
                fontSize: '1.25rem',
                maxWidth: '48rem',
                margin: '0 auto',
                ...textStyle,
              }}>
                We are here to help. Reach out to us for any inquiries or to schedule an appointment.
              </p>
              <div style={{
                width: '5rem',
                height: '0.25rem',
                background: 'linear-gradient(to right, #1db4f0, #8B5CF6)',
                margin: '1rem auto 0',
              }}></div>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
              gap: '3rem',
              maxWidth: '48rem',
              margin: '0 auto',
            }} className="md:grid-cols-2">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div style={{
                  background: 'linear-gradient(to bottom right, #e6f7ff, #ffffff)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e6f7ff',
                  height: '100%',
                }}>
                  <h2 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1.5rem',
                    ...headingStyle,
                  }}>Janet Achieng Oiro</h2>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div style={{ marginRight: '1rem', marginTop: '0.25rem' }}>
                        <div style={{
                          width: '3rem',
                          height: '3rem',
                          borderRadius: '50%',
                          background: 'linear-gradient(to right, #1db4f0, #0e8fa0)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                        }}>
                          <Phone style={{ color: 'white' }} size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem',
                          ...textStyle,
                        }}>Phone</h3>
                        <p style={{ color: '#4a5568' }}>0720 585 217</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{ marginRight: '1rem', marginTop: '0.25rem' }}>
                        <div style={{
                          width: '3rem',
                          height: '3rem',
                          borderRadius: '50%',
                          background: 'linear-gradient(to right, #8B5CF6, #7C3AED)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                        }}>
                          <Mail style={{ color: 'white' }} size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem',
                          ...textStyle,
                        }}>Email</h3>
                        <p style={{ color: '#4a5568' }}>achiengjanet25@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div style={{
                  background: 'linear-gradient(to bottom right, #f0e6ff, #ffffff)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f0e6ff',
                  height: '100%',
                }}>
                  <h2 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1.5rem',
                    ...headingStyle,
                  }}>Alice Mudogo Avuvika</h2>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div style={{ marginRight: '1rem', marginTop: '0.25rem' }}>
                        <div style={{
                          width: '3rem',
                          height: '3rem',
                          borderRadius: '50%',
                          background: 'linear-gradient(to right, #8B5CF6, #7C3AED)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                        }}>
                          <Phone style={{ color: 'white' }} size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem',
                          ...textStyle,
                        }}>Phone</h3>
                        <p style={{ color: '#4a5568' }}>0726 279 593</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div style={{ marginRight: '1rem', marginTop: '0.25rem' }}>
                        <div style={{
                          width: '3rem',
                          height: '3rem',
                          borderRadius: '50%',
                          background: 'linear-gradient(to right, #F97316, #ea580c)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                        }}>
                          <Mail style={{ color: 'white' }} size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem',
                          ...textStyle,
                        }}>Email</h3>
                        <p style={{ color: '#4a5568' }}>lindaavuvika@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Office Hours */}
            <motion.div
              style={{ marginTop: '3rem', maxWidth: '48rem', margin: '3rem auto 0' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{
                background: 'linear-gradient(to bottom right, #fff0e6, #ffffff)',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                border: '1px solid #fff0e6',
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  ...textStyle,
                }}>Office Hours</h3>
                <ul style={{ color: '#4a5568' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(to right, #1db4f0, #8B5CF6, #F97316)',
          color: 'white',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <motion.h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Begin Your Journey?
            </motion.h2>
            <motion.p
              style={{
                fontSize: '1.25rem',
                maxWidth: '32rem',
                margin: '0 auto 2rem',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Take the first step towards better mental health today.
            </motion.p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              style={{
                background: 'white',
                color: '#8B5CF6',
                fontWeight: '600',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                border: 'none',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Book an Appointment
            </motion.button>
          </div>
        </section>
      </main>

     <Footer/>
    </div>
  );
}