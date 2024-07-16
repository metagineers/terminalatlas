import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Calendar, Star, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const SocialIcon = ({ Icon, href, label }: { Icon: React.ElementType, href: string, label: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors" aria-label={label}>
    <Icon size={24} />
  </a>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const TerminalAtlasLanding = () => {
  const mailtoLink = "mailto:terminalatlas2022@gmail.com?subject=Keep%20me%20updated%20please";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <Image src="/talogo.svg" width={200} height={200} alt="Terminal Atlas Logo" className="mx-auto mb-4" />
        <h1 className="text-5xl font-bold mb-4">Terminal Atlas</h1>
        <p className="text-xl mb-8">Embark on a journey through digital realms and alternate realities</p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          <a href="https://www.youtube.com/watch?v=JTfLnTzsbfQ" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Intro
          </a>
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About the Show */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">About the Show</h2>
          <p className="text-lg mb-4">
            "Terminal Atlas" is a groundbreaking animated series that explores the intersection of technology, 
            humanity, and the unknown. Follow our diverse cast of characters as they navigate a world where 
            virtual and physical realities collide, uncovering mysteries that span across dimensions.
          </p>
        </section>

        {/* Key Features */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="pt-6">
              <Calendar className="h-12 w-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">Premiering Soon</h3>
              <p>Mark your calendars! The journey begins next month.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="pt-6">
              <Star className="h-12 w-12 mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Award-Winning Team</h3>
              <p>Created by the minds behind critically acclaimed animated hits.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="pt-6">
              <PlayCircle className="h-12 w-12 mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Binge-Worthy</h3>
              <p>10 episodes of mind-bending adventure await you.</p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Explore?</h2>
          <p className="text-lg mb-6">Sign up for exclusive updates and be the first to know when Terminal Atlas launches!</p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <a href={mailtoLink} className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Get Notified
            </a>
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <SocialIcon Icon={Instagram} href="https://www.instagram.com/terminal.atlas" label="Instagram" />
            <SocialIcon Icon={Twitter} href="https://twitter.com/terminal_atlas" label="Twitter" />
            <SocialIcon Icon={Youtube} href="https://www.youtube.com/@TerminalAtlas" label="YouTube" />
            <a href="https://www.tiktok.com/@terminal.atlas" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
          <p>&copy; 2024 Terminal Atlas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TerminalAtlasLanding;