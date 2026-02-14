import { Section } from '@/components/Section';
import { Mail, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ContactSection() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Addresses',
      items: [
        {
          label: 'Company Email',
          value: 'shriguhainternational@gmail.com',
          href: 'mailto:shriguhainternational@gmail.com'
        },
        {
          label: 'Personal Email',
          value: 'harigovindvs100@gmail.com',
          href: 'mailto:harigovindvs100@gmail.com'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Legal Information',
      items: [
        {
          label: 'GSTIN',
          value: '33BJLPH3465H1Z7',
          href: null
        },
        {
          label: 'Registration Status',
          value: 'Active since 26 October 2019',
          href: null
        }
      ]
    }
  ];

  return (
    <Section
      id="contact"
      title="Contact Us"
      subtitle="Get in touch with us for inquiries, orders, or partnership opportunities"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactDetails.map((section, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{section.title}</h3>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <div key={idx}>
                      <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-primary hover:underline break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground break-words">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary">
          <CardContent className="pt-8 pb-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Order?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your garment manufacturing requirements. Our team is ready to 
              assist you with quotes, samples, and any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:shriguhainternational@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
              <a
                href="mailto:harigovindvs100@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Alternative Email
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
