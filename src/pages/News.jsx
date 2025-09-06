import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import heroBuilding from '../assets/hero-building.jpg';
import communityProject from '../assets/community-project.jpg';
import waterProject from '../assets/water-project.jpg';
import environmentalProject from '../assets/environmental-project.jpg';

const News = () => {
  const featuredArticle = {
    title: 'nHYPADEC Commissions 12 New Boreholes in Kogi & Niger',
    description: 'Quality solar-powered boreholes were inaugurated across remote communities, providing clean, safe water to more than 10,000 residents.',
    image: communityProject,
    date: 'July 15, 2025',
    category: 'Water Projects'
  };

  const newsCategories = [
    'View all',
    'Community Projects',
    'Environment & Floods',
    'Government & Policy',
    'Youth & Empowerment',
    'Health & Water Access'
  ];

  const newsArticles = [
    {
      id: 1,
      title: '60 Solar Boreholes Completed',
      description: 'Over 60 solar-powered boreholes were installed across remote states, providing clean water access for 200,000 rural residents.',
      image: waterProject,
      date: 'July 2025',
      category: 'Water Projects',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Youth & Women Empowerment Begins',
      description: '500 jobless and women in Kebbi began training in agribusiness, solar panel installation, and nHYPADEC livelihood programs.',
      image: communityProject,
      date: 'June 2025',
      category: 'Youth Programs',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'nHYPADEC Expands to 10 States',
      description: 'nHYPADEC now covers 10 states: Adamawa, Bauchi, Gombe, Kaduna, and Nasarawa—bringing support to more hydro-impacted communities.',
      image: environmentalProject,
      date: 'July 2025',
      category: 'Government & Policy',
      readTime: '2 min read'
    },
    {
      id: 4,
      title: 'River Clearance & Flood Relief',
      description: 'nHYPADEC cleared key waterways and distributed 2,000+ life jackets to reduce flooding risks in Kogi and eight communities.',
      image: heroBuilding,
      date: 'October 2024',
      category: 'Environment & Floods',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'Flood Preparedness Summit Announced',
      description: 'nHYPADEC launches national summit on flood control strategies and early warning systems across all member states.',
      image: waterProject,
      date: 'June 5, 2025',
      category: 'Environment & Floods',
      readTime: '3 min read'
    },
    {
      id: 6,
      title: 'Youth Agribusiness Program Trains 100 Farmers',
      description: 'nHYPADEC held a 2-day agribusiness workshop for 100 farmers, equipping young people with modern farming techniques.',
      image: communityProject,
      date: 'June 28, 2025',
      category: 'Youth Programs',
      readTime: '4 min read'
    },
    {
      id: 7,
      title: '524 Communities Mapped Across 10 States',
      description: 'The nationwide hydro-community mapping program collects first phase to spatial figures from operations.',
      image: environmentalProject,
      date: 'June 16, 2025',
      category: 'Government & Policy',
      readTime: '3 min read'
    },
    {
      id: 8,
      title: 'Relief Materials Distributed in Gombe & Taraba',
      description: 'Food, life jackets, and emergency kits provided to flood-prone communities ahead of this rainy season.',
      image: heroBuilding,
      date: 'May 30, 2025',
      category: 'Community Projects',
      readTime: '2 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Stay Informed, Stay Connected.
              </h1>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                From clean water projects to policy breakthroughs, get the latest updates on how nHYPADEC is transforming hydro-impacted communities across Nigeria.
              </p>
            </div>

            {/* Featured Article */}
            <Card className="max-w-4xl mx-auto overflow-hidden bg-white shadow-lg">
              <div className="relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge className="mb-3 bg-primary text-primary-foreground">
                    {featuredArticle.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {featuredArticle.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Published: {featuredArticle.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">Latest News</h2>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {newsCategories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsArticles.map((article) => (
                <Card key={article.id} className="group cursor-pointer hover:shadow-card-hover transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Published: {article.date}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-3 text-xs">
                      Read more <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Don't miss an update
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Sign up for our monthly newsletter to receive project stories, community alerts, and development updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe Now
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;