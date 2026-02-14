import { Mail, FileText } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const getAppIdentifier = () => {
    try {
      return encodeURIComponent(window.location.hostname);
    } catch {
      return 'shri-guha-international';
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/sgi-logo.dim_512x512.png"
                alt="Shri Guha International"
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-lg font-bold text-primary">Shri Guha International</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Quality garment manufacturing for wholesalers, retailers, and brand owners since 2019.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:shriguhainternational@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    shriguhainternational@gmail.com
                  </a>
                  <a
                    href="mailto:harigovindvs100@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    harigovindvs100@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium">GSTIN:</span> 33BJLPH3465H1Z7
                </p>
              </div>
            </div>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal Information</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium">Trade Name:</span> Guha International
              </p>
              <p>
                <span className="font-medium">Registration:</span> Proprietorship
              </p>
              <p>
                <span className="font-medium">GST Active Since:</span> 26 October 2019
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Shri Guha International. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with{' '}
              <span className="text-primary inline-block animate-pulse">❤</span>{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
