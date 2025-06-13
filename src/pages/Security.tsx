import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Security = () => {
  const { t, language } = useLanguage();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Header />
          <div className="relative">
            <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />

            {/* Hero Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">
                    🛡️ Security Framework
                  </Badge>
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Security
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Multi-layered security approach protecting user assets and
                    network integrity with Vietnamese innovation at its core.
                  </p>
                </div>
              </div>
            </section>

            {/* Security Framework */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Security Framework
                    </CardTitle>
                    <CardDescription>
                      Multi-layered security approach protecting user assets and
                      network integrity
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">
                          Cryptographic Security
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Lock className="h-4 w-4 text-green-500 mt-1" />
                            <div>
                              <p className="font-medium text-sm">
                                Zero-Knowledge Proofs
                              </p>
                              <p className="text-xs text-muted-foreground">
                                State transitions verified without revealing
                                sensitive data
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Lock className="h-4 w-4 text-green-500 mt-1" />
                            <div>
                              <p className="font-medium text-sm">
                                Multi-Signature Validation
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Requires consensus from multiple validators for
                                asset transfers
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Lock className="h-4 w-4 text-green-500 mt-1" />
                            <div>
                              <p className="font-medium text-sm">
                                Time-Locked Transactions
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Emergency pause mechanisms for suspicious
                                activities
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Network Security</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Shield className="h-4 w-4 text-blue-500 mt-1" />
                            <div>
                              <p className="font-medium text-sm">
                                Byzantine Fault Tolerance
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Resistant to up to 33% of validators acting
                                maliciously
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Shield className="h-4 w-4 text-blue-500 mt-1" />
                            <div>
                              <p className="font-medium text-sm">
                                Slashing Conditions
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Economic penalties for validator misbehavior
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Shield className="h-4 w-4 text-blue-500 mt-1" />
                            <div>
                              <p className="font-medium text-sm">
                                Decentralized Monitoring
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Real-time network health and threat detection
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Security Audits */}
            <section className="py-16 px-6 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🔍 Security Audits
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Independent security reviews by leading blockchain security
                    firms
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle>Trail of Bits</CardTitle>
                      <CardDescription>Smart Contract Audit</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="secondary" className="mb-2">
                        Completed
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive smart contract security review covering
                        all core protocols
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle>Quantstamp</CardTitle>
                      <CardDescription>
                        Protocol Security Review
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="secondary" className="mb-2">
                        Completed
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Protocol-level security assessment and vulnerability
                        analysis
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center mx-auto mb-2">
                        <AlertTriangle className="h-6 w-6 text-yellow-600" />
                      </div>
                      <CardTitle>CertiK</CardTitle>
                      <CardDescription>Formal Verification</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="outline" className="mb-2">
                        In Progress
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Mathematical verification of protocol correctness and
                        security properties
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Security Guarantee */}
            <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-2xl font-bold text-green-800 dark:text-green-400">
                        Security Guarantee
                      </h3>
                      <p className="text-green-700 dark:text-green-300">
                        Protection backed by comprehensive security measures
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-400 mb-3">
                        $10M Security Fund
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                        Lotus Bridge maintains a $10M security fund to protect
                        users against potential exploits. This fund is managed
                        by a multi-signature wallet with governance oversight.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-400 mb-3">
                        Bug Bounty Program
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                        Active bug bounty program with rewards up to $100,000
                        for critical vulnerabilities. Join our security
                        community and help protect the ecosystem.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-400 mb-3">
                      🇻🇳 Vietnamese Security Standards
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Our security protocols meet and exceed Vietnamese
                      cybersecurity standards, ensuring compliance with local
                      regulations while maintaining global security best
                      practices.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center">
                  <Link to="/architecture">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Architecture
                    </Button>
                  </Link>
                  <Link to="/core-concept">
                    <Button variant="outline">Back to Core Concept</Button>
                  </Link>
                  <Link to="/tokenomics">
                    <Button className="flex items-center gap-2">
                      Tokenomics
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Security;
