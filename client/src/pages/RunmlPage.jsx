import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Terminal, Github, Download } from "lucide-react";

export default function RunmlPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white px-6 py-12 space-y-16">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight dark:text-white">
          runml
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
          A sleek mini-language compiler that transpiles{" "}
          <code className="dark:text-gray-300">ml</code> into blazing-fast C11
          executables.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="gap-2">
            <Github size={18} />
            View on GitHub
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/runml.zip"; // Update this path
              link.download = "runml.zip"; // Default filename when downloaded
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4 dark:text-white">
            Installation
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Unix-like system (Linux/macOS)</li>
            <li>C11 compiler (GCC or Clang)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4 dark:text-white">
            Build Instructions
          </h2>
          <Card className="dark:border-gray-700">
            <CardContent className="p-4 bg-black dark:bg-gray-800 text-white dark:text-gray-200 font-mono rounded-xl">
              <p>
                $ git clone https://github.com/niranjan-v2/mini-lang-transpiler
              </p>
              <p>$ cd mini-lang-transpiler</p>
              <p>$ make</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center dark:text-white">
          How it Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-gray-700 dark:text-gray-300">
          {[
            "Validate syntax of the .ml file",
            "Transpile into C11 code",
            "Compile with C compiler",
            "Execute with args",
          ].map((step, i) => (
            <div key={i} className="text-center">
              <CheckCircle
                className="mx-auto mb-2 text-blue-600 dark:text-blue-400"
                size={28}
              />
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 dark:text-white">Usage</h2>
        <Card className="dark:border-gray-700">
          <CardContent className="p-4 bg-zinc-900 dark:bg-gray-800 text-white dark:text-gray-200 rounded-xl font-mono">
            ./runml program.ml 2.71828 3.14
          </CardContent>
        </Card>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          All output appears on stdout. Temporary files are cleaned
          automatically.
        </p>
      </section>

      <section className="max-w-5xl mx-auto">
        <Tabs defaultValue="language">
          <TabsList className="mb-6 dark:bg-gray-800">
            <TabsTrigger
              value="language"
              className="dark:data-[state=active]:bg-gray-700"
            >
              ml Language
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="dark:data-[state=active]:bg-gray-700"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="future"
              className="dark:data-[state=active]:bg-gray-700"
            >
              Future Work
            </TabsTrigger>
          </TabsList>
          <TabsContent value="language">
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Real numbers only</li>
              <li>1–12 lowercase alphabetic identifiers</li>
              <li>Pre-initialized variables</li>
              <li>
                Comments with <code className="dark:text-gray-400">#</code>
              </li>
              <li>Functions must be defined before use</li>
            </ul>
          </TabsContent>
          <TabsContent value="features">
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Transpiles to portable C11 code</li>
              <li>No third-party dependencies</li>
              <li>Single-source file implementation</li>
              <li>Precise output formatting</li>
            </ul>
          </TabsContent>
          <TabsContent value="future">
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Conditionals</li>
              <li>Loops</li>
              <li>Multiple data types</li>
            </ul>
          </TabsContent>
        </Tabs>
      </section>

      <footer className="text-center text-gray-500 dark:text-gray-400 py-12 text-sm">
        © 2025 runml — Crafted by Niranjan V
      </footer>
    </div>
  );
}
