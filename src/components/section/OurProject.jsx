import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import ProjectCard from "../card/ProjectCard";
import "@splidejs/react-splide/css";

export default function OurProjectSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const projects = [
    {
      id: 1,
      company: "Ivolks Creative",
      name: "Landing Page Company Profile",
      imageUrl: "/projects/ivolks.jpg",
    },
    {
      id: 2,
      company: "Hamim",
      name: "Mobile App for Learn to recite the Quran",
      imageUrl: "/projects/hamim.jpg",
    },
    {
      id: 3,
      company: "Badan Perkerasan dan Lingkungan Jalan",
      name: "Landing Page Company Profile",
      imageUrl: "/projects/bplj.jpg",
    },
    {
      id: 4,
      company: "Onifarms",
      name: "Mobile App for Farmers",
      imageUrl: "/projects/onifarms.jpg",
    },
    {
      id: 5,
      company: "Pertamina",
      name: "Dashboard Company",
      imageUrl: "/projects/pertamina.jpg",
    },
    {
      id: 6,
      company: "Stylish",
      name: "E-commerce Mobile App for fashion",
      imageUrl: "/projects/stylish.jpg",
    },
    {
      id: 7,
      company: "PPID",
      name: "Content Management System",
      imageUrl: "/projects/edutrain.jpg",
    },
  ];

  // Calculate total pages based on screen size
  const itemsPerPage = {
    lg: 6, // 3x2 grid on large screens
    md: 3, // 1x3 grid on medium/mobile screens
  };

  const totalPages = Math.ceil(projects.length / itemsPerPage.lg);
  const totalMobilePages = Math.ceil(projects.length / itemsPerPage.md);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // Get visible projects based on current page and screen size
  const getVisibleProjects = () => {
    const startIndex = currentPage * itemsPerPage.lg;
    return projects.slice(startIndex, startIndex + itemsPerPage.lg);
  };

  // Get mobile visible projects
  const getMobileVisibleProjects = () => {
    const startIndex = currentPage * itemsPerPage.md;
    return projects.slice(startIndex, startIndex + itemsPerPage.md);
  };

  return (
    <div className="px-[5%] md:px-[3%] pt-[7%] pb-[7%] md:pb-0">
      <p className="text-right text-2xl text-primary-600 font-medium">Our Completed Project</p>
      <div className="flex justify-center w-full pt-[3%]">
        <div className="w-full rounded-lg backdrop-blur-2xl">
          <div className="py-[1%] px-[5%]">
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                gap: "1rem",
                focus: "center",
                arrows: true,
                pagination: false,
                drag: true,
                breakpoints: {
                  1024: {
                    perPage: 2,
                  },
                  768: {
                    perPage: 1,
                  },
                  480: {
                    perPage: 1,
                  },
                },
              }}>
              {projects.map((project) => (
                <SplideSlide key={project.id}>
                  <ProjectCard company={project.company} name={project.name} imageUrl={project.imageUrl} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}
