import { Section } from '@/components/Section';
import { Factory, Package, Shirt, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesSection() {
  const services = [
    {
      icon: Factory,
      title: 'Wholesale Manufacturing',
      description: 'High-volume garment manufacturing solutions for wholesalers with consistent quality and timely delivery.',
      features: ['Bulk production capacity', 'Quality assurance', 'Flexible order sizes', 'Competitive pricing']
    },
    {
      icon: Shirt,
      title: 'Retail Manufacturing',
      description: 'Customized garment manufacturing services for retailers seeking quality products and reliable partnerships.',
      features: ['Custom designs', 'Quality fabrics', 'On-time delivery', 'Flexible quantities']
    },
    {
      icon: Package,
      title: 'Clothing Materials',
      description: 'Wide range of premium clothing materials and fabrics for own-brand users and brand owners.',
      features: ['Diverse fabric selection', 'Premium quality', 'Competitive rates', 'Consistent supply']
    },
    {
      icon: Users,
      title: 'Brand Owner Solutions',
      description: 'Comprehensive manufacturing support for brand owners looking to bring their clothing lines to life.',
      features: ['Private labeling', 'Custom manufacturing', 'Quality control', 'Brand support']
    }
  ];

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Comprehensive garment manufacturing and material solutions for your business needs"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card
            key={index}
            className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Card className="max-w-3xl mx-auto bg-primary/5 border-2 border-primary">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a wholesaler, retailer, or brand owner, we have the expertise and capacity 
              to meet your garment manufacturing needs. Contact us today to discuss your requirements.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
