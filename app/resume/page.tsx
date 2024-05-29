"use client";

import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { IconDownload } from "@tabler/icons-react";
import { SparklesCore } from "../components/ui/sparkles";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumePage() {
  const [width, setWidth] = useState(1200);
  const pdfUrl = "/pdfs/newResume.pdf";
  const [activePage, setActivePage] = useState(1);
  const [documentLoading, setDocumentLoading] = useState(true);
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setDocumentLoading(false);
    setNumPages(numPages);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleDownload = () => {
    // Construct the URL to your PDF file in the public directory

    // Create an anchor element and simulate a click event to trigger the download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "newResume.pdf";
    link.click();
  };

  return (
    <div className="py-24">
      <div className="resume-section bg-transparent">
        <div className="w-full absolute inset-0 h-full pointer-events-none">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        {documentLoading && (
          <div className="flex justify-center items-center h-[90rem] w-[65rem]">
            {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#616467]"> */}
            <div className="flex flex-1 w-full h-full min-h-[6rem]  bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
            {/* </div> */}
          </div>
        )}

        <div className={`justify-center ${documentLoading ? "hidden" : ""}`}>
          <Document
            loading={documentLoading}
            file={pdfUrl}
            onLoadSuccess={(e) => {
              setTimeout(() => {
                onDocumentLoadSuccess(e);
              }, 1000);
            }}
            className="h-[89rem] flex justify-center overflow-hidden"
          >
            <Page pageNumber={activePage} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>
        {!documentLoading && (
          <div className="flex justify-center my-8 gap-5">
            <button
              onClick={() => setActivePage(activePage - 1)}
              disabled={activePage === 1}
              className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
            >
              Previous
            </button>
            <button
              onClick={() => setActivePage(activePage + 1)}
              disabled={activePage === numPages}
              className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
            >
              Next
            </button>
          </div>
        )}
        {!documentLoading && (
          <button
            onClick={handleDownload}
            className="fixed right-0 bottom-0 m-4 bg-slate-800 no-underline group cursor-pointer shadow-2xl shadow-zinc-900 rounded-full p-px text-md font-semibold leading-6 text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10 ">
              <IconDownload className="h-5 w-5" />
              <span>Download CV</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ResumePage;
