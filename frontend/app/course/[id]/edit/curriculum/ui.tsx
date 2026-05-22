"use client";

import { Course } from "@/generated/openapi-client";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/lib/api";
import { notFound } from "next/navigation";

export default function UI({ course }: { course: Course }) {
  const courseQuery = useQuery({
    queryFn: async () => {
      const { data, error } = await api.getCourseById(course.id);
      if (!data || error) {
        notFound();
      }

      return data;
    },
    queryKey: ["course", course.id],
    initialData: course,
  });
  return <div>커리큘럼 페이지</div>;
}
