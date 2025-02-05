"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
        <h1 className="heading">Our <span className="text-purple">Process</span></h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card title="Concept and Design" icon={<AceternityIcon order="Phase 1"  />} 
        des="In this initial phase, we collaborate with our clients to bring their ideas to life. Our expert team works closely with you to refine concepts and create detailed designs that align with market trends and consumer needs. We leverage our industry knowledge and creative skills to ensure that each product is innovative, functional, and visually appealing.">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-500"
          />
        </Card>
        <Card 
            title="Supplier Identification & Sample Evaluation"
            icon={<AceternityIcon order="Phase 2"
        />}
        des="Once the concept and design are finalized, we move on to identifying the best suppliers. Our extensive network across the 12 diffferent countries in Asia allows us to source high-quality manufacturers. We conduct thorough audits to ensure reliability and performance, and provide sample evaluation services to compare different options and select the best products for our clients."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card 
            title="Quality Assurance & Market Introduction"
            icon={<AceternityIcon order="Phase 3"
        />} des="The final phase focuses on ensuring that the products meet the highest standards of quality and are ready for the market. We offer comprehensive quality assurance services, including production monitoring, during production inspections, pre-shipment inspections, and factory audits. Our goal is to ensure that every product not only meets but exceeds expectations. Once quality is assured, we assist with the market introduction, leveraging our expertise in e-commerce and social media platforms to maximize reach and impact.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p style={{color: '#e4ecff'}} className="dark:text-white text-center text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}:{order:string}) => {
  return (
    <div>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {order}
        </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};


export default Approach;