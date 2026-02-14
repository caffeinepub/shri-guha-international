import { Section } from '@/components/Section';
import { Building2, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const highlights = [
    {
      icon: Building2,
      title: 'Established Business',
      description: 'Registered proprietorship operating since 2019'
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'Committed to reliability and excellence'
    },
    {
      icon: TrendingUp,
      title: 'Digital Presence',
      description: 'Strategic SEO and online visibility'
    }
  ];

  return (
    <Section
      id="about"
      title="About Us"
      subtitle="A trusted name in garment manufacturing and wholesale operations"
      className="bg-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Main Description */}
        <div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
          <p className="text-center leading-relaxed">
            <strong className="text-foreground">Guha International</strong> is a growing business entity engaged in wholesale and retail operations, 
            registered as a proprietorship in Chennai, Tamil Nadu. Operating under the legal trade name{' '}
            <strong className="text-foreground">Guha International</strong>, we are registered with the Goods and Services Tax 
            Identification Number (GSTIN) <strong className="text-primary">33BJLPH3465H1Z7</strong> with an active registration 
            status since <strong className="text-foreground">26 October 2019</strong>.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Information */}
        <div className="space-y-6 text-muted-foreground">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3 text-lg">DESIGN WITH PURPOSE</h3>
              <p className="leading-relaxed">
                We help interpret your vision. Taking ideas from your perspective and turning it into reality.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3 text-lg">WHAT WE STAND FOR</h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Leading with our employees :</strong> We believe our employees are one of our greatest assets.
                </p>
                <p className="leading-relaxed">
                  At Guha, we are committed to expanding our CSR practices through meaningful programs that make a difference in the world. 
                  Guha has adopted a robust framework created through deliberate and consistent actions, which results in long-lasting 
                  benefits for our people and the planet.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3 text-lg">Our Commitment</h3>
              <p className="leading-relaxed">
                Guha International focuses on serving customers through its product offerings and service solutions while 
                emphasizing <strong className="text-foreground">customer satisfaction, reliability, and quality standards</strong>. 
                As a competitive business operating in both wholesale and retail segments, we strive to understand evolving 
                market demands and align our operations to meet those expectations effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
