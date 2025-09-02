import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'About Us': [
      { name: 'Our Mission', href: '#' },
      { name: 'Leadership Team', href: '#' },
      { name: 'Annual Reports', href: '#' },
      { name: 'Career Opportunities', href: '#' }
    ],
    'Services': [
      { name: 'Infrastructure Development', href: '#' },
      { name: 'Environmental Protection', href: '#' },
      { name: 'Community Planning', href: '#' },
      { name: 'Emergency Preparedness', href: '#' }
    ],
    'Resources': [
      { name: 'Publications', href: '#' },
      { name: 'Data & Statistics', href: '#' },
      { name: 'Grant Opportunities', href: '#' },
      { name: 'Technical Assistance', href: '#' }
    ],
    'Connect': [
      { name: 'Contact Us', href: '#' },
      { name: 'Regional Offices', href: '#' },
      { name: 'Partner Portal', href: '#' },
      { name: 'Media Center', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">FA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Federal Agency</h3>
                <p className="text-sm opacity-90">Local Impact Initiative</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Empowering communities through sustainable infrastructure development and environmental stewardship.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-75" />
                <span>(202) 555-0100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-75" />
                <span>info@federalagency.gov</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 opacity-75 mt-0.5" />
                <span>1234 Constitution Ave NW<br />Washington, DC 20230</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Bottom Section */}
        <div className="border-t border-primary-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm opacity-90">
              <div className="flex space-x-6">
                <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Accessibility</a>
              </div>
              <div>
                <span>© 2025 Federal Agency. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;