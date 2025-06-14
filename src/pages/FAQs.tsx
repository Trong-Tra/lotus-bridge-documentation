
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ArrowLeft, HelpCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const FAQs = () => {
  const { t } = useLanguage();

  const generalFaqs = t("faqs.generalFaqs") as unknown as Array<{question: string, answer: string}>;
  const technicalFaqs = t("faqs.technicalFaqs") as unknown as Array<{question: string, answer: string}>;
  const vietnameseFaqs = t("faqs.vietnameseFaqs") as unknown as Array<{question: string, answer: string}>;

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
                    ❓ Help Center
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("faqs.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("faqs.subtitle")}
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Content */}
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <HelpCircle className="h-6 w-6 text-primary" />
                      <CardTitle className="text-2xl">
                        {t("faqs.title")}
                      </CardTitle>
                    </div>
                    <CardDescription>
                      Find answers to the most common questions about Lotus
                      Bridge
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="general" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 mb-8">
                        <TabsTrigger
                          value="general"
                          className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          <span className="text-lg">🌸</span>
                          {t("faqs.general")}
                        </TabsTrigger>
                        <TabsTrigger
                          value="technical"
                          className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          <span className="text-lg">⚡</span>
                          {t("faqs.technical")}
                        </TabsTrigger>
                        <TabsTrigger
                          value="vietnamese"
                          className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          <span className="text-lg">🇻🇳</span>
                          {t("faqs.vietnamese")}
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="general">
                        <Accordion type="single" collapsible className="space-y-4">
                          {generalFaqs?.map((faq, index) => (
                            <AccordionItem
                              key={index}
                              value={`general-${index}`}
                              className="border rounded-lg px-4"
                            >
                              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </TabsContent>

                      <TabsContent value="technical">
                        <Accordion type="single" collapsible className="space-y-4">
                          {technicalFaqs?.map((faq, index) => (
                            <AccordionItem
                              key={index}
                              value={`technical-${index}`}
                              className="border rounded-lg px-4"
                            >
                              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </TabsContent>

                      <TabsContent value="vietnamese">
                        <Accordion type="single" collapsible className="space-y-4">
                          {vietnameseFaqs?.map((faq, index) => (
                            <AccordionItem
                              key={index}
                              value={`vietnamese-${index}`}
                              className="border rounded-lg px-4"
                            >
                              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <Separator className="my-12" />

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to="/roadmap">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Roadmap
                    </Link>
                  </Button>

                  <div className="text-center">
                    <h3 className="text-lg font-semibold">
                      Track our progress
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      See what's new in our changelog
                    </p>
                  </div>

                  <Button className="gap-2" asChild>
                    <Link to="/changelog">
                      View Changelog
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
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
