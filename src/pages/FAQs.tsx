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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageCircle,
  HelpCircle,
  Shield,
  Zap,
  Users,
  Code,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const FAQs = () => {
  const { t } = useLanguage();

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
                    {t("pages.faqs.helpCenter")} ❓
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.faqs.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.faqs.faqsDescription")}
                  </p>
                </div>
              </div>
            </section>

            {/* FAQs Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <Tabs defaultValue="general" className="w-full">
                  <TabsList className="grid w-full grid-cols-6 mb-8 h-12">
                    <TabsTrigger
                      value="general"
                      className="tab-header text-sm px-3 py-2 h-full flex items-center justify-center"
                    >
                      <HelpCircle className="h-4 w-4 mr-2" />
                      {t("pages.faqs.general")}
                    </TabsTrigger>
                    <TabsTrigger
                      value="technical"
                      className="tab-header text-sm px-3 py-2 h-full flex items-center justify-center"
                    >
                      <Code className="h-4 w-4 mr-2" />
                      {t("pages.faqs.technical")}
                    </TabsTrigger>
                    <TabsTrigger
                      value="security"
                      className="tab-header text-sm px-3 py-2 h-full flex items-center justify-center"
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      {t("pages.faqs.security")}
                    </TabsTrigger>
                    <TabsTrigger
                      value="fees"
                      className="tab-header text-sm px-3 py-2 h-full flex items-center justify-center"
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      {t("pages.faqs.fees")}
                    </TabsTrigger>
                    <TabsTrigger
                      value="vietnamese"
                      className="tab-header text-sm px-3 py-2 h-full flex items-center justify-center"
                    >
                      🇻🇳
                      {t("pages.faqs.vietnamese")}
                    </TabsTrigger>
                    <TabsTrigger
                      value="support"
                      className="tab-header text-sm px-3 py-2 h-full flex items-center justify-center"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      {t("pages.faqs.support")}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="general" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5" />
                          {t("pages.faqs.generalQuestions")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.faqs.generalDescription")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="what-is-lotus">
                            <AccordionTrigger>
                              What is Lotus Bridge?
                            </AccordionTrigger>
                            <AccordionContent>
                              Lotus Bridge is a decentralized cross-chain bridge
                              that enables secure and efficient transfers of
                              digital assets between different blockchain
                              networks. Built with Vietnamese innovation, it
                              focuses on providing low-cost, fast transactions
                              while maintaining the highest security standards.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="supported-networks">
                            <AccordionTrigger>
                              Which networks are supported?
                            </AccordionTrigger>
                            <AccordionContent>
                              Currently, Lotus Bridge supports Ethereum,
                              Polygon, Binance Smart Chain, Avalanche, Arbitrum,
                              and Optimism. We're continuously expanding our
                              network support based on community demand and
                              Vietnamese market needs.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="how-to-start">
                            <AccordionTrigger>
                              How do I start using Lotus Bridge?
                            </AccordionTrigger>
                            <AccordionContent>
                              To start using Lotus Bridge: 1) Connect your Web3
                              wallet (MetaMask, WalletConnect, etc.), 2) Select
                              the source and destination networks, 3) Choose the
                              token and amount to bridge, 4) Review the
                              transaction details and fees, 5) Confirm the
                              transaction. The process typically takes 30
                              seconds to 2 minutes.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="transaction-time">
                            <AccordionTrigger>
                              How long do transactions take?
                            </AccordionTrigger>
                            <AccordionContent>
                              Transaction times vary by network pair: Ethereum ↔
                              Polygon: 30-60 seconds, BSC ↔ Avalanche: 45-90
                              seconds, Arbitrum ↔ Optimism: 20-45 seconds. Times
                              may be longer during network congestion.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="minimum-maximum">
                            <AccordionTrigger>
                              Are there minimum or maximum limits?
                            </AccordionTrigger>
                            <AccordionContent>
                              Minimum: $10 USD equivalent per transaction.
                              Maximum: $100,000 USD equivalent per transaction,
                              $500,000 USD equivalent per day. Higher limits
                              available for verified institutional users.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="technical" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Code className="h-5 w-5" />
                          {t("pages.faqs.technicalQuestions")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.faqs.technicalDescription")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="consensus-mechanism">
                            <AccordionTrigger>
                              What consensus mechanism does Lotus Bridge use?
                            </AccordionTrigger>
                            <AccordionContent>
                              Lotus Bridge uses the Lotus Consensus Algorithm
                              (LCA), a hybrid Proof-of-Stake mechanism designed
                              for cross-chain operations. It combines Byzantine
                              Fault Tolerance with optimistic verification for
                              fast finality while maintaining security.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="smart-contracts">
                            <AccordionTrigger>
                              Are smart contracts open source?
                            </AccordionTrigger>
                            <AccordionContent>
                              Yes, all Lotus Bridge smart contracts are open
                              source and available on GitHub. They have been
                              audited by Trail of Bits, Quantstamp, and CertiK.
                              Contract addresses are published on our
                              documentation site.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="api-integration">
                            <AccordionTrigger>
                              How can developers integrate with Lotus Bridge?
                            </AccordionTrigger>
                            <AccordionContent>
                              Developers can integrate using our REST API,
                              GraphQL endpoint, or directly interact with smart
                              contracts. We provide SDKs for JavaScript, Python,
                              and Go. Full documentation and examples are
                              available in our Developer Docs section.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="validator-network">
                            <AccordionTrigger>
                              How does the validator network work?
                            </AccordionTrigger>
                            <AccordionContent>
                              Lotus Bridge operates with a decentralized
                              validator network of 100+ nodes globally, with
                              special focus on Vietnamese validators. Validators
                              stake LOTUS tokens and earn rewards for processing
                              cross-chain transactions. Misbehavior results in
                              slashing penalties.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          {t("pages.faqs.securityQuestions")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.faqs.securityDescription")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="fund-security">
                            <AccordionTrigger>
                              How are my funds protected?
                            </AccordionTrigger>
                            <AccordionContent>
                              Funds are protected through multiple layers:
                              cryptographic proofs, multi-signature validation,
                              time-locked transactions, and a $10M security
                              fund. Smart contracts use battle-tested patterns
                              and have undergone extensive security audits.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="private-keys">
                            <AccordionTrigger>
                              Does Lotus Bridge have access to my private keys?
                            </AccordionTrigger>
                            <AccordionContent>
                              No, Lotus Bridge is completely non-custodial. We
                              never have access to your private keys or funds.
                              All transactions are executed through smart
                              contracts that you interact with directly using
                              your wallet.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="audit-reports">
                            <AccordionTrigger>
                              Where can I find security audit reports?
                            </AccordionTrigger>
                            <AccordionContent>
                              All security audit reports are publicly available
                              on our website. We've been audited by Trail of
                              Bits (completed), Quantstamp (completed), and
                              CertiK (in progress). Reports cover smart
                              contracts, protocol design, and operational
                              security.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="bug-bounty">
                            <AccordionTrigger>
                              Do you have a bug bounty program?
                            </AccordionTrigger>
                            <AccordionContent>
                              Yes, we offer up to $100,000 for critical
                              vulnerabilities. Our bug bounty program covers
                              smart contracts, web interfaces, and
                              infrastructure. Submit reports through our secure
                              disclosure process.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="fees" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          {t("pages.faqs.feesAndCosts")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.faqs.feesDescription")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="bridge-fees">
                            <AccordionTrigger>
                              What are the bridge fees?
                            </AccordionTrigger>
                            <AccordionContent>
                              Bridge fees are 0.1% of transaction value, with a
                              minimum of $1 and maximum of $50. This covers
                              validator rewards, protocol maintenance, and
                              security measures. Fees are automatically deducted
                              from the bridged amount.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="gas-costs">
                            <AccordionTrigger>
                              Who pays for gas costs?
                            </AccordionTrigger>
                            <AccordionContent>
                              Users pay gas costs for the source network
                              transaction. Destination network gas is covered by
                              Lotus Bridge validators and included in the bridge
                              fee. This ensures users only need native tokens on
                              the source network.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="fee-calculation">
                            <AccordionTrigger>
                              How are fees calculated?
                            </AccordionTrigger>
                            <AccordionContent>
                              Total cost = Bridge fee (0.1%) + Source network
                              gas + Price impact (if applicable). Fees are
                              calculated in real-time and displayed before
                              transaction confirmation. No hidden fees or
                              surprise charges.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="fee-discounts">
                            <AccordionTrigger>
                              Are there any fee discounts available?
                            </AccordionTrigger>
                            <AccordionContent>
                              Yes! LOTUS token holders receive fee discounts:
                              0.075% with 1,000+ LOTUS, 0.05% with 10,000+
                              LOTUS, 0.025% with 100,000+ LOTUS. Vietnamese
                              users get additional 10% discount during the first
                              year.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="vietnamese" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          🇻🇳
                          {t("pages.faqs.vietnameseCommunity")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.faqs.vietnameseDescription")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="vn-regulations">
                            <AccordionTrigger>
                              Is Lotus Bridge compliant with Vietnamese
                              regulations?
                            </AccordionTrigger>
                            <AccordionContent>
                              Yes, Lotus Bridge operates in compliance with
                              Vietnamese cryptocurrency regulations and works
                              closely with local authorities. We follow all KYC
                              and AML requirements for Vietnamese users and
                              maintain proper licensing where required.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="vn-support">
                            <AccordionTrigger>
                              Do you provide Vietnamese language support?
                            </AccordionTrigger>
                            <AccordionContent>
                              Absolutely! Our interface is fully available in
                              Vietnamese, and our support team includes native
                              Vietnamese speakers. We also have localized
                              content, tutorials, and community channels in
                              Vietnamese.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="vn-tokens">
                            <AccordionTrigger>
                              Which Vietnamese tokens are supported?
                            </AccordionTrigger>
                            <AccordionContent>
                              We support major Vietnamese tokens including VND
                              stablecoins, Vietnamese DeFi tokens, and NFT
                              project tokens. We prioritize adding tokens that
                              are popular in the Vietnamese market and work with
                              local projects for integration.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="vn-partnerships">
                            <AccordionTrigger>
                              Do you partner with Vietnamese exchanges?
                            </AccordionTrigger>
                            <AccordionContent>
                              Yes, we have partnerships with major Vietnamese
                              exchanges and DeFi platforms. This enables
                              seamless integration and better liquidity for
                              Vietnamese users. We're always open to new
                              partnerships that benefit our Vietnamese
                              community.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="vn-education">
                            <AccordionTrigger>
                              Do you provide education for Vietnamese users?
                            </AccordionTrigger>
                            <AccordionContent>
                              Yes! We offer comprehensive educational resources
                              in Vietnamese including video tutorials,
                              step-by-step guides, webinars, and community
                              workshops. Our goal is to make cross-chain DeFi
                              accessible to all Vietnamese users.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="support" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          {t("pages.faqs.supportAndHelp")}
                        </CardTitle>
                        <CardDescription>
                          {t("pages.faqs.supportDescription")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="contact-support">
                            <AccordionTrigger>
                              How can I contact support?
                            </AccordionTrigger>
                            <AccordionContent>
                              Multiple support channels available: 1) Discord
                              community (fastest response), 2) Email:
                              support@lotusbridge.io, 3) Telegram support bot,
                              4) Help widget on the website. Average response
                              time is under 2 hours.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="stuck-transaction">
                            <AccordionTrigger>
                              What if my transaction is stuck?
                            </AccordionTrigger>
                            <AccordionContent>
                              If a transaction appears stuck: 1) Check the
                              transaction status on our dashboard, 2) Verify
                              network confirmations, 3) Wait for automatic retry
                              (up to 1 hour), 4) Contact support with
                              transaction hash if issue persists. Most issues
                              resolve automatically.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="wrong-network">
                            <AccordionTrigger>
                              I sent tokens to the wrong network. Can you help?
                            </AccordionTrigger>
                            <AccordionContent>
                              Recovery depends on the specific case. If tokens
                              were sent to a supported network, recovery is
                              usually possible. Contact support immediately with
                              transaction details. For unsupported networks,
                              recovery may not be possible.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="report-bug">
                            <AccordionTrigger>
                              How do I report a bug or issue?
                            </AccordionTrigger>
                            <AccordionContent>
                              Report bugs through: 1) Discord #bug-reports
                              channel, 2) GitHub issues for technical problems,
                              3) Email for security issues, 4) Bug bounty
                              program for serious vulnerabilities. Include
                              detailed steps to reproduce the issue.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="feature-request">
                            <AccordionTrigger>
                              Can I request new features?
                            </AccordionTrigger>
                            <AccordionContent>
                              Absolutely! We welcome feature requests from our
                              community. Submit suggestions through Discord,
                              governance forums, or email. Popular requests are
                              prioritized in our development roadmap. Vietnamese
                              market needs get special consideration.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                {/* Contact Section */}
                <div className="mt-16">
                  <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">
                        {t("pages.faqs.stillHaveQuestions")}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {t("pages.faqs.communitySupport")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="text-center">
                          <MessageCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-semibold">
                            {t("pages.faqs.discordCommunity")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t("pages.faqs.discordDescription")}
                          </p>
                        </div>
                        <div className="text-center">
                          <Users className="h-8 w-8 mx-auto mb-2 text-accent" />
                          <h4 className="font-semibold">
                            {t("pages.faqs.vietnameseSupport")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t("pages.faqs.vietnameseSupportDescription")}
                          </p>
                        </div>
                        <div className="text-center">
                          <HelpCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-semibold">
                            {t("pages.faqs.developerDocs")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t("pages.faqs.developerDocsDescription")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default FAQs;
