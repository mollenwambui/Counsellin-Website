import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-sky-blue">PROPCO</h3>
            <p className="text-gray-300 text-sm">
              Professional Psychological Counselling, Consultancy
            </p>
            <p className="text-gray-300 text-sm mt-1">
              Restore Hope in Mental Wellness
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:text-sky-blue">Home</Link></li>
              <li><Link href="/services" className="hover:text-sky-blue">Services</Link></li>
              <li><Link href="/about" className="hover:text-sky-blue">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-sky-blue">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-3">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Individual Counseling</li>
              <li>Group Therapy</li>
              <li>Couples Counseling</li>
              <li>Psychological Assessment</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-3">Contact Us</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start">
                <Phone size={16} className="text-sky-blue mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Janet Achieng</p>
                  <p>0720 585 217</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone size={16} className="text-sky-blue mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Alice Avuvika</p>
                  <p>0726 279 593</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail size={16} className="text-sky-blue mr-2 mt-0.5" />
                <p>achiengjanet25@gmail.com</p>
              </div>
              <div className="flex items-start">
                <Mail size={16} className="text-sky-blue mr-2 mt-0.5" />
                <p>lindaavuvika@gmail.com</p>
              </div>
              <div className="flex items-start col-span-2">
                <MapPin size={16} className="text-sky-blue mr-2 mt-0.5" />
                <p>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} PROPCO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
