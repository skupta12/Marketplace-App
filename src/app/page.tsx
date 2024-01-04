import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

// Creating our services as objects in array

const perks = [
  {
    name: 'Instant Delivery',
    icon: ArrowDownToLine,
    description: "Get your assets delivered to your email in seconds and download them right away."

  },

  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description: "Every asset on our platform is varified by our team to ensure quality standarts. Not happy? We offer a 30-day refund guarantee period."

  },

  {
    name: 'For the Planet',
    icon: Leaf,
    description: "we've pledged 1% of sales to the preservation and restoration of thr natural environments."

  },
]

export default function Home() {
  return (
    <> {/* self closing tag used to wrap multiple elements without creating an additional DOM element. */}
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Marketplace for high-quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to NameOfEcommerce. Every asset on our platform is verified
            by our team to ensure our highest quality standarts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}> {/* shadcn library to get already built variants of buttons(npx shadcn-ui@latest add button) */}
              Browse Trending
            </Link>
            <Button variant="ghost">Our Quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: list products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 
          lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
           {perks.map((perk) => ( /* map method to get values from objects in array */
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className="w-1/2 h-1/2"/>}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
           ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
