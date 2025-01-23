import type { StaticImageData } from "next/image";
import Image from "next/image";
import type React from "react";

interface Course {
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  alt?: string;
  src?: string | React.ReactNode | StaticImageData;
}

export const CourseIcon: React.FC<Course> = ({
  width,
  height,
  loading = "lazy",
  alt = "course-img",
  src,
}) => {
  return (
    <div>
      <Image
        loading={loading}
        alt={alt}
        src={typeof src === "string" ? src : (src as StaticImageData)}
        width={width}
        height={height}
      />
    </div>
  );
};
